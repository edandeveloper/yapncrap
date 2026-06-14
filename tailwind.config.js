/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'parchment': '#f4ede0',
        'parchment-dark': '#ede3d0',
        'parchment-light': '#faf7f2',
        'paper': '#f9f5ee',
        'ink': '#1a1209',
        'ink-light': '#3d2e1e',
        'ink-faint': '#8a7a68',
        'red': '#d62b1f',
        'red-dark': '#a01f15',
        'kraft': '#c4a882',
        'tape-yellow': '#f5e6a3',
        'tape-blue': '#b8d4e8',
      },
      fontFamily: {
        display: ['"Lora"', 'Georgia', 'serif'],
        typewriter: ['"Special Elite"', 'monospace'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'paper': '2px 2px 8px rgba(26, 18, 9, 0.12), 0 1px 3px rgba(26, 18, 9, 0.08)',
        'paper-lg': '4px 6px 20px rgba(26, 18, 9, 0.15), 0 2px 6px rgba(26, 18, 9, 0.08)',
        'pin': '1px 1px 4px rgba(26, 18, 9, 0.3)',
        'polaroid': '3px 4px 12px rgba(26, 18, 9, 0.2)',
      },
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
        '-1': '-1deg',
        '-2': '-2deg',
        '-3': '-3deg',
      },
      animation: {
        'drift-in': 'driftIn 0.7s ease-out forwards',
        'wobble': 'wobble 3s ease-in-out infinite',
        'tape-appear': 'tapeAppear 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        driftIn: {
          '0%': { opacity: '0', transform: 'translateY(24px) rotate(var(--drift-rot, 0deg))' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(var(--drift-rot, 0deg))' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(var(--wobble-start, -1deg))' },
          '50%': { transform: 'rotate(var(--wobble-end, 1deg))' },
        },
        tapeAppear: {
          '0%': { opacity: '0', scaleX: '0' },
          '100%': { opacity: '1', scaleX: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--float-rot, 0deg))' },
          '50%': { transform: 'translateY(-6px) rotate(var(--float-rot, 0deg))' },
        },
      },
    },
  },
  plugins: [],
}
