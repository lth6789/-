import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const splitText = (element) => {
  if (!element || element.dataset.splitReady === 'true') return [];
  const text = element.textContent;
  element.textContent = '';
  element.dataset.splitReady = 'true';
  return Array.from(text).map((char) => {
    const span = document.createElement('span');
    span.className = 'char-reveal';
    span.textContent = char === ' ' ? '\u00a0' : char;
    element.appendChild(span);
    return span;
  });
};

export function initPortfolioAnimations() {
  if (typeof window === 'undefined') return () => {};
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const ctx = gsap.context(() => {
    gsap.set('.hero-panel', { clipPath: 'inset(12% 12% 12% 12% round 34px)' });
    gsap.set('.hero-video', { scale: 1.12, filter: 'brightness(0.72) contrast(1.08)' });
    gsap.set('.nav', { y: -34, autoAlpha: 0 });
    gsap.set('.hero-kicker, .hero-copy p, .hero-actions, .hero-index, .hero-hud-left, .hero-miniworks, .hero-side', {
      y: 34,
      autoAlpha: 0,
    });
    gsap.set('.hero-title span, .hero-title strong', {
      yPercent: 120,
      scaleY: 0.58,
      transformOrigin: '50% 100%',
    });

    const chars = splitText(document.querySelector('.hero-copy h1'));
    gsap.set(chars, { yPercent: 120, scaleY: 0.42, autoAlpha: 0, transformOrigin: '50% 100%' });

    const opening = gsap.timeline({ defaults: { ease: 'expo.out' } });
    opening
      .to('.hero-panel', { clipPath: 'inset(0% 0% 0% 0% round 34px)', duration: 1.55 })
      .to('.hero-video', { scale: 1, filter: 'brightness(0.88) contrast(1.04)', duration: 2.2 }, '<')
      .to('.nav', { y: 0, autoAlpha: 1, duration: 1.1 }, '-=1.2')
      .to(chars, { yPercent: 0, scaleY: 1, autoAlpha: 1, duration: 1.25, stagger: 0.018 }, '-=0.86')
      .to('.hero-title span, .hero-title strong', { yPercent: 0, scaleY: 1, duration: 1.45, stagger: 0.12 }, '-=1.1')
      .to('.hero-kicker, .hero-copy p, .hero-actions, .hero-index, .hero-hud-left, .hero-miniworks, .hero-side', {
        y: 0,
        autoAlpha: 1,
        duration: 1.15,
        stagger: 0.075,
      }, '-=0.95');

    gsap.utils.toArray('section:not(.hero)').forEach((section) => {
      const label = section.querySelector('.section-label');
      const heading = section.querySelector('h2');
      const intro = section.querySelector('.section-head p, .about-copy > p, .contact-inner p');
      const cards = section.querySelectorAll('.border-glow-card, .project-card, .strength-card, .contact-panel');
      const media = section.querySelectorAll('.project-media-frame, .portrait, .project-file-shelf');
      const textItems = [label, heading, intro].filter(Boolean);

      gsap.set(textItems, { autoAlpha: 0, y: 80 });
      if (heading) {
        gsap.set(heading, { scaleX: 1.18, transformOrigin: '0% 50%', clipPath: 'inset(0 100% 0 0)' });
      }
      gsap.set(cards, { autoAlpha: 0, y: 96, scale: 0.96, clipPath: 'inset(18% 0 18% 0 round 20px)' });
      gsap.set(media, { clipPath: 'inset(0 0 100% 0 round 18px)' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 72%',
          end: 'bottom 20%',
          once: true,
        },
        defaults: { ease: 'power4.out' },
      });

      tl.to(label, { autoAlpha: 1, y: 0, duration: 0.9 })
        .to(heading, { autoAlpha: 1, y: 0, scaleX: 1, clipPath: 'inset(0 0% 0 0)', duration: 1.25 }, '-=0.58');
      if (intro) {
        tl.to(intro, { autoAlpha: 1, y: 0, duration: 0.9 }, '-=0.66');
      }
      tl
        .to(media, { clipPath: 'inset(0 0 0% 0 round 18px)', duration: 1.12, stagger: 0.08 }, '-=0.58')
        .to(cards, { autoAlpha: 1, y: 0, scale: 1, clipPath: 'inset(0% 0 0% 0 round 20px)', duration: 1.1, stagger: 0.11 }, '-=0.9');
    });

    gsap.utils.toArray('.project-media-frame img, .project-media-frame video, .portrait img').forEach((item) => {
      gsap.to(item, {
        yPercent: -8,
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    });
  });

  ScrollTrigger.refresh();
  return () => ctx.revert();
}
