import { spawnSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';
import ffmpeg from '@ffmpeg-installer/ffmpeg';

const publicDir = join(process.cwd(), 'public');

const jobs = [
  ['hero-bg.mp4', 'hero-bg-preview.mp4', true],
  ['ai-short-film-red-blue-warrior.mp4', 'ai-short-film-red-blue-warrior-preview.mp4', false],
  ['ai-short-film-featured.mp4', 'ai-short-film-featured-preview.mp4', false],
  ['ai-short-film.mp4', 'ai-short-film-preview.mp4', false],
  ['ai-short-film-02.mp4', 'ai-short-film-02-preview.mp4', false],
  ['ai-short-film-04.mp4', 'ai-short-film-04-preview.mp4', false],
  ['ai-short-film-05.mp4', 'ai-short-film-05-preview.mp4', false],
  ['virtual-commerce-video-01.mp4', 'virtual-commerce-video-01-preview.mp4', false],
  ['virtual-commerce-video-02.mp4', 'virtual-commerce-video-02-preview.mp4', false],
  ['virtual-commerce-video-03.mp4', 'virtual-commerce-video-03-preview.mp4', false],
  ['virtual-commerce-video-04.mp4', 'virtual-commerce-video-04-preview.mp4', false],
];

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)}MB`;

for (const [inputName, outputName, noAudio] of jobs) {
  const input = join(publicDir, inputName);
  const output = join(publicDir, outputName);

  if (!existsSync(input)) {
    console.warn(`skip missing ${inputName}`);
    continue;
  }

  if (existsSync(output) && statSync(output).mtimeMs > statSync(input).mtimeMs) {
    console.log(`skip fresh ${outputName} (${mb(statSync(output).size)})`);
    continue;
  }

  console.log(`compress ${inputName} -> ${outputName}`);
  const args = [
    '-y',
    '-i',
    input,
    '-vf',
    "scale='min(1280,iw)':-2",
    '-c:v',
    'libx264',
    '-preset',
    'veryfast',
    '-crf',
    '28',
    '-pix_fmt',
    'yuv420p',
    '-movflags',
    '+faststart',
  ];

  if (noAudio) {
    args.push('-an');
  } else {
    args.push('-c:a', 'aac', '-b:a', '96k');
  }

  args.push(output);

  const result = spawnSync(ffmpeg.path, args, { stdio: 'inherit' });
  if (result.status !== 0) {
    throw new Error(`ffmpeg failed for ${basename(input)}`);
  }

  console.log(`done ${outputName}: ${mb(statSync(input).size)} -> ${mb(statSync(output).size)}`);
}
