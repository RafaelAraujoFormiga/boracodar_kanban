import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            red50: "#ED3A5A",
            purple50: "#7C3AED",
            purple100: "#9F67FF",
            gray50: "#F8FAFC",
            gray100: "#F1F5F9",
            gray200: "#E2E8F0",
            gray300: "#CBD5E1",
            gray400: "#CAB3FF",
            gray500: "#64748B",
            gray550: "#7C7C8A",
            gray600: "#475569",
            gray650: "#403937",
            gray700: "#334155",
            gray800: "#1E293B",
            gray900: "#0F172A",
        },
    },
    media: {
        bp1: '(min-width: 480px)',
    },
    utils: {
        marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
    },
});