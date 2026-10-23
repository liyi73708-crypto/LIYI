import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif', 'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif', 'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif', 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif', 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif', 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif', 'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif', 'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif', 'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif', 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif', 'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif'
]

const projects = [
  { no: '01', category: 'AI FILM / BRAND', title: 'Night Signal', copy: '一段用于展示品牌想象力的 AI 影像实验。', images: ['https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1534791547706-9d6bcdadf14a?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'] },
  { no: '02', category: 'CONTENT SYSTEM', title: 'Signal / Noise', copy: '从选题、脚本到发布节奏，搭建持续运转的内容系统。', images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'] },
  { no: '03', category: 'VISUAL CAMPAIGN', title: 'After Light', copy: '让视觉、话题和社群情绪在同一个创意里发生。', images: ['https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1200&q=80'] },
]

const services = [
  ['01', '内容策略', '从定位、选题到内容节奏，建立可以持续迭代的方向。'],
  ['02', '脚本与叙事', '把抽象想法拆成有情绪、有画面、有节奏的内容。'],
  ['03', 'AIGC 视觉', '用生成式工具探索风格、镜头和视觉表达。'],
  ['04', '运营增长', '关注发布后的反馈，持续优化内容与分发。'],
  ['05', '品牌表达', '把一个品牌的气质，转化成统一且有记忆点的体验。'],
]

function ContactButton() { return <a className="contact-pill" href="#contact">联系我</a> }

function App() {
  const [heroOffset, setHeroOffset] = useState(0)
  const marqueeRef = useRef(null)
  useEffect(() => { const onScroll = () => setHeroOffset(window.scrollY); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  const rowOne = [...marqueeImages.slice(0, 6), ...marqueeImages.slice(0, 6), ...marqueeImages.slice(0, 6)]
  const rowTwo = [...marqueeImages.slice(5), ...marqueeImages.slice(5), ...marqueeImages.slice(5)]
  return <main className="page">
    <section className="hero" id="top"><div className="hero-bg" /><header className="topbar"><a className="brand" href="#top">LI YI <span>/ AIGC</span></a><nav><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav><ContactButton /></header><div className="hero-center"><p className="hero-kicker">AIGC DIRECTOR / CONTENT OPERATOR</p><h1 className="hero-heading">Hi, I&apos;m Li Yi</h1></div><img className="hero-person" src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" alt="人物占位图" /><div className="hero-bottom"><p>A creator driven by crafting<br />striking and unforgettable ideas.</p><span>SCROLL TO EXPLORE ↓</span></div></section>

    <section className="marquee" ref={marqueeRef}><div className="marquee-row" style={{ transform: `translateX(${-(heroOffset * .18 % 520)}px)` }}>{rowOne.map((src, i) => <img src={src} alt="" key={`a${i}`} />)}</div><div className="marquee-row reverse" style={{ transform: `translateX(${-(520 - heroOffset * .14 % 520)}px)` }}>{rowTwo.map((src, i) => <img src={src} alt="" key={`b${i}`} />)}</div></section>

    <section className="about" id="about"><img className="about-deco moon" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" /><img className="about-deco lego" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" /><div className="about-inner"><h2 className="hero-heading">About me</h2><p>我是李一，一名 AIGC 编导与运营。我关注内容如何从一个想法，变成一个值得被看见、被分享、被记住的体验。<br /><br />从前期策略、脚本分镜，到 AI 视觉生成、发布运营，我喜欢把创意推进到真正可以发生的地方。</p><ContactButton /></div></section>

    <section className="services" id="services"><h2>Services</h2><div className="service-list">{services.map(([no, title, copy]) => <article key={no}><strong>{no}</strong><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>

    <section className="projects" id="projects"><div className="projects-head"><h2 className="hero-heading">Projects</h2><p>Selected directions<br />and visual experiments.</p></div><div className="project-stack">{projects.map((project, index) => <article className="project-card" style={{ top: `${96 + index * 28}px`, transform: `scale(${1 - index * .025})` }} key={project.no}><div className="project-head"><strong>{project.no}</strong><span>{project.category}</span><h3>{project.title}</h3><a href="#contact">Live project ↗</a></div><div className="project-images"><div><img src={project.images[0]} alt="" /><img src={project.images[1]} alt="" /></div><img src={project.images[2]} alt="" /></div><p className="project-copy">{project.copy}</p></article>)}</div></section>

    <section className="contact" id="contact"><div className="contact-inner"><p>HAVE A GOOD IDEA?</p><h2 className="hero-heading">Let&apos;s make<br />something real.</h2><a className="contact-email" href="mailto:hello@linstudio.ai">hello@linstudio.ai ↗</a><footer><span>LI YI / AIGC DIRECTOR</span><span>© 2026</span><span>CHINA / WORLDWIDE</span></footer></div></section>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
