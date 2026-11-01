'use client';

import { useRef, useState, type FormEvent, type ReactNode } from 'react';
import Link from 'next/link';
import { motion, MotionConfig, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Copy, Play, Plus, Send } from 'lucide-react';
import { agency, faqs, offers, services } from '@/lib/data/agency';
import { portfolioItems, type PortfolioItem } from '@/lib/data/portfolio';
import { useVideoModal } from '@/components/VideoModal';

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduced ? undefined : { opacity: [0.45, 1], y: [22, 0] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <div className="section-label"><span className="section-dot" /><span>{children}</span><span className="section-count">/{number}</span></div>;
}

function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const drift = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  return <div className="hero-scene" ref={ref} aria-label="Ali Ammar, founder of Draft n Build">
    <div className="portrait-timeline" aria-hidden="true">{Array.from({ length: 17 }, (_, i) => <i key={i}><span>{String(i * 5).padStart(2, '0')}</span></i>)}</div>
    <motion.div className="product-composition portrait-composition" style={reduced ? undefined : { rotate, y: drift, scale }}>
      <div className="portrait-outline" />
      <span className="portrait-rec"><i />THE PERSON BEHIND THE PROCESS</span>
      <img className="hero-portrait" src="/images/ali-ammar-portrait-v1.png" alt="Ali Ammar, founder and creative partner at Draft n Build" width={1254} height={1254} fetchPriority="high" />
      <div className="portrait-nameplate"><span>ALI AMMAR</span><span>FOUNDER / CREATIVE ↗</span></div>
    </motion.div>
    <div className="scene-note">From the first draft.<br />To the final detail.</div>
    <div className="scene-caption"><span>01 / MEET YOUR CREATIVE PARTNER</span><span>READY WHEN YOU ARE. ↗</span></div>
  </div>;
}

function WorkCard({ item, index }: { item: PortfolioItem; index: number }) {
  const { openVideo } = useVideoModal();
  return <Reveal className={'work-item work-item-' + index}>
    <button className={'work-preview ' + (item.aspectRatio === 'portrait' ? 'portrait-preview' : 'landscape-preview')} onClick={() => openVideo({ title: item.title, videoSrc: item.videoSrc, youtubeId: item.youtubeId })} aria-label={'Watch ' + item.title}>
      {item.videoSrc ? <video src={item.videoSrc + '#t=1'} muted playsInline preload="metadata" aria-hidden="true" /> : <img src={'https://img.youtube.com/vi/' + item.youtubeId + '/hqdefault.jpg'} alt="" loading="lazy" />}
      <span className="work-preview-index">SELECTED EDIT / 0{index + 1}</span>
      <span className="work-play"><Play size={18} fill="currentColor" /><span>Watch the edit</span></span>
      <span className="work-preview-arrow"><ArrowUpRight size={22} /></span>
    </button>
    <div className="work-meta"><h3>{item.title}</h3><span>{item.client || 'Video editing'}</span></div>
    <p className="work-description">{item.description}</p>
    <div className="work-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
  </Reveal>;
}

function SelectedWork() {
  const [filter, setFilter] = useState('All work');
  const selected = [
    portfolioItems.find(item => item.id === 'short-16'),
    portfolioItems.find(item => item.id === 'short-4'),
    portfolioItems.find(item => item.youtubeId === 'ggklCW0Q0Ic'),
  ].filter((item): item is PortfolioItem => Boolean(item));
  const visible = filter === 'All work' ? selected : selected.filter(item => filter === 'Short-form' ? item.category === 'short-form' : item.category === 'long-form');
  return <section id="work" className="agency-section work-section">
    <SectionLabel number="01">A few things we’ve built</SectionLabel>
    <div className="section-heading-row"><Reveal><h2>Less telling.<br /><span className="outline-word">More showing.</span></h2></Reveal><p>Different formats. The same care<br className="desktop-break" /> for the story in every frame.</p></div>
    <div className="work-toolbar"><div className="work-filters" role="group" aria-label="Filter selected work">{['All work', 'Short-form', 'Long-form'].map(name => <button key={name} aria-pressed={filter === name} onClick={() => setFilter(name)} className={filter === name ? 'active' : ''}>{name}</button>)}</div><Link href="/portfolio/short-form" className="text-link">Explore the archive <ArrowUpRight size={17} /></Link></div>
    <div className="selected-work-grid">{visible.map((item, index) => <WorkCard key={item.id} item={item} index={index} />)}</div>
  </section>;
}

function ServiceJourney() {
  const [active, setActive] = useState(0);
  return <section id="services" className="service-section">
    <div className="service-intro agency-section">
      <SectionLabel number="02">From the first draft onwards</SectionLabel>
      <Reveal><h2>One idea.<br /><span>So much potential.</span></h2></Reveal>
      <p>We connect the thinking, the making, and the showing up.<br className="desktop-break" /> So your content feels like your brand, every time.</p>
    </div>
    <div className="service-journey">
      <div className="service-stage" aria-hidden="true">
        <div className="service-stage-grid" />
        <span className="stage-kicker">THE CREATIVE PROCESS</span>
        <div className={'process-art process-art-' + active}>
          <div className="art-frame frame-back" /><div className="art-frame frame-middle" />
          <div className="art-frame frame-front"><span>DN/B STUDIO</span><strong>{services[active].word}<span>↗</span></strong><div className="art-wave">{Array.from({ length: 22 }, (_, i) => <i key={i} style={{ height: 10 + (i * 17 % 45) }} />)}</div><span>GOOD THINGS TAKE SHAPE.</span></div>
        </div>
        <span className="stage-footer"><span>0{active + 1} / 03</span><span>IDEA → EXECUTION</span></span>
      </div>
      <div className="service-chapters">{services.map((service, index) => <motion.article key={service.number} className="service-chapter" onViewportEnter={() => setActive(index)} viewport={{ amount: 0.65 }}><Reveal><span className="chapter-label"><span>{service.number}</span>{service.name}</span><h3>{service.title}</h3><p>{service.description}</p><ul>{service.deliverables.map(text => <li key={text}><ArrowUpRight size={15} />{text}</li>)}</ul><a href="#contact" className="text-link">Let’s talk about it <ArrowUpRight size={17} /></a></Reveal></motion.article>)}</div>
    </div>
  </section>;
}

function ContactBrief() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  const [brief, setBrief] = useState({ name: '', email: '', brand: '', need: 'Monthly content', details: '' });
  const getBody = () => 'Name: ' + brief.name + '\nEmail: ' + brief.email + '\nBrand / website: ' + brief.brand + '\nInterested in: ' + brief.need + '\n\n' + brief.details;
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = 'mailto:' + agency.email + '?subject=' + encodeURIComponent('A new project — ' + brief.brand) + '&body=' + encodeURIComponent(getBody());
    setMessage('Your email app will open with the brief. Send it there, or copy your brief and email it to Ali below.');
  }
  async function copyBrief() {
    try { await navigator.clipboard.writeText(getBody()); setCopied(true); setMessage('Brief copied. Paste it into your email or WhatsApp conversation with Ali.'); }
    catch { setMessage('Copy is unavailable here. You can email Ali directly using the address below.'); }
  }
  return <section id="contact" className="contact-section agency-section">
    <SectionLabel number="06">Your next good idea starts here</SectionLabel>
    <div className="contact-layout"><div className="contact-copy"><h2>Let’s make<br />something<br /><span>worth watching.</span><ArrowUpRight className="contact-arrow" /></h2><p>Tell us a little about your brand.<br />We’ll figure out what to build next.</p><a className="contact-email" href={'mailto:' + agency.email}>{agency.email}<ArrowUpRight size={18} /></a><a href={agency.whatsapp} className="text-link" target="_blank" rel="noopener noreferrer">Prefer WhatsApp? Say hello <ArrowUpRight size={17} /></a></div>
    <form className="brief-form" onSubmit={submit}>
      <div className="form-topline"><span>A GOOD PLACE TO START</span><span>↘</span></div>
      <label>Your name<input required autoComplete="name" name="name" placeholder="What should we call you?" value={brief.name} onChange={e => setBrief({ ...brief, name: e.target.value })} maxLength={100} /></label>
      <label>Email address<input required type="email" autoComplete="email" name="email" placeholder="you@yourbrand.com" value={brief.email} onChange={e => setBrief({ ...brief, email: e.target.value })} maxLength={150} /></label>
      <label>Brand / website<input required name="brand" placeholder="Introduce your brand" value={brief.brand} onChange={e => setBrief({ ...brief, brand: e.target.value })} maxLength={200} /></label>
      <label>What are you thinking?<select name="service" value={brief.need} onChange={e => setBrief({ ...brief, need: e.target.value })}>{['Monthly content', 'A first project', 'A product launch', 'Agency editing support', 'Something else'].map(item => <option key={item}>{item}</option>)}</select></label>
      <label>A little more about the project<textarea required name="details" rows={3} placeholder="Your products, goals, timeline… we’re listening." value={brief.details} onChange={e => setBrief({ ...brief, details: e.target.value })} maxLength={2000} /></label>
      <button className="agency-button button-orange" type="submit">Open email draft <Send size={16} /></button>
      <p className="form-note">This opens your email app. Your brief is sent only when you send the email.</p>
      <button className="copy-brief" type="button" onClick={copyBrief}>{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? 'Brief copied' : 'Or copy your brief'}</button>
      <p className="form-status" role="status">{message}</p>
    </form></div>
  </section>;
}

export default function AgencyExperience() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <MotionConfig reducedMotion="user"><main id="main-content" className="agency-home">
    <motion.div className="reading-progress" style={{ scaleX }} aria-hidden="true" />
    <header className="agency-hero">
      <div className="hero-topline"><span><i /> INDEPENDENT CREATIVE STUDIO</span><span>THINK IT. DRAFT IT. BUILD IT.</span></div>
      <div className="hero-layout"><div className="hero-copy">
        <p className="hero-eyebrow">SOCIAL CONTENT FOR ECOMMERCE & RETAIL</p>
        <h1>Good products.<br /><span>Great stories.</span><span className="hero-asterisk" aria-hidden="true">✳</span></h1>
        <p className="hero-description">We turn what you sell into stories people want to watch. Ideas, scripts, edits, and a social presence that feels like you.</p>
        <div className="hero-actions"><a href="#contact" className="agency-button button-ink">Let’s build your next story <ArrowUpRight size={19} /></a><a href="#work" className="hero-work-link"><span><Play size={12} fill="currentColor" /></span>See the work</a></div>
        <div className="hero-founder"><span className="founder-monogram"><img src="/images/ali-ammar-portrait-v1.png" width={37} height={37} alt="" /></span><p>Founder-led. Detail-obsessed.<br /><strong>Ali Ammar, your creative partner.</strong></p></div>
      </div><HeroScene /></div>
      <div className="hero-bottom"><a href="#work"><ArrowDown size={16} />SCROLL TO SEE WHAT’S POSSIBLE</a><span>GOOD THINKING. BETTER MAKING.</span><span>BASED IN PAKISTAN · WORKING REMOTELY</span></div>
    </header>
    <div className="capabilities-ribbon" aria-label="Our capabilities"><div>{['IDEAS WITH INTENT', 'CONTENT WITH CHARACTER', 'DETAILS THAT MATTER', 'BUILT TO BE SEEN'].map(text => <span key={text}>{text}<span aria-hidden="true">✳</span></span>)}</div></div>
    <SelectedWork />
    <ServiceJourney />
    <section className="approach-section agency-section">
      <SectionLabel number="03">A clear way forward</SectionLabel>
      <div className="approach-heading"><h2>Creative work.<br /><span>Without the chaos.</span></h2><p>You bring the product knowledge.<br />We bring the creative direction.<br />Here’s how it comes together.</p></div>
      <div className="approach-steps">{[
        { title: 'Get on the same page.', text: 'We understand your products, audience, brand, and goals. Then agree the scope and creative direction.' },
        { title: 'Give the idea shape.', text: 'We plan the content and scripts. You supply the footage, with our guidance on what to capture.' },
        { title: 'Make every detail count.', text: 'We edit, share the draft, and refine it through the agreed feedback rounds.' },
        { title: 'Put it out into the world.', text: 'You approve the final content. We deliver and schedule the agreed posts, then review what to make next.' },
      ].map((step, i) => <Reveal key={step.title} className="approach-step"><span className="step-number">0{i + 1}<ArrowRight size={18} /></span><h3>{step.title}</h3><p>{step.text}</p></Reveal>)}</div>
    </section>
    <section id="studio" className="studio-section agency-section">
      <SectionLabel number="04">Small studio. Personal investment.</SectionLabel>
      <div className="studio-layout"><Reveal className="founder-art" ><div className="founder-art-grid" /><span className="founder-art-top">THE PERSON BEHIND THE PROCESS</span><img className="studio-portrait" src="/images/ali-ammar-portrait-v1.png" alt="Ali Ammar" width={1254} height={1254} loading="lazy" /><span className="founder-art-bottom"><span>ALI AMMAR</span><span>FOUNDER / CREATIVE</span></span></Reveal>
      <Reveal className="studio-copy"><p className="studio-kicker">HELLO. I’M ALI.</p><h2>Your brand.<br /><span>My full attention.</span></h2><p>I’m Ali Ammar, the person behind Draft n Build. I bring together content ideas, scripts, video editing, and scheduling to help brands show up with more intention.</p><p>When you work with the studio, you work directly with me. One creative partner who gets to know your products, cares about the details, and stays with the work from draft to delivery.</p><div className="studio-principles"><span><Check size={16} />Direct collaboration</span><span><Check size={16} />Clear scope & feedback</span><span><Check size={16} />Your brand, thoughtfully built</span></div><a href="#contact" className="text-link">Tell me what you’re building <ArrowUpRight size={18} /></a></Reveal></div>
    </section>
    <section id="partnerships" className="partnership-section agency-section">
      <SectionLabel number="05">Different ways to build</SectionLabel><div className="section-heading-row"><h2>A project.<br /><span className="outline-word">A partnership.</span></h2><p>A clear scope, shaped around your brand.<br />Every engagement starts with a conversation.</p></div>
      <div className="offer-grid">{offers.map(offer => <Reveal key={offer.name} className={'offer ' + (offer.featured ? 'offer-featured' : '')}><span className="offer-label">{offer.label}{offer.featured && <span>↗</span>}</span><h3>{offer.name}</h3><p>{offer.description}</p><ul>{offer.includes.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul><span className="offer-price">Request a quote</span><a href="#contact" className={'agency-button ' + (offer.featured ? 'button-orange' : 'button-outline')}>{offer.cta}<ArrowUpRight size={17} /></a></Reveal>)}</div>
      <div className="agency-partner-note"><span>RUN AN AGENCY?</span><p>Need a reliable editing partner behind the scenes? Let’s talk about your clients and workflow.</p><a href="#contact" className="text-link">Build together <ArrowUpRight size={17} /></a></div>
    </section>
    <section className="faq-section agency-section"><div><p className="studio-kicker">A FEW GOOD QUESTIONS</p><h2>Before<br /><span>we build.</span></h2></div><div className="faq-list">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<Plus size={20} aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div></section>
    <ContactBrief />
  </main></MotionConfig>;
}
