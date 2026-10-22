import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  { no: '01', tag: 'AI FILM / BRAND', title: '夜航计划', desc: '为新消费品牌构建一支 60 秒 AI 叙事短片。', tone: 'violet', metric: '8.4M 播放' },
  { no: '02', tag: 'CONTENT SYSTEM', title: '城市漫游者', desc: '从栏目定位到日更运营，建立可持续的内容引擎。', tone: 'blue', metric: '32% 转化提升' },
  { no: '03', tag: 'SOCIAL CAMPAIGN', title: '未来有光', desc: '一次把视觉、话题与社区情绪串联起来的传播实验。', tone: 'orange', metric: '142K 社媒互动' },
]

const strengths = [
  ['01', '叙事与脚本', '把一个模糊的想法，变成有情绪、有节奏、能传播的故事。'],
  ['02', 'AIGC 视觉', '熟练使用生成式影像工具，建立统一又有辨识度的视觉语言。'],
  ['03', '内容运营', '用数据复盘内容，用运营让好作品持续被看见、被记住。'],
  ['04', '项目统筹', '从 brief、分镜到交付，保持创意、效率与团队协作的平衡。'],
]

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span> }

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-video" aria-hidden="true">
          <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2000&q=80">
            <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-city-at-night-1573/1080p.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-glow" />
        <header className="nav shell">
          <a className="brand" href="#top"><span className="brand-mark">✦</span><span>LIN / 01<br /><em>AIGC STUDIO</em></span></a>
          <div className="nav-center">AIGC DIRECTOR <span>·</span> CONTENT OPERATOR</div>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>联系我 <Arrow /></button>
        </header>
        <div className="hero-content shell">
          <div className="eyebrow"><span className="status-dot" /> OPEN FOR SELECTED PROJECTS</div>
          <h1>MAKE<br /><span>IMAGINARY</span><br />VISIBLE<span className="title-star">✦</span></h1>
          <div className="hero-bottom">
            <p>我用 AI、影像与运营，<br />把想象变成值得被分享的内容。</p>
            <button className="outline-button" onClick={() => scrollTo('projects')}>查看精选项目 <Arrow /></button>
          </div>
        </div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><b>↓</b></div>
        <div className="hero-meta">BEIJING / SHANGHAI<br /><span>AVAILABLE WORLDWIDE</span></div>
      </section>

      <section className="intro section shell" id="about">
        <div className="section-label">01 / ABOUT ME</div>
        <div className="intro-grid">
          <div className="portrait-wrap"><div className="portrait"><div className="portrait-orbit" /><div className="portrait-initial">L<span>.</span></div><span className="portrait-note">CREATIVE<br />MIND / 2026</span></div></div>
          <div className="intro-copy"><p className="kicker">HELLO, I'M LIN YI</p><h2>内容不是<br /><span>填空题。</span></h2><p className="body-copy">我是林一，一名 AIGC 编导与运营。我的工作，是在技术快速变化的时代里，找到人与内容之间仍然有效的情绪连接。</p><p className="body-copy muted">我相信每一个项目都应该有自己的气质。少一点模板，多一点真实的好奇心。</p><a className="text-link" href="mailto:hello@linstudio.ai">hello@linstudio.ai <Arrow /></a></div>
          <div className="stats"><div><strong>06</strong><span>YEARS<br />EXPERIENCE</span></div><div><strong>48</strong><span>PROJECTS<br />DELIVERED</span></div><div><strong>13</strong><span>BRANDS<br />PARTNERED</span></div></div>
        </div>
      </section>

      <section className="projects section shell" id="projects">
        <div className="section-head"><div><div className="section-label">02 / SELECTED WORKS</div><h2>让作品<br /><span>先说话。</span></h2></div><p>影像、内容策略与可持续的<br />品牌叙事，是我喜欢的交集。</p></div>
        <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.no}><div className="project-visual"><div className="visual-grid" /><div className="visual-shape" /><span className="visual-caption">{project.tag}</span><span className="play">▶</span></div><div className="project-info"><span className="project-no">{project.no}</span><div><h3>{project.title}</h3><p>{project.desc}</p></div><span className="metric">{project.metric}</span></div></article>)}</div>
      </section>

      <section className="strengths section shell" id="strengths">
        <div className="section-head"><div><div className="section-label">03 / CAPABILITIES</div><h2>我能带来的<br /><span>不止灵感。</span></h2></div><p>一套从创意到结果的<br />完整内容方法论。</p></div>
        <div className="strength-grid">{strengths.map(([no, title, copy]) => <article className="strength" key={no}><div className="strength-top"><span>{no}</span><span className="strength-icon">✦</span></div><h3>{title}</h3><p>{copy}</p><Arrow /></article>)}</div>
      </section>

      <section className="contact section" id="contact"><div className="contact-inner shell"><div className="section-label">04 / LET'S TALK</div><h2>一起做点<br /><span>有意思的。</span></h2><div className="contact-bottom"><p>如果你正在寻找一个能把想法推进成作品的伙伴，<br />欢迎写信给我。下一个故事，也许就从这里开始。</p><a className="contact-button" href="mailto:hello@linstudio.ai">发起一个项目 <Arrow /></a></div><div className="contact-footer"><span>LIN / AIGC STUDIO</span><span>HELLO@LINSTUDIO.AI</span><span>© 2026</span></div></div><div className="contact-orb" /></section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
