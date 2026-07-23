'use client';
interface ServiceCardProps {
    icon: string;
    category: string;
    title: string;
    description: string;
    tags: string[];
    imageBg?: string;
}

export default function ServiceCard({ icon, category, title, description, tags, imageBg }: ServiceCardProps) {
    return (
        <div
            style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
            }}
            className="border-[#333333] hover:border-[#F15A24] bg-[#1f2020]"
        >
            {/* Image placeholder area */}
            <div
                style={{
                    height: '180px',
                    background: '#e5e5e5', // light gray for placeholder
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div style={{ color: '#888888', fontFamily: 'monospace', fontSize: '14px', fontWeight: 'bold' }}>
                    400 x 250
                </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: '#222222' }} />

            {/* Content */}
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span
                    style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#F15A24',
                    }}
                >
                    {category}
                </span>
                <h3
                    style={{
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 700,
                        fontSize: '18px',
                        color: '#ffffff',
                        lineHeight: 1.3,
                        textTransform: 'uppercase',
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        color: '#a98a80',
                        lineHeight: 1.6,
                        flex: 1,
                    }}
                >
                    {description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                fontFamily: 'JetBrains Mono, monospace',
                                fontSize: '10px',
                                letterSpacing: '0.08em',
                                color: '#5a4139',
                                border: '1px solid #333333',
                                padding: '3px 8px',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
