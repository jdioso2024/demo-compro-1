'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'HSE & Safety', href: '/hse' },
    { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                background: 'rgba(19,19,19,0.95)',
                backdropFilter: 'blur(8px)',
                borderBottom: '1px solid #222222',
            }}
        >
            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '0 64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '64px',
                }}
                className="nav-inner"
            >
                {/* Logo */}
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <div
                        style={{
                            width: '32px',
                            height: '32px',
                            background: 'linear-gradient(to right, #F15A24, #ED1C24)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span style={{ color: '#fff', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '16px' }}>O</span>
                    </div>
                    <span style={{ color: '#ffffff', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.02em' }}>
                        DEN
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                <ul
                    className="desktop-nav"
                    style={{ display: 'flex', gap: '32px', listStyle: 'none', alignItems: 'center' }}
                >
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                style={{
                                    color: '#e5e2e1',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    letterSpacing: '0.01em',
                                    transition: 'color 0.2s',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#F15A24')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#e5e2e1')}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Link
                    href="/contact"
                    className="desktop-nav"
                    style={{
                        background: 'linear-gradient(to right, #F15A24, #ED1C24)',
                        color: '#ffffff',
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 700,
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '10px 20px',
                        textDecoration: 'none',
                        display: 'inline-block',
                    }}
                >
                    MINTA PENAWARAN
                </Link>

                {/* Hamburger */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setOpen(!open)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: '#e5e2e1',
                        cursor: 'pointer',
                        padding: '4px',
                    }}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div
                    style={{
                        background: '#1b1c1c',
                        borderTop: '1px solid #333',
                        padding: '24px 24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            style={{
                                color: '#e5e2e1',
                                fontFamily: 'Sora, sans-serif',
                                fontWeight: 600,
                                fontSize: '16px',
                                textDecoration: 'none',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        style={{
                            background: 'linear-gradient(to right, #F15A24, #ED1C24)',
                            color: '#ffffff',
                            fontFamily: 'Sora, sans-serif',
                            fontWeight: 700,
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            padding: '12px 20px',
                            textDecoration: 'none',
                            textAlign: 'center',
                            display: 'block',
                        }}
                    >
                        MINTA PENAWARAN
                    </Link>
                </div>
            )}

            <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .nav-inner { padding: 0 16px !important; }
        }
      `}</style>
        </nav>
    );
}
