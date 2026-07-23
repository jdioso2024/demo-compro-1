'use client';
import React from 'react';

interface TeamCardProps {
    name: string;
    title: string;
    subTitle: string;
    imageBg?: string;
}

export default function TeamCard({ name, title, subTitle, imageBg }: TeamCardProps) {
    return (
        <div
            style={{
                border: '1px solid #333333',
                background: '#1f2020',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#F15A24')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#333333')}
        >
            <div
                style={{
                    height: '260px',
                    background: imageBg || 'linear-gradient(to bottom, #2a2a2a, #131313)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '24px',
                    position: 'relative'
                }}
            >
                {/* Grayscale filter would normally be applied to the image here, done via wrapper div if image is used */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #1a1a1a, transparent)' }} />
            </div>

            <div style={{ padding: '24px', borderTop: '1px solid #333333', background: '#0e0e0e' }}>
                <span
                    style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#F15A24',
                        display: 'block',
                        marginBottom: '6px'
                    }}
                >
                    {title}
                </span>
                <h3
                    style={{
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        color: '#ffffff',
                        marginBottom: '8px'
                    }}
                >
                    {name}
                </h3>
                <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#a98a80',
                }}>
                    {subTitle}
                </p>
            </div>
        </div>
    );
}
