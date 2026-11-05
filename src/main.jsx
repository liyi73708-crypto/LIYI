import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const services = [
  ['01', '内容策划', '围绕用户痛点、行业热点与业务节点，规划适配短视频平台的选题。'],
  ['02', '脚本与叙事', '撰写口播文案与脚本，把政策信息拆解成清晰、有节奏的表达。'],
  ['03', '拍摄剪辑协同', '推进拍摄沟通、剪辑审核与发布维护，保证内容按计划交付。'],
  ['04', '账号运营', '运营抖音、小红书与视频号，参与账号冷启动、矩阵布局和日常维护。'],
  ['05', '数据复盘', '跟踪互动、收藏、分享与咨询反馈，持续优化开头、标题、封面和内容方向。'],
]

const videoGroups = [
  {
    title: '抖音编导作品',
    type: 'portrait',
    items: [
      ['director-01', '中外合作办学选题作品', '升学规划 · 编导发布'],
      ['director-02', '去西安上大学，性价比最高！', '升学规划 · 编导发布'],
      ['director-03', '军校 / 警校有什么区别？怎么选？', '升学规划 · 编导发布'],
      ['director-04', '浙江大学：超级巨无霸学校', '升学规划 · 编导发布'],
    ],
  },
  {
    title: 'AIGC 视频创作',
    type: 'landscape',
    items: [
      ['ai-ad', 'AI 广告创意视频', 'AI 生成 · 广告创意'],
      ['ai-drama-01', 'AI 短剧作品 01', 'AI 生成 · 短剧'],
      ['ai-drama-02', 'AI 短剧作品 02', 'AI 生成 · 短剧'],
    ],
  },
]

const heroPreviews = [
  ['director-01', '合作办学选题', '编导作品'],
  ['director-02', '去西安上大学', '编导作品'],
  ['director-03', '军校 / 警校怎么选', '编导作品'],
  ['ai-ad', 'AI 广告创意', 'AIGC 创作'],
  ['ai-drama-01', 'AI 短剧 01', 'AIGC 创作'],
  ['ai-drama-02', 'AI 短剧 02', 'AIGC 创作'],
]

function ContactButton() {
  return <a className="contact-pill" href="#contact">联系我 <span>↗</span></a>
}

function App() {
  return <main className="page">
    <section className="hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline src="/hero-bg.mp4" />
      <div className="hero-bg" />
      <header className="topbar">
        <a className="brand" href="#top"><span className="brand-mark">李</span><span>李一 <small>/ AIGC 编导</small></span></a>
        <nav aria-label="主导航"><a href="#projects">精选作品 ↗</a><a href="#about">关于我</a><a href="#services">我的能力</a></nav>
        <ContactButton />
      </header>
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow"><i />个人作品集 / AIGC 编导与运营</p>
          <h1>让想法，<br />变成作品。</h1>
          <p className="hero-summary">我是李一，一名短视频编导与 AIGC 内容运营。<br />从选题、脚本到影像制作，让内容真正走到观众面前。</p>
          <a className="text-link" href="#projects">观看精选作品 <span>↗</span></a>
          <p className="hero-services">选题策划　/　脚本创作　/　成片统筹　/　AI 影像</p>
        </div>
        <div className="hero-previews" aria-label="代表作品预览">
          {heroPreviews.map(([file, title, type], index) => <a className={`hero-preview hero-preview--${index + 1}`} href={`#work-${file}`} key={file} aria-label={`查看${title}`}>
            <img src={`/videos/${file}.jpg`} alt="" />
            <span className="hero-preview-caption"><small>0{index + 1} / {type}</small><strong>{title}</strong></span>
          </a>)}
        </div>
      </div>
      <div className="hero-bottom"><span>短视频编导 · AIGC 影像</span><a href="#projects">向下滚动，展开作品 <span>↓</span></a></div>
    </section>

    <section className="projects section-wrap" id="projects">
      <div className="section-heading">
        <div><p className="eyebrow"><i />作品精选 / 01</p><h2>把内容，做成<br />值得看的作品。</h2></div>
        <p className="section-note">从教育内容编导，到 AI 影像创作。<br />记录想法被看见的过程。</p>
      </div>
      <article className="resume-project">
        <div className="resume-project-image"><img src="/education-account.png" alt="升学规划抖音账号主页及作品展示" /></div>
        <div className="resume-project-copy"><span className="resume-project-label">短视频编导 / 账号运营</span><h3>升学规划内容账号</h3><p>围绕“政策解读、填报避坑、案例分析、节点提醒”搭建内容栏目，参与选题策划、口播脚本、拍摄剪辑协同及发布复盘，让内容服务于持续搜索与咨询转化。</p><ul><li>积累垂直选题 350+</li><li>单条作品最高收藏 8,000+、分享 5,000+</li><li>项目期间月均有效咨询线索 500+；对应产品月度 GMV 约 17.5 万元</li></ul><a href="https://v.douyin.com/bHsCV-6SsCk/" target="_blank" rel="noreferrer">查看抖音账号 ↗</a><small>以上为简历所述项目数据，按项目成果展示。</small></div>
      </article>
      <div className="video-portfolio">{videoGroups.map(group => <section className="video-group" key={group.title}>
        <div className="video-group-heading"><h3>{group.title}</h3><span>{group.type === 'portrait' ? '01 — 04' : '05 — 07'}</span></div>
        <div className={`video-grid video-grid--${group.type}`}>{group.items.map(([file, title, type], index) => <article className="video-card" id={`work-${file}`} key={file}>
          <video controls playsInline preload="none" poster={`/videos/${file}.jpg`}><source src={`/videos/${file}.mp4`} type="video/mp4" /></video>
          <div className="video-card-copy"><span>{type}</span><h4>{title}</h4><small>作品 / {String(index + 1).padStart(2, '0')}</small></div>
        </article>)}</div>
      </section>)}</div>
    </section>

    <section className="about section-wrap" id="about">
      <div className="section-heading"><div><p className="eyebrow"><i />关于我 / 02</p><h2>从想法，<br />到内容。</h2></div><p className="section-note">内容不是说出来就结束，<br />而是从理解需求开始。</p></div>
      <div className="about-profile"><div className="about-photo"><img src="/resume-photo.jpeg" alt="李一照片" /></div><div className="about-copy"><p>我是李一，专注短视频编导与内容运营。本科为电气工程专业，曾在河南载望教育咨询有限公司担任短视频编导（2023.08—2026.03）。</p><p>工作中，我围绕教育政策与升学节点策划选题、撰写口播脚本，并协同拍摄、剪辑、发布和账号维护；也会根据内容数据与用户反馈复盘，持续优化内容表达。</p>
        <div className="about-stats"><div><strong>350+</strong><span>垂直选题积累</span></div><div><strong>58</strong><span>单月成片峰值</span></div><div><strong>8,000+</strong><span>单条最高收藏</span></div></div>
        <div className="about-meta"><span>本科 / 电气工程</span><span>电话 / 17602810450</span><span>邮箱 / 1269930639@qq.com</span></div>
      </div></div>
    </section>

    <section className="services section-wrap" id="services">
      <div className="section-heading"><div><p className="eyebrow"><i />工作方式 / 03</p><h2>把每一步，<br />做好。</h2></div><p className="section-note">策划、执行、复盘，<br />让内容持续向前。</p></div>
      <div className="service-list">{services.map(([no, title, copy]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article>)}</div>
    </section>

    <section className="contact" id="contact"><div className="contact-inner"><p className="eyebrow"><i />联系我 / 04</p><h2>有想法，<br />一起做成作品。</h2><div className="contact-details"><a href="mailto:1269930639@qq.com">1269930639@qq.com <span>↗</span></a><a href="tel:+8617602810450">176 0281 0450 <span>↗</span></a></div><footer><span>李一 / AIGC 编导与运营</span></footer></div></section>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
