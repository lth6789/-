import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Film,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Play,
  Sparkles,
  Target,
  WandSparkles,
  X,
} from 'lucide-react';
import BorderGlow from './components/BorderGlow';
import { initPortfolioAnimations } from './animations';
import './styles.css';

const projects = [
  {
    label: 'AI MANJU',
    title: 'AI动画短片',
    meta: '个人创作',
    text: '围绕都市情绪叙事、人物关系与电影化视觉表达，完成故事概念、角色设定、分镜规划、AI画面生成、后期剪辑与发布。',
    accent: 'cyan',
    mediaItems: [
      {
        type: 'video',
        src: '/ai-short-film-red-blue-warrior-preview.mp4',
        label: '红蓝战士',
        note: 'AI动画短片 / 主展示视频',
      },
      {
        type: 'video',
        src: '/ai-short-film-sword-too-heavy-preview.mp4',
        label: '少年，剑太重',
        note: 'AI动画短片 / 视频作品',
      },
      {
        type: 'video',
        src: '/ai-short-film-featured-preview.mp4',
        label: '人物脸部特写',
        note: 'AI动画短片 / 视频文件',
      },
      {
        type: 'video',
        src: '/ai-short-film-02-preview.mp4',
        label: '战斗场面练习',
        note: 'AI动画短片 / 动作场面练习',
      },
    ],
  },
  {
    label: 'VIRTUAL HUMAN',
    title: 'AI虚拟人物带货内容',
    meta: '短视频带货 / AI虚拟人 / 内容运营',
    text: '参与虚拟人物形象、内容风格、短视频脚本与产品展示设计，理解虚拟人内容在电商转化场景中的表达逻辑。',
    accent: 'lime',
    mediaItems: [
      {
        type: 'image',
        src: '/virtual-commerce-01.jpg',
        label: '商品橱窗账号数据',
        note: '虚拟人物带货 / 账号运营',
      },
      {
        type: 'image',
        src: '/virtual-commerce-02.jpg',
        label: '账号主页与内容矩阵',
        note: '虚拟人物带货 / 抖音主页',
      },
      {
        type: 'image',
        src: '/virtual-commerce-03.jpg',
        label: '工作室账号主页',
        note: '虚拟人物带货 / 内容展示',
      },
      {
        type: 'image',
        src: '/virtual-commerce-04.jpg',
        label: '单条作品数据表现',
        note: '虚拟人物带货 / 数据截图',
      },
      {
        type: 'image',
        src: '/virtual-commerce-05.png',
        label: '黑色蕾丝裙商品图',
        note: '商品展示 / 虚拟模特',
      },
      {
        type: 'image',
        src: '/virtual-commerce-06.png',
        label: '紫色纱裙商品图',
        note: '商品展示 / 虚拟模特',
      },
      {
        type: 'image',
        src: '/virtual-commerce-07.png',
        label: '黑色修身裙商品图',
        note: '商品展示 / 虚拟模特',
      },
      {
        type: 'image',
        src: '/virtual-commerce-08.png',
        label: '绿色旗袍商品图',
        note: '商品展示 / 虚拟模特',
      },
      {
        type: 'image',
        src: '/virtual-commerce-09.png',
        label: '碎花长裙商品图',
        note: '商品展示 / 虚拟模特',
      },
      {
        type: 'image',
        src: '/virtual-commerce-10.png',
        label: '粉色连衣裙商品图',
        note: '商品展示 / 虚拟模特',
      },
      {
        type: 'image',
        src: '/virtual-commerce-11.png',
        label: '复古花裙商品图',
        note: '商品展示 / 虚拟模特',
      },
      {
        type: 'video',
        src: '/virtual-commerce-video-01-preview.mp4',
        label: '虚拟人物带货视频 01',
        note: '短视频带货 / 视频素材',
      },
      {
        type: 'video',
        src: '/virtual-commerce-video-02-preview.mp4',
        label: '虚拟人物带货视频 02',
        note: '短视频带货 / 视频素材',
      },
      {
        type: 'video',
        src: '/virtual-commerce-video-03-preview.mp4',
        label: '虚拟人物带货视频 03',
        note: '短视频带货 / 视频素材',
      },
      {
        type: 'video',
        src: '/virtual-commerce-video-04-preview.mp4',
        label: '虚拟人物带货视频 04',
        note: '短视频带货 / 视频素材',
      },
    ],
  },
  {
    label: 'STORYBOARD',
    title: '角色设定与分镜叙事',
    meta: '角色视觉 / 场景氛围 / 镜头节奏',
    text: '从角色形象、服装、场景风格到镜头情绪变化进行视觉规划，强调故事、角色、画面和传播效果的统一。',
    accent: 'violet',
    mediaItems: [
      {
        type: 'image',
        src: '/storyboard-character.png',
        label: '人物角色三视图',
        note: '角色设定 / 人物造型',
      },
      {
        type: 'image',
        src: '/storyboard-enemy.png',
        label: '敌军设定',
        note: '角色设定 / 敌方阵营',
      },
      {
        type: 'image',
        src: '/storyboard-environment.png',
        label: '环境氛围设定',
        note: '场景设计 / 世界观氛围',
      },
      {
        type: 'image',
        src: '/storyboard-energy-warrior-purple.png',
        label: '紫色能量女战士设定',
        note: '角色设定 / 能量战士',
      },
      {
        type: 'image',
        src: '/storyboard-shadow-swordswoman.png',
        label: '暗影剑士角色设定',
        note: '角色设定 / 暗影剑士',
      },
      {
        type: 'image',
        src: '/storyboard-purple-energy-body.png',
        label: '紫色半透明能量体',
        note: '角色三视图 / 能量体',
      },
      {
        type: 'image',
        src: '/storyboard-cyber-scene-01.png',
        label: '赛博城市屋顶场景',
        note: '场景设计 / 赛博城市',
      },
      {
        type: 'image',
        src: '/storyboard-cyber-scene-02.png',
        label: '废墟室内场景',
        note: '场景设计 / 赛博废墟',
      },
      {
        type: 'image',
        src: '/storyboard-cyber-scene-03.png',
        label: '紫色光柱城市场景',
        note: '场景设计 / 能量爆发',
      },
      {
        type: 'image',
        src: '/storyboard-purple-energy-visual.png',
        label: '紫色能量视觉图',
        note: '视觉氛围 / 能量角色',
      },
      {
        type: 'image',
        src: '/storyboard-milo.png',
        label: 'Milo角色设定',
        note: '角色设定 / 交叉路口',
      },
      {
        type: 'image',
        src: '/storyboard-ivy.png',
        label: 'Ivy角色设定',
        note: '角色设定 / 交叉路口',
      },
      {
        type: 'image',
        src: '/storyboard-elias.png',
        label: 'Elias Vaughn角色设定',
        note: '角色设定 / 交叉路口',
      },
      {
        type: 'image',
        src: '/storyboard-wayang-senapati.png',
        label: 'Wayang Senapati角色设定',
        note: '角色设定 / 皮影判官',
      },
      {
        type: 'image',
        src: '/storyboard-shen-yan.png',
        label: '沈砚角色设定',
        note: '角色设定 / 皮影判官',
      },
      {
        type: 'image',
        src: '/storyboard-piying-seq-01.png',
        label: '皮影控制分镜 01',
        note: '分镜叙事 / 皮影判官',
      },
      {
        type: 'image',
        src: '/storyboard-piying-seq-02.png',
        label: '皮影对话分镜 02',
        note: '分镜叙事 / 皮影判官',
      },
      {
        type: 'image',
        src: '/storyboard-piying-seq-03.png',
        label: '皮影操控分镜 03',
        note: '分镜叙事 / 皮影判官',
      },
      {
        type: 'image',
        src: '/storyboard-piying-seq-04.png',
        label: '厉鬼登场分镜 04',
        note: '分镜叙事 / 皮影判官',
      },
      {
        type: 'image',
        src: '/storyboard-piying-seq-05.png',
        label: '戏台静场分镜 05',
        note: '分镜叙事 / 皮影判官',
      },
      {
        type: 'image',
        src: '/storyboard-piying-seq-06.png',
        label: '废墟追逃分镜 06',
        note: '分镜叙事 / 皮影判官',
      },
      {
        type: 'image',
        src: '/storyboard-piying-seq-07.png',
        label: '醒转爬行分镜 07',
        note: '分镜叙事 / 皮影判官',
      },
      {
        type: 'image',
        src: '/storyboard-piying-seq-08.png',
        label: '木偶复苏特写 08',
        note: '分镜叙事 / 皮影判官',
      },
    ],
  },
  {
    label: 'CAMPUS SERVICE',
    title: '校园配送创业项目',
    meta: '大一期间 / 校园创业 / 本地生活服务 / 商家整合',
    text: '参与校园外卖配送到寝室项目，通过软件平台整合校外商家，学生在线点单后由团队完成配送至宿舍。负责商家资源整合沟通、推动商家入驻、协助早期运营与用户需求反馈整理。',
    accent: 'slate',
    mediaItems: [
      {
        type: 'image',
        src: '/campus-delivery-01.png',
        label: '仓鼠外卖项目标识',
        note: '校园配送 / 项目品牌',
      },
      {
        type: 'image',
        src: '/campus-delivery-02.png',
        label: '校园配送社群矩阵',
        note: '校园配送 / 社群运营',
      },
      {
        type: 'image',
        src: '/campus-delivery-03.png',
        label: '商家资源联系人',
        note: '商家整合 / 沟通协作',
      },
      {
        type: 'image',
        src: '/campus-delivery-04.jpg',
        label: '商家通讯录截图',
        note: '商家资源 / 本地服务',
      },
      {
        type: 'image',
        src: '/campus-delivery-05.jpg',
        label: '校园配送小程序页面',
        note: '校园配送 / 平台页面',
      },
      {
        type: 'image',
        src: '/campus-delivery-06.png',
        label: '配送群运营通知',
        note: '校园配送 / 用户沟通',
      },
    ],
  },
];

const strengths = [
  {
    icon: <Palette size={24} />,
    title: '美术审美与质量把控',
    text: '以美术专业基础为底，将审美判断融入专属 Agent。严格审视每张资产图的构图、色彩、光影与细节，兼顾单张画面的完成度和整组资产的风格一致性。',
  },
  {
    icon: <BrainCircuit size={24} />,
    title: '剧本拆解与导演协作',
    text: '通过自建 Agent，将剧本拆解为角色、场景、资产与镜头任务。把导演意图转化为具体的画面要求，逐项落实视觉风格、画面构成与叙事情绪，在校核与迭代中保持创作方向一致。',
  },
  {
    icon: <WandSparkles size={24} />,
    title: '影视资产与视频制作',
    text: '在河舟影视文化有限公司负责 AI 影视资产与视频制作，结合个人短片创作经验，衔接角色设定、分镜规划、画面生成与后期剪辑，关注从静态资产到动态镜头的视觉连贯与叙事节奏。',
  },
  {
    icon: <Target size={24} />,
    title: '内容实践与传播意识',
    text: '持续创作并发布 AI 影像内容，抖音账号累计粉丝 2000+。结合 AI 虚拟人带货与内容运营经验，在视觉表达之外关注受众理解、人物辨识度与产品呈现，让创作贴合传播场景。',
  },
];

const stats = [
  ['2000+', '抖音账号累计粉丝'],
  ['3', '核心项目经历'],
  ['2027', '三峡大学本科在读'],
];

function MotionBackdrop() {
  return (
    <div className="motion-backdrop" aria-hidden="true">
      <div className="scanline" />
      <div className="mesh mesh-a" />
      <div className="mesh mesh-b" />
      <div className="mesh mesh-c" />
      <div className="grid-plane" />
      <div className="noise" />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const nextScrolled = window.scrollY > window.innerHeight * 0.72;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="返回首页">
        <span>LT</span>
        <strong>廖廷晖</strong>
      </a>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="portfolio-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Menu size={17} />
        <span>Menu</span>
      </button>
      <nav id="portfolio-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>Profile</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Works</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>实习经历</a>
        <a href="#strengths" onClick={() => setMenuOpen(false)}>Ability</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <a className="nav-contact" href="tel:13318993217">
        <Phone size={17} />
        Call
      </a>
    </header>
  );
}

function HeroFigure() {
  return (
    <div className="hero-figure" aria-hidden="true">
      <div className="cyber-hair" />
      <div className="cyber-face">
        <div className="lens lens-left" />
        <div className="lens lens-right" />
        <div className="cyber-mask" />
        <div className="earpiece earpiece-left" />
        <div className="earpiece earpiece-right" />
      </div>
      <div className="cyber-neck" />
      <div className="cyber-shoulder" />
    </div>
  );
}

function Hero() {
  const [loadHeroVideo, setLoadHeroVideo] = useState(false);
  const [isMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    let timerId;
    let idleId;
    const loadVideo = () => setLoadHeroVideo(true);

    if (isMobile) {
      timerId = window.setTimeout(loadVideo, 120);
    } else if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(loadVideo, { timeout: 1600 });
    } else {
      timerId = window.setTimeout(loadVideo, 900);
    }

    return () => {
      if (idleId) window.cancelIdleCallback(idleId);
      if (timerId) window.clearTimeout(timerId);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!loadHeroVideo) return undefined;

    const video = heroVideoRef.current;
    if (!video) return undefined;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('x5-playsinline', 'true');

    const tryPlay = () => video.play().catch(() => {});
    video.load();
    tryPlay();
    video.addEventListener('canplay', tryPlay, { once: true });
    document.addEventListener('WeixinJSBridgeReady', tryPlay, { once: true });

    return () => {
      video.removeEventListener('canplay', tryPlay);
      document.removeEventListener('WeixinJSBridgeReady', tryPlay);
    };
  }, [loadHeroVideo]);

  return (
    <section className="hero section-screen" id="top">
      <video ref={heroVideoRef} className="hero-video" poster="/hero-poster.webp" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        {loadHeroVideo && <source src={isMobile ? '/hero-bg-mobile.mp4' : '/hero-bg-preview.mp4'} type="video/mp4" />}
      </video>
      <MotionBackdrop />
      <Nav />
      <div className="hero-stage container">
        <div className="hero-panel">
          <div className="hero-copy">
            <div className="hero-kicker">
              <Sparkles size={17} />
              Creative AI Designer
            </div>
            <h1>Empowering Visual Stories</h1>
            <p>
              视觉设计师 / AI设计师 / 品牌设计师。以美术基础为底，用AI影像、角色设定与短视频叙事，构建更有记忆点的视觉内容。
            </p>
            <div className="hero-actions">
              <a className="primary" href="#projects">
                <Play size={18} />
                查看作品
              </a>
              <a className="secondary" href="#contact">
                <MessageCircle size={18} />
                联系合作
              </a>
            </div>
          </div>

          <div className="hero-title" aria-hidden="true">
            <span>AI VISUAL</span>
            <strong>DESIGNER</strong>
          </div>

          <div className="hero-hud hero-hud-left">
            <span>001</span>
            <i />
            <small>AI image creation / character visual / short video narrative</small>
          </div>

          <aside className="hero-index">
            <span className="index-label">Design to explore</span>
            <a href="#projects">AI影像创作</a>
            <a href="#projects">角色视觉设定</a>
            <a href="#projects">品牌内容包装</a>

            <span className="index-label">Portfolio</span>
            <a href="#strengths">2 AI short films</a>
            <a href="#strengths">2000+ followers</a>
          </aside>

          <div className="hero-miniworks">
            <article>
              <span>2026</span>
              <strong>AI Manju</strong>
              <small>story / character / edit</small>
            </article>
          </div>
        </div>
      </div>
      <div className="hero-side">
        <span>PORTFOLIO 2026</span>
        <span>AI DESIGNER</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="container about-grid">
        <BorderGlow className="about-border-glow" innerClassName="portrait-card">
          <div className="portrait">
            <picture>
              <source srcSet="/portrait.webp" type="image/webp" />
              <img src="/portrait.jpg" alt="廖廷晖个人肖像" loading="eager" fetchPriority="high" decoding="async" />
            </picture>
            <div className="portrait-glow" />
          </div>
          <div className="portrait-meta">
            <strong>廖廷晖</strong>
            <span>三峡大学 · 美术 / 环境设计</span>
          </div>
        </BorderGlow>
        <div className="about-copy">
          <div className="section-label">PROFILE</div>
          <h2>视觉设计师，也是正在把AI内容做成作品的人。</h2>
          <p>
            我具备美术专业背景，关注造型、构图、色彩与视觉叙事，也持续实践AI影像、AI漫剧与虚拟人物内容。相比单纯完成画面，我更关注故事、角色、画面和传播效果如何共同成立。
          </p>
          <p>
            在河舟影视文化有限公司担任 AI 美术师，负责 AI 影视资产与视频制作，并搭建个人专属的影视制作 Agent，持续将创作经验沉淀为可复用的制作方法。
          </p>
          <div className="contact-strip">
            <span><Phone size={16} /> 13318993217</span>
            <span><MapPin size={16} /> 湖北 / 三峡大学</span>
          </div>
          <Experience />
          <BorderGlow className="about-border-glow about-border-glow-stats" innerClassName="stats">
            {stats.map(([num, label]) => (
              <div className="stat" key={label}>
                <strong>{num}</strong>
                <span>{label}</span>
              </div>
            ))}
          </BorderGlow>
          <div className="profile-notes">
            <BorderGlow className="about-border-glow" innerClassName="profile-note-card">
              <span>Focus</span>
              <strong>AI影像 / 角色视觉 / 品牌内容</strong>
            </BorderGlow>
            <BorderGlow className="about-border-glow" innerClassName="profile-note-card">
              <span>Tools</span>
              <strong>ChatGPT · Codex · Midjourney · 即梦 · 可灵 · AE · 剪映</strong>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
}

const getVideoPoster = (src) => src.replace(/-preview\.mp4$/, '-poster.webp');
const getMobileVideo = (src) => src.replace(/-preview\.mp4$/, '-mobile.mp4');
const getOptimizedImage = (src) => src.replace(/\.(png|jpe?g)$/i, '.webp');

function ProjectVisual({ accent, mediaItems }) {
  const featuredMedia = mediaItems?.[0];
  const [shelfOpen, setShelfOpen] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);
  const [mediaReady, setMediaReady] = useState(false);
  const [isMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);
  const visualRef = useRef(null);
  const hasVisualGallery = mediaItems?.some((item) => item.type === 'image');
  const resolveVideoSource = (src) => (isMobile ? getMobileVideo(src) : src);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual || !featuredMedia || featuredMedia.type !== 'video') return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setMediaReady(true);
      observer.disconnect();
    }, { rootMargin: '280px 0px' });

    observer.observe(visual);
    return () => observer.disconnect();
  }, [featuredMedia]);

  useEffect(() => {
    if (!previewItem) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPreviewItem(null);
      }
    };
    document.body.classList.add('preview-lock');
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('preview-lock');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [previewItem]);

  return (
    <div ref={visualRef} className={`project-visual ${accent} ${featuredMedia ? 'has-media' : ''}`}>
      {featuredMedia ? (
        <div className="project-media-browser">
          <div className="project-media-frame">
            {featuredMedia.type === 'video' ? (
              <video
                key={mediaReady ? resolveVideoSource(featuredMedia.src) : 'poster-only'}
                className="project-video"
                poster={getVideoPoster(featuredMedia.src)}
                controls
                muted
                playsInline
                preload="none"
              >
                {mediaReady && <source src={resolveVideoSource(featuredMedia.src)} type="video/mp4" />}
              </video>
            ) : (
              <img className="project-image" src={getOptimizedImage(featuredMedia.src)} alt={featuredMedia.label} loading="lazy" decoding="async" />
            )}
            <span>{featuredMedia.label}</span>
          </div>
          <div className={`project-file-shelf ${shelfOpen ? 'is-open' : ''}`} aria-label="作品栏">
            <button className="project-shelf-toggle" type="button" onClick={() => setShelfOpen((open) => !open)}>
              <strong>作品栏</strong>
              <span>{mediaItems.length} 个文件</span>
              <b>{shelfOpen ? '收起' : '展开'}</b>
            </button>
            <div className={`project-file-list ${hasVisualGallery ? 'is-gallery' : ''}`} hidden={!shelfOpen}>
              {mediaItems.map((item, index) => (
                <button
                  className={`project-file-item ${hasVisualGallery ? 'is-image' : ''}`}
                  key={item.src}
                  type="button"
                  onClick={() => setPreviewItem(item)}
                >
                  {item.type === 'image' && (
                    <img className="project-file-thumb" src={getOptimizedImage(item.src)} alt={item.label} loading="lazy" decoding="async" />
                  )}
                  {hasVisualGallery && item.type === 'video' && (
                    <div className="project-file-thumb project-video-thumb" aria-hidden="true">
                      <Play size={18} />
                    </div>
                  )}
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <b>{item.label}</b>
                    <small>{item.note}</small>
                  </div>
                </button>
              ))}
            </div>
          </div>
          {previewItem && (
            <div className="work-preview" role="dialog" aria-modal="true" aria-label={previewItem.label}>
              <button className="work-preview-backdrop" type="button" aria-label="关闭预览" onClick={() => setPreviewItem(null)} />
              <div className="work-preview-panel">
                <div className="work-preview-head">
                  <div>
                    <strong>{previewItem.label}</strong>
                    <span>{previewItem.note}</span>
                  </div>
                  <button className="work-preview-close" type="button" aria-label="关闭预览" onClick={() => setPreviewItem(null)}>
                    <X size={18} />
                  </button>
                </div>
                <div className="work-preview-stage">
                  {previewItem.type === 'video' ? (
                    <video poster={getVideoPoster(previewItem.src)} controls autoPlay playsInline preload="metadata">
                      <source src={resolveVideoSource(previewItem.src)} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={getOptimizedImage(previewItem.src)} alt={previewItem.label} decoding="async" />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="frame top" />
          <div className="frame bottom" />
          <div className="orbital">
            <span />
            <span />
            <span />
          </div>
          <div className="visual-bars">
            <i />
            <i />
            <i />
          </div>
        </>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section className="projects section-pad" id="projects">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-label">SELECTED WORKS</div>
            <h2>精选项目</h2>
          </div>
          <p>先以作品方向和视觉占位呈现，后续可替换成真实视频封面、分镜图、角色设定与平台数据截图。</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <BorderGlow className="site-border-glow project-glow" innerClassName="project-card" key={project.title}>
              <ProjectVisual accent={project.accent} mediaItems={project.mediaItems} />
                <div className="project-copy">
                  <span>{project.label}</span>
                  <h3>{project.title}</h3>
                  <p className="meta">{project.meta}</p>
                  <p>{project.text}</p>
                  <a href="#contact">
                    继续了解
                    <ArrowUpRight size={18} />
                  </a>
                </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <div className="experience" id="experience" role="region" aria-labelledby="experience-title">
        <div className="experience-heading">
          <h3 id="experience-title">实习经历</h3>
          <span>AI 影视资产 · 视频制作 · 专属 Agent</span>
        </div>
        <article className="experience-entry" aria-labelledby="experience-company">
          <header className="experience-company">
            <span className="experience-period">6月至9月 · 实习</span>
            <h4 id="experience-company">河舟影视文化有限公司</h4>
            <p className="experience-role">AI 美术师</p>
          </header>
          <div className="experience-detail">
            <p className="experience-intro">负责 AI 影视资产与视频制作，将美术判断融入 AI 生成过程，关注视觉表达与项目需求的契合，让资产与镜头更好地服务于故事。</p>
            <dl className="experience-responsibilities">
              <div>
                <dt><Palette size={20} aria-hidden="true" />影视资产制作</dt>
                <dd>围绕项目需求开展 AI 视觉资产制作与调整，注重画面风格、细节表现与资产之间的视觉一致性。</dd>
              </div>
              <div>
                <dt><Film size={20} aria-hidden="true" />AI 视频制作</dt>
                <dd>参与从静态资产到动态影像的制作，结合镜头表达与叙事节奏持续打磨画面，配合项目推进内容迭代。</dd>
              </div>
              <div>
                <dt><BrainCircuit size={20} aria-hidden="true" />专属 Agent</dt>
                <dd>专属 Agent 以较高的审美标准严格把控每一张资产图的质量，逐项审视构图、色彩、光影、细节与风格一致性。同时具备剧本拆解能力，可将剧情转化为角色、场景、资产与镜头任务，并依据导演要求逐项落实画面构成、视觉风格与叙事情绪，通过校核与迭代严格对齐导演的画面要求。</dd>
              </div>
            </dl>
            <div className="experience-projects">
              <div className="experience-projects-heading">
                <h4>参考项目</h4>
                <span>尚未上线</span>
              </div>
              <p>《赘婿儒生》 · 《一剑开天门》 · 《光之眼》</p>
              <small>以上项目目前尚未上线，暂不展示相关制作素材。</small>
            </div>
          </div>
        </article>
    </div>
  );
}

function Strengths() {
  return (
    <section className="strengths section-pad" id="strengths">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-label">CAPABILITIES</div>
            <h2>个人优势</h2>
          </div>
          <p>以美术审美把控质量，以专属 Agent 落实导演意图，将影视制作经验与内容传播意识融入创作。</p>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => (
            <BorderGlow className="site-border-glow strength-glow" innerClassName="strength-card" key={item.title}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-screen" id="contact">
      <div className="container contact-inner">
        <div>
          <div className="section-label">CONTACT</div>
          <h2>期待参与AI影像、品牌视觉与虚拟人内容项目。</h2>
          <p>
            可沟通方向：AI影像实习生、AI短剧/AI漫剧创作、分镜设计助理、新媒体内容创作、虚拟人内容运营。
          </p>
        </div>
        <BorderGlow className="site-border-glow contact-glow" innerClassName="contact-panel">
          <a href="tel:13318993217">
            <Phone size={20} />
            <span>13318993217</span>
          </a>
          <a href="#projects">
            <Film size={20} />
            <span>查看AI漫剧 / 视觉项目</span>
          </a>
        </BorderGlow>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => initPortfolioAnimations(), []);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Strengths />
      <Contact />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
