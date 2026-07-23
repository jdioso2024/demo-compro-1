import Link from 'next/link';
import ComplianceBadge from '@/components/ComplianceBadge';
import MetricBadge from '@/components/MetricBadge';
import { Eye, Target } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us — PT Dayana Energi Nusantara',
    description: 'Learn about PT Dayana Energi Nusantara, our history, vision, mission, leadership team, and core values driving industrial excellence.',
};

const leaders = [
    { name: 'Budi Kusuma', title: 'Direktur Utama', role: 'As founder, his vision to develop high-quality infrastructure and energy solutions in East Kalimantan.', initials: 'BK' },
    { name: 'Santi Wijaya', title: 'Direktur Operasi', role: 'Skills, Leadership, and Economy, Financial capabilities are high standard to meet the energy sector.', initials: 'SW' },
    { name: 'Adityo Pratama', title: 'Direktur Teknik', role: 'Technical engineering capabilities in heavy civil construction and mechanical engineering services.', initials: 'AP' },
];

const values = [
    { label: 'Integrity', icon: '⚖️', desc: 'Unrelenting ethics and professional conduct, covering all actions, assets, consent, and deliverables.' },
    { label: 'Precision', icon: '🎯', desc: 'Engineering is the word. Precision committed. Flawless constructed from millimeter accuracy upward.' },
    { label: 'Safety', icon: '🛡️', desc: 'Zero compromise. High-standard HSE standards to ensure all our personnel and surrounding environment are safe.' },
    { label: 'Excellence', icon: '🏆', desc: 'Consistently driving ambition, quality excellence, and delivering industry advancement achievements.' },
];

export default function AboutPage() {
    return (
        <>
            {/* ═══════════════════════════ HERO ═══ */}
            <section
                style={{
                    minHeight: '70vh',
                    background: '#131313',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '64px',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div aria-hidden style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '60vw', lineHeight: 1, color: '#ffffff', opacity: 0.02, pointerEvents: 'none', userSelect: 'none' }}>D</div>

                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 64px', position: 'relative', zIndex: 1 }} className="section-pad">
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '24px' }}>— About Us</p>
                    <h1
                        style={{
                            fontFamily: 'Sora, sans-serif',
                            fontWeight: 800,
                            fontSize: 'clamp(36px, 7vw, 72px)',
                            lineHeight: 1.05,
                            letterSpacing: '-0.02em',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                            maxWidth: '800px',
                            marginBottom: '24px',
                        }}
                    >
                        Building the{' '}
                        <span style={{ background: 'linear-gradient(to right, #F15A24, #ED1C24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Future</span>
                        <br />of Infrastructure
                    </h1>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#a98a80', lineHeight: 1.6, maxWidth: '580px' }}>
                        PT Dayana Energi Nusantara berdiri di garis terdepan infrastruktur industri Indonesia — memberikan solusi presisi penuh untuk sektor energi, konstruksi, dan teknik mekanik.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════ BLUEPRINT OF EXCELLENCE ═══ */}
            <section style={{ background: '#0e0e0e', padding: '120px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '80px', alignItems: 'start' }} className="blueprint-grid">
                        {/* Text */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                <div style={{ width: '32px', height: '1px', background: '#F15A24' }} />
                                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F15A24' }}>Profile Perusahaan</span>
                            </div>
                            <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '36px', textTransform: 'uppercase', color: '#ffffff', lineHeight: 1.2, marginBottom: '24px' }}>
                                The Blueprint of Excellence
                            </h2>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#a98a80', lineHeight: 1.7, marginBottom: '24px' }}>
                                Berdiri di atas fondasi rekam teknis yang kuat, PT Dayana Energi Nusantara telah membuktikan komitmennya, membangun, mengelola, dan menyelesaikan proyek-proyek berdampak tinggi di lingkungan industri paling menantang.
                            </p>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#a98a80', lineHeight: 1.7, marginBottom: '40px' }}>
                                Kami percaya bahwa setiap proyek infrastruktur adalah warisan — struktur yang bertahan puluhan tahun, yang digunakan tidak hanya untuk bisnis energi tetapi untuk bangsa.
                            </p>

                            {/* Stats */}
                            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                                <MetricBadge value="25+" label="Years Active" />
                                <MetricBadge value="150+" label="Projects Done" />
                            </div>
                        </div>

                        {/* Image cards */}
                        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '16px' }}>
                            <div style={{ height: '200px', background: '#e5e5e5', border: '1px solid #333', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#888888', fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold' }}>700 x 200</div>
                                <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(0,0,0,0.7)', padding: '6px 12px' }}>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#F15A24', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Proyek Konstruksi</p>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', color: '#fff', fontWeight: 600 }}>Pembangunan Infrastruktur Industri</p>
                                </div>
                            </div>
                            <div style={{ height: '200px', background: '#e5e5e5', border: '1px solid #333', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ color: '#888888', fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold' }}>700 x 200</div>
                                <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(0,0,0,0.7)', padding: '6px 12px' }}>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#F15A24', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Energy Systems</p>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', color: '#fff', fontWeight: 600 }}>Critical Energy Infrastructure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ VISION & MISSION ═══ */}
            <section style={{ background: '#131313', padding: '120px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '16px' }}>Our Direction</p>
                        <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '36px', textTransform: 'uppercase', color: '#ffffff' }}>Vision & Mission</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="vm-grid">
                        {/* Vision */}
                        <div style={{ border: '1px solid #333', background: '#1f2020', padding: '40px' }}>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <div style={{ width: '48px', height: '48px', border: '1px solid #F15A24', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Eye size={20} color="#F15A24" />
                                </div>
                                <div>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '12px' }}>01 · Vision</p>
                                    <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '20px', color: '#ffffff', marginBottom: '16px' }}>Our Vision</h3>
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#a98a80', lineHeight: 1.7 }}>
                                        To be for an truly catalyst for technological progress in the Southeast Asia, recognized for setting the benchmark for infrastructure, engineering integrity, and sustainable industrial development.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mission */}
                        <div style={{ border: '1px solid #333', background: '#1f2020', padding: '40px' }}>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <div style={{ width: '48px', height: '48px', border: '1px solid #F15A24', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Target size={20} color="#F15A24" />
                                </div>
                                <div>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '12px' }}>02 · Mission</p>
                                    <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '20px', color: '#ffffff', marginBottom: '16px' }}>Our Mission</h3>
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#a98a80', lineHeight: 1.7 }}>
                                        We deliver a focused and well-running support to high-intense industry solutions, technical excellence, and commitment to long-time client service to ensure the quality for every client.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ LEADERSHIP ═══ */}
            <section style={{ background: '#0e0e0e', padding: '120px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '16px' }}>Our Team</p>
                        <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '36px', textTransform: 'uppercase', color: '#ffffff' }}>Commanding Authority</h2>
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#a98a80', marginTop: '16px' }}>We naturally assemble top-quality domain specialists experienced in heavy industry and project management.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="leaders-grid">
                        {leaders.map((l) => (
                            <div key={l.name} style={{ border: '1px solid #333', background: '#1f2020', overflow: 'hidden' }}>
                                {/* Photo placeholder */}
                                <div
                                    style={{
                                        height: '240px',
                                        background: '#e5e5e5',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <div style={{ color: '#888888', fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold' }}>400 x 240</div>
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '8px' }}>
                                        {l.title}
                                    </p>
                                    <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#ffffff', marginBottom: '12px' }}>{l.name}</h3>
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#a98a80', lineHeight: 1.6 }}>{l.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ VALUES ═══ */}
            <section style={{ background: '#131313', padding: '120px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
                        <div>
                            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '16px' }}>Core Values</p>
                            <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '36px', textTransform: 'uppercase', color: '#ffffff' }}>
                                The Principles that<br />Drive Every Connection
                            </h2>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            {['01', '02', '03', '04'].map((n) => (
                                <div key={n} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#5a4139', border: '1px solid #333', padding: '4px 10px' }}>{n}</div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#333' }} className="values-grid">
                        {values.map((v) => (
                            <div key={v.label} style={{ background: '#131313', padding: '32px 24px' }}>
                                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{v.icon}</div>
                                <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#ffffff', textTransform: 'uppercase', marginBottom: '12px' }}>{v.label}</h3>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#a98a80', lineHeight: 1.6 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
