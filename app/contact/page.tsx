'use client';
import { useState } from 'react';
import ComplianceBadge from '@/components/ComplianceBadge';
import { MapPin, Phone, Mail, Diamond } from 'lucide-react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', company: '', service: 'Civil Construction', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <>
            {/* ═══════════════════════════ HERO ═══ */}
            <section style={{ minHeight: '60vh', background: '#131313', display: 'flex', alignItems: 'center', paddingTop: '64px', position: 'relative', overflow: 'hidden', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
                <div aria-hidden style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '60vw', lineHeight: 1, color: '#ffffff', opacity: 0.02, pointerEvents: 'none', userSelect: 'none' }}>D</div>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 64px', position: 'relative', zIndex: 1 }} className="section-pad">
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '24px' }}>— Partner with Experts</p>
                    <h1 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 6vw, 64px)', lineHeight: 1.05, textTransform: 'none', color: '#ffffff', maxWidth: '700px', marginBottom: '24px' }}>
                        Ready to Discuss Your{' '}
                        <span style={{ background: 'linear-gradient(to right, #F15A24, #ED1C24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Next Project?</span>
                    </h1>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#a98a80', lineHeight: 1.6, maxWidth: '520px' }}>
                        Whether you're planning a large-scale civil development or seeking specialized energy infrastructure support, our team is ready to deliver precision-engineered solutions.
                    </p>
                </div>
                <style jsx>{`@media (max-width: 768px) { .section-pad { padding: 80px 16px !important; } }`}</style>
            </section>

            {/* ═══════════════════════════ CONTACT SECTION ═══ */}
            <section style={{ background: '#0e0e0e', padding: '80px 0 120px' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '80px', alignItems: 'start' }} className="contact-grid">
                        {/* Left: Info */}
                        <div>
                            {/* Office */}
                            <div style={{ marginBottom: '40px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{ width: '36px', height: '36px', border: '1px solid #F15A24', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <MapPin size={16} color="#F15A24" />
                                    </div>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff' }}>Office Address</p>
                                </div>
                                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#a98a80', lineHeight: 1.7, paddingLeft: '48px' }}>
                                    Jl. Kemang Saya No. 45C, Mampang Prapatan,<br />
                                    Jakarta Selatan, DKI Jakarta 12790,<br />
                                    Indonesia
                                </p>
                            </div>

                            {/* Phone */}
                            <div style={{ marginBottom: '40px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{ width: '36px', height: '36px', border: '1px solid #F15A24', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Phone size={16} color="#F15A24" />
                                    </div>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff' }}>Direct Phone</p>
                                </div>
                                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '18px', color: '#ffffff', paddingLeft: '48px' }}>+62 813 9404 5068</p>
                            </div>

                            {/* Email */}
                            <div style={{ marginBottom: '48px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{ width: '36px', height: '36px', border: '1px solid #F15A24', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Mail size={16} color="#F15A24" />
                                    </div>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff' }}>Email Inquiry</p>
                                </div>
                                <a href="mailto:contact@dayanaenergi.co.id" style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#F15A24', paddingLeft: '48px', display: 'block', textDecoration: 'none' }}>
                                    contact@dayanaenergi.co.id
                                </a>
                            </div>

                            {/* ISO Badges */}
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <ComplianceBadge code="ISO 9001:2015" label="Quality" />
                                <ComplianceBadge code="ISO 45001" label="Safety" />
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div style={{ border: '1px solid #333', background: '#1f2020', padding: '40px' }}>
                            <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ffffff', marginBottom: '32px' }}>Send an Inquiry</p>

                            {sent ? (
                                <div style={{ padding: '40px 0', textAlign: 'center' }}>
                                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#ffffff', marginBottom: '8px' }}>Inquiry Sent!</p>
                                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#a98a80' }}>Our team will get back to you within 1 business day.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="form-row">
                                        {[
                                            { label: 'FULL NAME', field: 'name', placeholder: 'Your full name' },
                                            { label: 'COMPANY NAME', field: 'company', placeholder: 'Your company' },
                                        ].map(({ label, field, placeholder }) => (
                                            <div key={field}>
                                                <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', color: '#5a4139', display: 'block', marginBottom: '8px' }}>{label}</label>
                                                <input
                                                    required
                                                    placeholder={placeholder}
                                                    value={form[field as keyof typeof form]}
                                                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                                                    style={{
                                                        background: 'transparent',
                                                        border: 'none',
                                                        borderBottom: '1px solid #333333',
                                                        color: '#e5e2e1',
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontSize: '15px',
                                                        padding: '10px 0',
                                                        width: '100%',
                                                        outline: 'none',
                                                    }}
                                                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#F15A24')}
                                                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = '#333333')}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Service dropdown */}
                                    <div>
                                        <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', color: '#5a4139', display: 'block', marginBottom: '8px' }}>SERVICE INTEREST</label>
                                        <select
                                            value={form.service}
                                            onChange={(e) => setForm({ ...form, service: e.target.value })}
                                            style={{
                                                background: '#131313',
                                                border: 'none',
                                                borderBottom: '1px solid #333333',
                                                color: '#e5e2e1',
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '15px',
                                                padding: '10px 0',
                                                width: '100%',
                                                outline: 'none',
                                                cursor: 'pointer',
                                                appearance: 'none',
                                            }}
                                        >
                                            {['Civil Construction', 'Energy Support', 'Mechanical & Piping', 'Procurement & Manpower', 'Geothermal Works', 'Other'].map((opt) => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', color: '#5a4139', display: 'block', marginBottom: '8px' }}>YOUR MESSAGE</label>
                                        <textarea
                                            required
                                            rows={5}
                                            placeholder="Describe your project, requirements, or questions..."
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                borderBottom: '1px solid #333333',
                                                color: '#e5e2e1',
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '15px',
                                                padding: '10px 0',
                                                width: '100%',
                                                outline: 'none',
                                                resize: 'vertical',
                                            }}
                                            onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#F15A24')}
                                            onBlur={(e) => (e.currentTarget.style.borderBottomColor = '#333333')}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        style={{
                                            background: 'linear-gradient(to right, #F15A24, #ED1C24)',
                                            color: '#ffffff',
                                            fontFamily: 'Sora, sans-serif',
                                            fontWeight: 700,
                                            fontSize: '13px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            border: 'none',
                                            padding: '18px 32px',
                                            cursor: 'pointer',
                                            width: '100%',
                                            transition: 'opacity 0.2s',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                                    >
                                        Send Inquiry →
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
                <style jsx>{`
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 600px) { .form-row { grid-template-columns: 1fr !important; } }
          @media (max-width: 768px) { .section-pad { padding: 0 16px !important; } }
        `}</style>
            </section>

            {/* ═══════════════════════════ MAP ═══ */}
            <section style={{ background: '#0a0a0a', padding: '0', position: 'relative', height: '400px', overflow: 'hidden', borderTop: '1px solid #222' }}>
                {/* Stylized Jakarta map */}
                <div style={{ position: 'absolute', inset: 0, background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 800 400" style={{ width: '100%', height: '100%', opacity: 0.15 }}>
                        {/* Grid lines */}
                        {Array.from({ length: 20 }).map((_, i) => (
                            <line key={`v${i}`} x1={i * 42} y1={0} x2={i * 42} y2={400} stroke="#F15A24" strokeWidth="0.5" />
                        ))}
                        {Array.from({ length: 10 }).map((_, i) => (
                            <line key={`h${i}`} x1={0} y1={i * 44} x2={800} y2={i * 44} stroke="#F15A24" strokeWidth="0.5" />
                        ))}
                        {/* Roads */}
                        <path d="M 100 200 L 700 200" stroke="#F15A24" strokeWidth="2" />
                        <path d="M 400 50 L 400 350" stroke="#F15A24" strokeWidth="2" />
                        <path d="M 150 100 L 650 300" stroke="#F15A24" strokeWidth="1" strokeDasharray="10 5" />
                    </svg>
                </div>

                {/* Location pin overlay */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#F15A24', border: '3px solid rgba(241,90,36,0.3)', animation: 'pulse 2s infinite' }} />
                </div>

                {/* Card overlay */}
                <div style={{ position: 'absolute', bottom: '32px', left: '64px', background: 'rgba(19,19,19,0.95)', border: '1px solid #333', padding: '24px 32px', maxWidth: '320px' }} className="map-card">
                    <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', color: '#ffffff', marginBottom: '8px' }}>Headquarters</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#a98a80', lineHeight: 1.6, marginBottom: '16px' }}>
                        Strategic operations base serving major industrial hubs across Indonesia.
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', color: '#F15A24', textDecoration: 'none', textTransform: 'uppercase' }}>
                        Get Directions ↗
                    </a>
                </div>
                <style jsx>{`
          @media (max-width: 768px) { .map-card { left: 16px !important; right: 16px !important; } }
          @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(241,90,36,0.4); } 50% { box-shadow: 0 0 0 12px rgba(241,90,36,0); } }
        `}</style>
            </section>

            {/* ═══════════════════════════ FORMAL QUOTE CTA ═══ */}
            <section style={{ background: '#1f2020', padding: '80px 0', borderTop: '1px solid #333', position: 'relative', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                        <div style={{ border: '2px solid #F15A24', padding: '12px 16px', transform: 'rotate(45deg)', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Diamond size={20} color="#F15A24" style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                    </div>
                    <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 40px)', textTransform: 'uppercase', color: '#ffffff', letterSpacing: '-0.01em', marginBottom: '16px' }}>
                        Ready for a Formal Quote?
                    </h2>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#a98a80', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 40px' }}>
                        Download our company profile or request a comprehensive project estimation from our engineering department.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button style={{ background: 'linear-gradient(to right, #F15A24, #ED1C24)', color: '#ffffff', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', border: 'none', padding: '16px 32px', cursor: 'pointer' }}>
                            Request Quote
                        </button>
                        <button style={{ border: '1px solid #555', background: 'transparent', color: '#e5e2e1', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 32px', cursor: 'pointer' }}>
                            Download Profile
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
