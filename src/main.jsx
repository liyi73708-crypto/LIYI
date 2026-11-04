import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif', 'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif', 'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif', 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif', 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif', 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif', 'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif', 'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif', 'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif', 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif', 'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif'
]

const services = [
  ['01', '内容策划', '围绕用户痛点、行业热点与业务节点，规划适配短视频平台的选题。'],
  ['02', '脚本与叙事', '撰写口播文案与脚本，把政策信息拆解成清晰、有节奏的表达。'],
  ['03', '拍摄剪辑协同', '推进拍摄沟通、剪辑审核与发布维护，保证内容按计划交付。'],
  ['04', '账号运营', '运营抖音、小红书与视频号，参与账号冷启动、矩阵布局和日常维护。'],
  ['05', '数据复盘', '跟踪互动、收藏、分享与咨询反馈，持续优化开头、标题、封面和内容方向。'],
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

    <section className="about" id="about"><img className="about-deco moon" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" /><img className="about-deco lego" src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" /><div className="about-inner"><h2 className="hero-heading">关于我</h2><div className="about-profile"><div className="about-photo"><img src="/resume-photo.jpeg" alt="李一照片" /><span>李一 / 短视频编导</span></div><div className="about-copy"><p>我是李一，专注短视频编导与内容运营。本科为电气工程专业，曾在河南载望教育咨询有限公司担任短视频编导（2023.08—2026.03）。<br /><br />工作中，我围绕教育政策与升学节点策划选题、撰写口播脚本，并协同拍摄、剪辑、发布和账号维护；也会根据内容数据与用户反馈复盘，持续优化内容表达。</p><div className="about-stats"><div><strong>350+</strong><span>垂直选题积累</span></div><div><strong>58</strong><span>单月成片峰值</span></div><div><strong>8,000+</strong><span>单条最高收藏</span></div></div><div className="about-meta"><span>本科 · 电气工程</span><span>电话 · 17602810450</span><span>邮箱 · 1269930639@qq.com</span></div></div></div><ContactButton /></div></section>

    <section className="services" id="services"><h2>我的能力</h2><div className="service-list">{services.map(([no, title, copy]) => <article key={no}><strong>{no}</strong><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>

    <section className="projects" id="projects"><div className="projects-head"><h2 className="hero-heading">精选项目</h2><p>升学规划账号<br />短视频内容运营案例</p></div><div className="resume-project"><div className="resume-project-image"><img src="/education-account.png" alt="升学规划抖音账号主页及作品展示" /></div><div className="resume-project-copy"><span className="resume-project-label">短视频编导 / 账号运营</span><h3>升学规划内容账号</h3><p>围绕“政策解读、填报避坑、案例分析、节点提醒”搭建内容栏目，参与选题策划、口播脚本、拍摄剪辑协同及发布复盘，让内容服务于持续搜索与咨询转化。</p><ul><li>积累垂直选题 350+</li><li>单条作品最高收藏 8,000+、分享 5,000+</li><li>项目期间月均有效咨询线索 500+；对应产品月度 GMV 约 17.5 万元</li></ul><a href="https://v.douyin.com/bHsCV-6SsCk/" target="_blank" rel="noreferrer">查看抖音账号 ↗</a><small>以上为简历所述项目数据，按项目成果展示。</small></div></div></section>

    <section className="contact" id="contact"><div className="contact-inner"><p>有一个好想法？</p><h2 className="hero-heading">一起做点<br />真正的作品。</h2><div className="contact-details"><a href="mailto:1269930639@qq.com">邮箱 · 1269930639@qq.com</a><a href="tel:+8617602810450">电话 · 17602810450</a><span>合作方向 · 短视频编导 / 内容运营</span></div><footer><span>李一 / AIGC 编导</span><span>© 2026</span><span>中国 / 全球合作</span></footer></div></section>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
