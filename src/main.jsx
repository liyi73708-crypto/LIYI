import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif', 'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif', 'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif', 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif', 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif', 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif', 'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif', 'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif', 'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif', 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif', 'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif'
]

const projects = [
  { no: '01', category: 'AI 影像 / 品牌', title: '夜行信号', copy: '一段用于展示品牌想象力的 AI 影像实验。', images: ['https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1534791547706-9d6bcdadf14a?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'] },
  { no: '02', category: '内容系统', title: '信号 / 噪声', copy: '从选题、脚本到发布节奏，搭建持续运转的内容系统。', images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'] },
  { no: '03', category: '视觉企划', title: '光之后', copy: '让视觉、话题和社群情绪在同一个创意里发生。', images: ['https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1200&q=80'] },
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
    <section className="hero" id="top"><video className="hero-video" autoPlay muted loop playsInline src="/hero-bg.mp4" /><div className="hero-bg" /><header className="topbar"><a className="brand" href="#top">LI YI <span>/ AIGC</span></a><nav><a href="#about">关于</a><a href="#services">能力</a><a href="#projects">项目</a><a href="#contact">联系</a></nav><ContactButton /></header><div className="hero-center"><p className="hero-kicker">AIGC 编导 / 内容运营</p><h1 className="hero-heading">你好，我是李一</h1></div><img className="hero-person" src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" alt="人物占位图" /><div className="hero-bottom"><p>我用创意打造<br />令人难忘的作品。</p><span>向下探索 ↓</span></div></section>

    <section className="marquee" ref={marqueeRef}><div className="marquee-row" style={{ transform: `translateX(${-(heroOffset * .18 % 520)}px)` }}>{rowOne.map((src, i) => <img src={src} alt="" key={`a${i}`} />)}</div><div className="marquee-row reverse" style={{ transform: `translateX(${-(520 - heroOffset * .14 % 520)}px)` }}>{rowTwo.map((src, i) => <img src={src} alt="" key={`b${i}`} />)}</div></section>

    <section className="about" id="about"><img className="about-deco moon" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" /><img className="about-deco lego" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" /><div className="about-inner"><h2 className="hero-heading">About me</h2><div className="about-profile"><div className="about-photo"><img src="/hero-person.png" alt="李一人物照片" /><span>本人照片 · 可替换</span></div><div className="about-copy"><p>我是李一，一名 AIGC 编导与运营。我关注内容如何从一个想法，变成一个值得被看见、被分享、被记住的体验。<br /><br />从前期策略、脚本分镜，到 AI 视觉生成、发布运营，我喜欢把创意推进到真正可以发生的地方。</p><div className="about-meta"><span>个人简介 · 后续补充</span><span>联系方式 · 后续补充</span></div></div></div><ContactButton /></div></section>

    <section className="services" id="services"><h2>我的能力</h2><div className="service-list">{services.map(([no, title, copy]) => <article key={no}><strong>{no}</strong><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>

    <section className="projects" id="projects"><div className="projects-head"><h2 className="hero-heading">精选项目</h2><p>精选方向<br />与视觉实验。</p></div><div className="project-stack">{projects.map((project, index) => <article className="project-card" style={{ top: `${96 + index * 28}px`, transform: `scale(${1 - index * .025})` }} key={project.no}><div className="project-head"><strong>{project.no}</strong><span>{project.category}</span><h3>{project.title}</h3><a href="#contact">查看项目 ↗</a></div><div className="project-images"><div><img src={project.images[0]} alt="" /><img src={project.images[1]} alt="" /></div><img src={project.images[2]} alt="" /></div><p className="project-copy">{project.copy}</p></article>)}</div></section>

    <section className="contact" id="contact"><div className="contact-inner"><p>有一个好想法？</p><h2 className="hero-heading">一起做点<br />真正的作品。</h2><div className="contact-details"><span>邮箱 · 后续补充</span><span>微信 / 电话 · 后续补充</span><span>合作方式 · 后续补充</span></div><footer><span>李一 / AIGC 编导</span><span>© 2026</span><span>中国 / 全球合作</span></footer></div></section>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
