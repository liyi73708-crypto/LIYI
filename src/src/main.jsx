import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  { no: '01', tag: 'CNC / FOXCONN', title: '精密加工实习', desc: '参与 CNC 加工中心运行、工件装夹、刀具补偿与产品首检。', tone: 'violet', metric: '合格率 99.5%+' },
  { no: '02', tag: 'SERVICE / HOTEL', title: '现场服务实践', desc: '负责五星级酒店政务接待与大型宴会现场服务，处理突发需求。', tone: 'blue', metric: '表扬信 3 封' },
  { no: '03', tag: 'AIGC PORTFOLIO', title: '视频作品待补充', desc: '简历中暂未提供视频文件，后续可替换为你的 AIGC 作品。', tone: 'orange', metric: '待上传' },
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
          <a className="brand" href="#top"><span className="brand-mark">✦</span><span>李一 / 01<br /><em>AIGC DIRECTOR</em></span></a>
          <nav className="nav-center" aria-label="主导航"><a href="#top">首页</a><a href="#about">关于我</a><a href="#projects">精选作品</a><a href="#strengths">能力</a></nav>
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
          <div className="portrait-wrap"><div className="portrait"><div className="portrait-orbit" /><img className="portrait-photo" src="/avatar.png" alt="李一证件照" /><span className="portrait-note">LI YI<br />AIGC / 2026</span></div></div>
          <div className="intro-copy"><p className="kicker">HELLO, I'M LI YI</p><h2>把经历<br /><span>变成作品。</span></h2><p className="body-copy">我是李一，AIGC 编导与运营方向的应届毕业生，拥有机电一体化专科与电气工程及其自动化本科教育背景。</p><p className="body-copy muted">我也有富士康 CNC 数控加工和五星级酒店服务实践，形成了细致执行、现场协作与快速应变的工作方式。</p><div className="resume-lines"><div><span>EDUCATION</span><strong>电气工程及其自动化 · 本科</strong></div><div><span>EXPERIENCE</span><strong>富士康 CNC / 三鼎华悦酒店</strong></div><div><span>CERTIFICATES</span><strong>英语四级 · 机动车驾驶证</strong></div></div><a className="text-link" href="mailto:1269930639@qq.com">1269930639@qq.com <Arrow /></a></div>
          <div className="stats"><div><strong>2</strong><span>EDUCATION<br />STAGES</span></div><div><strong>2</strong><span>WORK<br />EXPERIENCES</span></div><div><strong>99.5%</strong><span>CNC<br />QUALITY</span></div></div>
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
