import defaultTheme from 'tailwindcss/defaultTheme';

/**
 * Tailwind v4 is primarily configured via CSS (see resources/css/app.css).
 * This file is kept for any legacy/edge cases and font overrides.
 * DaisyUI theme and custom colors are defined in app.css using @plugin and @theme.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    // No plugins or daisyui here anymore - configured in CSS for v4.
};
