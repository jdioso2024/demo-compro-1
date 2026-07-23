import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services — PT Dayana Energi Nusantara',
    description: 'Comprehensive industrial services: General Construction & Civil Works, Energy Support & Infrastructure, Procurement & Manpower.',
};

const civilServices = [
    {
        icon: '🛣️',
        title: 'Roads & Highways',
        items: ['Asphalt Paving', 'Road Improvement', 'Highway Maintenance'],
    },
    {
        icon: '🌊',
        title: 'Drainage & Irrigation',
        items: ['Culvert Installation', 'Canal Logistics', 'Reinforced Culverts'],
    },
    {
        icon: '⛰️',
        title: 'Earthworks & Land',
        items: ['Site Preparation', 'Pipeline Clearance', 'Soil Stabilization'],
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* ═══════════════════════════ HERO ═══ */}
            <section style={{ minHeight: '70vh', background: '#131313', display: 'flex', alignItems: 'center', paddingTop: '64px', position: 'relative', overflow: 'hidden', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
                <div aria-hidden style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '60vw', lineHeight: 1, color: '#ffffff', opacity: 0.02, pointerEvents: 'none', userSelect: 'none' }}>D</div>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'linear-gradient(to bottom, #F15A24, #ED1C24)' }} />
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 64px', position: 'relative', zIndex: 1 }} className="section-pad">
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '24px' }}>— Services & Capabilities</p>
                    <h1 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 7vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#ffffff', maxWidth: '800px', marginBottom: '24px' }}>
                        Engineering{' '}
                        <span style={{ background: 'linear-gradient(to right, #F15A24, #ED1C24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Industrial</span>
                        <br />Excellence.
                    </h1>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#a98a80', lineHeight: 1.6, maxWidth: '540px' }}>
                        PT Dayana Energi Nusantara provides comprehensive service solutions for civil engineering, energy infrastructure, and strategic manpower. We combine high-precision technical skills with high reliability to complete large-scale projects.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════ SECTION 1 — CIVIL WORKS ═══ */}
            <section style={{ background: '#0e0e0e', padding: '120px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#5a4139', border: '1px solid #333', padding: '4px 10px' }}>01</div>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a98a80' }}>Civil Sector</span>
                    </div>
                    <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', textTransform: 'uppercase', color: '#ffffff', lineHeight: 1.2, marginBottom: '16px' }}>
                        General Construction<br />&amp; Civil Works
                    </h2>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#a98a80', lineHeight: 1.6, maxWidth: '540px', marginBottom: '64px' }}>
                        Building the foundation and infrastructure that powers growth. Our highly specialized teams deliver technical support for civil construction from civil foundation to infrastructure challenges systems.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#333' }}>
                        {civilServices.map((s) => (
                            <div key={s.title} style={{ background: '#0e0e0e', padding: '0' }}>
                                {/* image placeholder */}
                                <div style={{ height: '180px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                    <div style={{ color: '#888888', fontFamily: 'monospace', fontSize: '14px', fontWeight: 'bold' }}>400 x 180</div>
                                </div>
                                <div style={{ padding: '24px', borderTop: '1px solid #333' }}>
                                    <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '16px', color: '#ffffff', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        {s.title}
                                        <ArrowRight size={14} color="#F15A24" />
                                    </h3>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {s.items.map((item) => (
                                            <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#a98a80' }}>
                                                <ChevronRight size={12} color="#F15A24" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ SECTION 2 — ENERGY SUPPORT ═══ */}
            <section style={{ background: '#131313', padding: '120px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#5a4139', border: '1px solid #333', padding: '4px 10px' }}>02</div>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a98a80' }}>Energy Sector</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '80px', alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 40px)', textTransform: 'uppercase', color: '#ffffff', lineHeight: 1.2, marginBottom: '16px' }}>
                                Energy Support &amp;<br />Infrastructure
                            </h2>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#a98a80', lineHeight: 1.6, marginBottom: '40px' }}>
                                Supporting the pulse of the nation's power. We provide specialized engineers to piping systems, and technical teams to meet for geothermal and conventional energy plants.
                            </p>

                            {[
                                { title: 'Mechanical & Piping', desc: 'High-pressure pipelines installation and mechanical assembly with ISO-quality processes.' },
                                { title: 'Geothermal Maintenance', desc: 'Specialized support for assets, high-operation and long-time maintenance.' },
                            ].map((s) => (
                                <div key={s.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' }}>
                                    <div style={{ width: '3px', background: 'linear-gradient(to bottom, #F15A24, #ED1C24)', alignSelf: 'stretch', flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', color: '#ffffff', textTransform: 'uppercase', marginBottom: '6px' }}>{s.title}</h4>
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#a98a80', lineHeight: 1.6 }}>{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Feature image */}
                        <div style={{ height: '400px', background: '#e5e5e5', border: '1px solid #333', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ color: '#888888', fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold' }}>500 x 400</div>
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to right, #F15A24, #ED1C24)', padding: '16px 24px' }}>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CRITICAL PRESSURE SYSTEMS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ SECTION 3 — PROCUREMENT ═══ */}
            <section style={{ background: '#0e0e0e', padding: '120px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#5a4139', border: '1px solid #333', padding: '4px 10px' }}>03</div>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a98a80' }}>Resource Management</span>
                    </div>
                    <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', textTransform: 'uppercase', color: '#ffffff', lineHeight: 1.2, marginBottom: '16px', textAlign: 'center' }}>
                        Procurement &amp; Manpower
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '24px', marginTop: '48px' }}>
                        {/* Heavy equipment card */}
                        <div style={{ height: '280px', background: '#e5e5e5', border: '1px solid #333', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ color: '#888888', fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold' }}>500 x 280</div>
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px 24px', background: 'rgba(0,0,0,0.7)' }}>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '16px', color: '#ffffff', textTransform: 'uppercase', marginBottom: '8px' }}>Heavy Equipment Fleet</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#a98a80' }}>Comprehensive fleet of state-of-the-art heavy equipment. Encompassing more than 12 specialized units.</p>
                                <button style={{ background: 'none', border: '1px solid #F15A24', color: '#F15A24', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 16px', marginTop: '12px', cursor: 'pointer' }}>
                                    VIEW FLEET →
                                </button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {/* Certified experts */}
                            <div style={{ flex: 1, border: '1px solid #333', background: '#1f2020', padding: '24px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'linear-gradient(to right, #F15A24, #ED1C24)', padding: '4px 10px' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>3+</span>
                                </div>
                                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '12px' }}>Certified Experts</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#a98a80', lineHeight: 1.6 }}>Deployment of certified engineers, safety officers, and technical specialists for long-term contracts.</p>
                            </div>

                            {/* Project outsourcing */}
                            <div style={{ flex: 1, background: 'linear-gradient(to right, #F15A24, #ED1C24)', padding: '24px' }}>
                                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>Project Outsourcing</p>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#ffffff', textTransform: 'uppercase', marginBottom: '8px' }}>Project Outsourcing</p>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>End-to-end project management, in-time delivery, and engineering groups ready for project mobilization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ CTA BANNER ═══ */}
            <section style={{ background: '#1f2020', padding: '80px 0', borderTop: '1px solid #333' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
                    <div>
                        <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 40px)', textTransform: 'uppercase', color: '#ffffff', lineHeight: 1.2, marginBottom: '12px' }}>
                            Partner With the<br />Industry Leaders
                        </h2>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#a98a80', lineHeight: 1.6, maxWidth: '480px' }}>
                            Ready to bring your vision in industrial oil or energy challenges up? Our technical consultants are standing by to provide detailed proposals.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <Link href="/contact" style={{ background: 'linear-gradient(to right, #F15A24, #ED1C24)', color: '#ffffff', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 32px', textDecoration: 'none' }}>
                            START CONSULTATION →
                        </Link>
                        <Link href="/projects" style={{ border: '1px solid #555', color: '#e5e2e1', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 32px', textDecoration: 'none' }}>
                            VIEW PROJECTS
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
