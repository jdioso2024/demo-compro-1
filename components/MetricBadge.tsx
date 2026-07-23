'use client';
interface MetricBadgeProps {
    value: string;
    label: string;
    sublabel?: string;
}

export default function MetricBadge({ value, label, sublabel }: MetricBadgeProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '16px' }}>
            {/* Gradient accent bar */}
            <div
                style={{
                    width: '3px',
                    background: 'linear-gradient(to bottom, #F15A24, #ED1C24)',
                    flexShrink: 0,
                }}
            />
            <div>
                <div
                    style={{
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 800,
                        fontSize: '40px',
                        lineHeight: 1.1,
                        color: '#ffffff',
                    }}
                >
                    {value}
                </div>
                <div
                    style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '12px',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#a98a80',
                        marginTop: '4px',
                    }}
                >
                    {label}
                </div>
                {sublabel && (
                    <div
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '13px',
                            color: '#5a4139',
                            marginTop: '2px',
                        }}
                    >
                        {sublabel}
                    </div>
                )}
            </div>
        </div>
    );
}
