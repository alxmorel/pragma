/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        bg: '#F5F4F2',
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#171513',
          muted: '#6A635C',
        },
        line: '#D8D3CC',
        accent: {
          DEFAULT: '#9A5B3C',
          hover: '#7E492F',
          subtle: '#F1E8E1',
        },
        danger: '#B42318',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      borderRadius: {
        control: '0.25rem',
        surface: '0.375rem',
      },
    },
  },
  plugins: [],
};
