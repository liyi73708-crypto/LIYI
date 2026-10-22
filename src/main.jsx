import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  { index: '01', type: 'AI FILM', title: 'Neon Memory', copy: '用生成式影像建立一段带有情绪线索的品牌叙事。', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85' },
  { index: '02', type: 'CONTENT OPERATION', title: 'Signal / Noise', copy: '从选题、脚本到发布节奏，搭建可持续的内容系统。', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85' },
  { index: '03', type: 'VISUAL CAMPAIGN', title: 'After Light', copy: '让视觉、话题与社群情绪在同一个创意里发生。', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85' },
]

const capabilities = [
  ['01', '内容策略', '把模糊的方向，整理成清楚的主题、节奏与发布计划。'],
  ['02', '脚本与叙事', '让每个镜头都有作用，让故事自然地被看完、被记住。'],
  ['03', 'AIGC 视觉', '用生成式工具探索画面、风格和情绪，保持统一的视觉语言。'],
  ['04', '运营复盘', '关注内容表现，持续调整选题、表达和分发方式。'],
]

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span> }

function App() {
  return <main>
    <section className="hero" id="top">
      <video className="hero-media" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=85"><source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-city-at-night-1573/1080p.mp4" type="video/mp4" /></video>
      <div className="hero-shade" />
      <header className="nav shell"><a className="logo" href="#top"><span>LY</span><small>LI YI / 01</small></a><nav aria-label="主导航"><a href="#about">About</a><a href="#work">Work</a><a href="#capabilities">Capabilities</a></nav><a className="nav-contact" href="#contact">Start a project <Arrow /></a></header>
      <div className="hero-content shell"><p className="eyebrow"><i /> AIGC DIRECTOR / CONTENT OPERATOR</p><h1>Ideas<br /><em>in motion.</em></h1><div className="hero-foot"><p>我把创意变成有画面、有情绪、<br />也能持续生长的内容。</p><a className="text-button" href="#work">Explore selected work <Arrow /></a></div></div>
      <div className="hero-index">SCROLL<br /><span>↓</span></div><div className="hero-location">CN / WORLDWIDE<br /><span>OPEN FOR SELECTED PROJECTS</span></div>
    </section>

    <section className="about shell section" id="about"><div className="section-top"><span className="section-no">01</span><span>ABOUT</span><span className="rule" /></div><div className="about-grid"><div className="portrait-frame"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85" alt="人物占位图" /><span>PORTRAIT / PLACEHOLDER</span></div><div className="about-copy"><p className="label">HELLO, I'M LI YI</p><h2>让想法<br /><em>被看见。</em></h2><p className="lead">我是李一，一名 AIGC 编导与运营。我关注内容如何从一个想法，变成一个值得被分享的体验。</p><p className="muted">我参与前期策略、脚本分镜、AI 视觉生成与内容运营，把创意推进到可以交付、可以传播的结果。</p><div className="about-contact"><a href="mailto:hello@linstudio.ai">hello@linstudio.ai <Arrow /></a><span>BASE / CHINA · REMOTE FRIENDLY</span></div></div><div className="about-stats"><div><b>04</b><span>CORE<br />CAPABILITIES</span></div><div><b>∞</b><span>IDEAS<br />IN PROGRESS</span></div><div><b>01</b><span>CREATIVE<br />DIRECTION</span></div></div></div></section>

    <section className="work section" id="work"><div className="shell"><div className="section-top"><span className="section-no">02</span><span>SELECTED WORK</span><span className="rule" /></div><div className="work-intro"><h2>作品先说话，<br /><em>我负责把它做好。</em></h2><p>影像、内容策略与运营<br />是我最常工作的交集。</p></div><div className="project-list">{projects.map((project) => <article className="project" key={project.index}><div className="project-image"><img src={project.image} alt="" /><span className="project-index">{project.index}</span><span className="project-type">{project.type}</span><span className="project-open">↗</span></div><div className="project-meta"><h3>{project.title}</h3><p>{project.copy}</p><span className="project-status">PROJECT SLOT / READY TO UPDATE</span></div></article>)}</div></div></section>

    <section className="capabilities shell section" id="capabilities"><div className="section-top"><span className="section-no">03</span><span>CAPABILITIES</span><span className="rule" /></div><div className="cap-head"><h2>从灵感到<br /><em>发布之后。</em></h2><p>一套清楚、耐用、<br />可以持续迭代的工作方式。</p></div><div className="cap-grid">{capabilities.map(([num, title, copy]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p><Arrow /></article>)}</div></section>

    <section className="contact" id="contact"><div className="shell contact-inner"><div className="section-top"><span className="section-no">04</span><span>CONTACT</span><span className="rule" /></div><div className="contact-main"><p className="label">HAVE A GOOD IDEA?</p><h2>Let's make<br /><em>something real.</em></h2><a className="contact-link" href="mailto:hello@linstudio.ai">hello@linstudio.ai <Arrow /></a></div><footer><span>LI YI / AIGC DIRECTOR</span><span>© 2026</span><span>BEIJING · SHANGHAI · WORLDWIDE</span></footer></div></section>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
