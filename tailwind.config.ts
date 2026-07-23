import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                surface: "#131313",
                "surface-dim": "#131313",
                "surface-bright": "#393939",
                "surface-container-lowest": "#0e0e0e",
                "surface-container-low": "#1b1c1c",
                "surface-container": "#1f2020",
                "surface-container-high": "#2a2a2a",
                "surface-container-highest": "#353535",
                "on-surface": "#e5e2e1",
                "on-surface-variant": "#e2bfb4",
                "inverse-surface": "#e5e2e1",
                "inverse-on-surface": "#303030",
                outline: "#a98a80",
                "outline-variant": "#5a4139",
                "surface-tint": "#ffb59e",
                primary: "#ffb59e",
                "on-primary": "#5d1800",
                "primary-container": "#f75f28",
                "on-primary-container": "#521400",
                "inverse-primary": "#ad3300",
                secondary: "#ffb4ab",
                "on-secondary": "#690006",
                "secondary-container": "#db031a",
                "on-secondary-container": "#ffecea",
                background: "#131313",
                "on-background": "#e5e2e1",
            },
            fontFamily: {
                sora: ["Sora", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            fontSize: {
                "display-xl": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "headline-lg": ["48px", { lineHeight: "1.2" }],
                "headline-md": ["32px", { lineHeight: "1.3" }],
                "headline-sm": ["24px", { lineHeight: "1.4" }],
                "body-lg": ["18px", { lineHeight: "1.6" }],
                "body-md": ["16px", { lineHeight: "1.6" }],
                "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em" }],
            },
            maxWidth: {
                container: "1280px",
            },
            borderRadius: {
                none: "0px",
            },
        },
    },
    plugins: [],
};

export default config;
