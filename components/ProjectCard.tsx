'use client';
interface ProjectCardProps {
    category: string;
    title: string;
    description: string;
    location: string;
    contractValue: string;
    imageBg?: string;
    size?: 'large' | 'normal';
}

export default function ProjectCard({
    category,
    title,
    description,
    location,
    contractValue,
    imageBg,
    size = 'normal',
}: ProjectCardProps) {
    return (
        <div
            style={{
                position: 'relative',
                height: size === 'large' ? '400px' : '320px',
                overflow: 'hidden',
                borderWidth: '1px',
                borderStyle: 'solid',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
            }}
            className="border-[#333333] hover:border-[#F15A24]"
        >
            {/* Background image placeholder */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: '#e5e5e5', // gray placeholder
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{ color: '#888888', fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold' }}>
                    400 x 500
                </div>
            </div>

            {/* Dark overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
                }}
            />

            {/* Contract value badge — top right */}
            <div
                style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid #333333',
                    padding: '6px 10px',
                }}
            >
                <span
                    style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.06em',
                        color: '#F15A24',
                    }}
                >
                    Val. {contractValue}
                </span>
            </div>

            {/* Bottom content */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px',
                }}
            >
                <span
                    style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#F15A24',
                        display: 'block',
                        marginBottom: '6px',
                    }}
                >
                    {category}
                </span>
                <h3
                    style={{
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 700,
                        fontSize: size === 'large' ? '22px' : '18px',
                        color: '#ffffff',
                        lineHeight: 1.3,
                        marginBottom: '8px',
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        color: '#c8c6c5',
                        lineHeight: 1.5,
                        marginBottom: '12px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    } as React.CSSProperties}
                >
                    {description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '12px' }}>📍</span>
                    <span
                        style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '11px',
                            color: '#a98a80',
                            letterSpacing: '0.04em',
                        }}
                    >
                        {location}
                    </span>
                </div>
            </div>
        </div>
    );
}
