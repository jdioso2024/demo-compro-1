'use client';
interface ComplianceBadgeProps {
    code: string;
    label: string;
}

export default function ComplianceBadge({ code, label }: ComplianceBadgeProps) {
    return (
        <div
            style={{
                border: '1px solid #5a4139',
                padding: '12px 16px',
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '4px',
                background: 'rgba(89,65,57,0.1)',
            }}
        >
            <span
                style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#a98a80',
                }}
            >
                ISO CERTIFIED
            </span>
            <span
                style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#ffffff',
                    letterSpacing: '0.04em',
                }}
            >
                {code}
            </span>
            <span
                style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    color: '#a98a80',
                }}
            >
                {label}
            </span>
        </div>
    );
}
