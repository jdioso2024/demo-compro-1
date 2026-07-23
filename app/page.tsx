import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';

export default function HomePage() {
    return (
        <>
            {/* ═══════════════════════════════════════ 1. HERO SECTION ═══ */}
            <section
                style={{
                    minHeight: '100vh',
                    background: '#131313',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    paddingTop: '64px',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }}
            >
                {/* D Watermark */}
                <div
                    aria-hidden
                    style={{
                        position: 'absolute',
                        right: '-5%',
                        top: '40%',
                        transform: 'translateY(-50%)',
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 800,
                        fontSize: '55vw',
                        lineHeight: 1,
                        color: '#ffffff',
                        opacity: 0.03,
                        pointerEvents: 'none',
                        userSelect: 'none',
                    }}
                >
                    DEN
                </div>

                <div
                    className="section-pad-hero"
                    style={{
                        maxWidth: '1280px',
                        margin: '0 auto',
                        padding: '80px 64px 0 64px',
                        position: 'relative',
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    {/* Overline */}
                    <div
                        style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '10px',
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#a98a80',
                            marginBottom: '24px',
                            border: '1px solid #333333',
                            padding: '6px 12px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255,255,255,0.05)',
                        }}
                    >
                        <div style={{ width: '4px', height: '4px', background: '#F15A24', borderRadius: '50%' }} />
                        CIVIL | INFRASTRUCTURE | ENERGY
                    </div>

                    {/* Headline */}
                    <h1
                        style={{
                            fontFamily: 'Sora, sans-serif',
                            fontWeight: 800,
                            fontSize: 'clamp(48px, 6vw, 72px)',
                            lineHeight: 1.05,
                            letterSpacing: '-0.02em',
                            color: '#ffffff',
                            maxWidth: '900px',
                            marginBottom: '32px',
                        }}
                    >
                        MENJADI MITRA<br />
                        <span style={{ color: '#F15A24' }}>
                            TANGGUH
                        </span><br />
                        ANDA DI LAPANGAN
                    </h1>

                    <p
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '16px',
                            color: '#e5e2e1',
                            lineHeight: 1.6,
                            maxWidth: '600px',
                            marginBottom: '48px',
                        }}
                    >
                        Solusi eksekusi infrastruktur sipil, pendukung energi (Oil, Gas & Geothermal), dan pengadaan alat berat dengan standar kepatuhan serta presisi tinggi.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '80px' }}>
                        <Link
                            href="/projects"
                            style={{
                                background: 'linear-gradient(to right, #F15A24, #ED1C24)',
                                color: '#ffffff',
                                fontFamily: 'Sora, sans-serif',
                                fontWeight: 700,
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                padding: '16px 32px',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            EKSPLORASI PROYEK KAMI <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/portfolio"
                            className="hover:bg-[rgba(255,255,255,0.05)]"
                            style={{
                                border: '1px solid #555555',
                                color: '#e5e2e1',
                                fontFamily: 'Sora, sans-serif',
                                fontWeight: 700,
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                padding: '16px 32px',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'background 0.2s'
                            }}
                        >
                            LIHAT PORTFOLIO
                        </Link>
                    </div>

                    {/* ═══════════════════════════════════════ 2. STATS STRIP ═══ */}
                    <div style={{
                        borderTop: '1px dotted #333333',
                        paddingTop: '40px',
                        paddingBottom: '40px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '24px'
                    }}>
                        {/* Stat 1 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderLeft: '2px solid #F15A24', paddingLeft: '16px', paddingRight: '32px', borderRight: '1px solid #333333' }}>
                            <ShieldCheck color="#F15A24" size={28} />
                            <div>
                                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '18px', color: '#ffffff', lineHeight: 1.2 }}>ZERO<br />ACCIDENT</div>
                                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#a98a80', marginTop: '4px' }}>Safety & Health<br />Compliance</div>
                            </div>
                        </div>
                        {/* Stat 2 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderLeft: '2px solid #F15A24', paddingLeft: '16px', paddingRight: '32px', borderRight: '1px solid #333333' }}>
                            <Clock color="#F15A24" size={28} />
                            <div>
                                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '18px', color: '#ffffff', lineHeight: 1.2 }}>100% ON-<br />TIME</div>
                                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#a98a80', marginTop: '4px' }}>Quality & Schedule<br />Guarantees</div>
                            </div>
                        </div>
                        {/* Stat 3 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderLeft: '2px solid #F15A24', paddingLeft: '16px' }}>
                            <Award color="#F15A24" size={28} />
                            <div>
                                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '18px', color: '#ffffff', lineHeight: 1.2 }}>CSMS<br />CERTIFIED</div>
                                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#a98a80', marginTop: '4px' }}>High level compliance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════ 3. SERVICES SECTION ═══ */}
            <section style={{ background: '#fcfcfc', padding: '120px 0' }}>
                <div className="section-pad" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>

                    <div style={{ marginBottom: '64px' }}>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', color: '#F15A24', textTransform: 'uppercase' }}>
                            OUR EXPERTISE
                        </span>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '16px' }}>
                            <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 48px)', color: '#131313', lineHeight: 1.2, maxWidth: '600px' }}>
                                LAYANAN ENGINEERING &<br />KONSTRUKSI<br />TERINTEGRASI
                            </h2>
                            <div style={{ height: '3px', width: '100px', background: '#131313', marginBottom: '16px' }} />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="grid-3col">
                        <ServiceCard
                            icon=""
                            category="EARTHWORKS & CIVIL"
                            title="GENERAL CONSTRUCTION & CIVIL WORKS"
                            description="Pengerjaan infrastruktur jalan, drainase industri, pematangan lahan (earthworks), dan renovasi struktur komersial berskala besar."
                            tags={['ROADS', 'BRIDGES', 'EARTHWORKS']}
                        />
                        <ServiceCard
                            icon=""
                            category="MECHANICAL & PIPING"
                            title="ENERGY SUPPORT & SPECIALIST WORKS"
                            description="Dukungan teknis untuk sektor migas dan geothermal termasuk instalasi mekanikal & piping, pengecatan statis/tinggi, dan pemeliharaan sumur."
                            tags={['PIPING', 'GEOTHERMAL', 'MECHANICAL']}
                        />
                        <ServiceCard
                            icon=""
                            category="SUPPLY CHAIN"
                            title="PROCUREMENT & MANPOWER"
                            description="Penyediaan alat berat performa tinggi, material konstruksi tersertifikasi, dan tenaga ahli lapangan dengan sertifikasi kompetensi nasional."
                            tags={['HEAVY EQUIPMENT', 'CERTIFIED MANPOWER', 'SUPPLY']}
                        />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════ 4. PROJECTS SECTION ═══ */}
            <section style={{ background: '#1b1c1c', padding: '120px 0' }}>
                <div className="section-pad" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
                        <div>
                            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', color: '#F15A24', textTransform: 'uppercase' }}>
                                FEATURED PROJECTS
                            </span>
                            <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 48px)', color: '#ffffff', lineHeight: 1.2, marginTop: '16px' }}>
                                REKAM JEJAK EKSEKUSI<br />PRESISI
                            </h2>
                        </div>
                        <Link
                            href="/projects"
                            style={{
                                color: '#ffffff',
                                fontFamily: 'Sora, sans-serif',
                                fontWeight: 700,
                                fontSize: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                paddingBottom: '8px'
                            }}
                            className="hover:text-[#F15A24] transition-colors"
                        >
                            LIHAT SEMUA PROYEK <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="grid-3col">
                        <ProjectCard
                            size="large"
                            category="EPCC & M"
                            title="Mechanical & Piping Pipelines (Cluster TLG-3 & KRH-6)"
                            description=""
                            location="ENERGY INFRASTRUCTURE"
                            contractValue="-"
                        />
                        <ProjectCard
                            size="large"
                            category="CIVIL"
                            title="Road Improvement 25 km (Jayanegara-Parungkuda)"
                            description=""
                            location="CIVIL WORKS"
                            contractValue="-"
                        />
                        <ProjectCard
                            size="large"
                            category="CIVIL"
                            title="Drilling Location Preparation (Salak 7 Development)"
                            description=""
                            location="HEAVY CIVIL WORKS"
                            contractValue="-"
                        />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════ 5. HSE SECTION ═══ */}
            <section style={{ background: '#131313', padding: '120px 0', borderTop: '1px solid #222222' }}>
                <div className="section-pad" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', color: '#F15A24', textTransform: 'uppercase' }}>
                                HSE & COMPLIANCE
                            </span>
                            <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 42px)', color: '#ffffff', lineHeight: 1.2, marginTop: '16px', marginBottom: '24px' }}>
                                KESELAMATAN<br />ADALAH <span style={{ color: '#F15A24' }}>PRIORITAS MUTLAK</span>
                            </h2>
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#a98a80', lineHeight: 1.6, marginBottom: '48px', maxWidth: '500px' }}>
                                Perlindungan mutlak terhadap personel dan aset mitra kerja melalui kepatuhan tanpa kompromi pada K3L (Kesehatan, Keselamatan Kerja & Lingkungan). Kami menerapkan standar internasional dalam setiap langkah operasional lapangan.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '400px' }}>
                                <div style={{ border: '1px solid #333333', background: '#1b1c1c', padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#F15A24', letterSpacing: '0.1em' }}>QUALITY</span>
                                    <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#ffffff' }}>ISO 9001:2015</span>
                                </div>
                                <div style={{ border: '1px solid #333333', background: '#1b1c1c', padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#F15A24', letterSpacing: '0.1em' }}>SAFETY</span>
                                    <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#ffffff' }}>ISO 45001</span>
                                </div>
                                <div style={{ border: '1px solid #333333', background: '#1b1c1c', padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#F15A24', letterSpacing: '0.1em' }}>ENVIRONMENT</span>
                                    <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#ffffff' }}>ISO 14001</span>
                                </div>
                            </div>
                        </div>

                        {/* HSE Image Placeholder */}
                        <div style={{ position: 'relative' }}>
                            {/* Decorative dots border */}
                            <div style={{ position: 'absolute', top: '-16px', right: '-16px', bottom: '16px', left: '16px', border: '1px solid #333333', zIndex: 0 }} />

                            <div
                                style={{
                                    background: '#e5e5e5', // gray placeholder
                                    height: '400px',
                                    width: '100%',
                                    position: 'relative',
                                    zIndex: 1,
                                    border: '1px solid #333333',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <div style={{ color: '#888888', fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold' }}>
                                    600 x 400
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}
