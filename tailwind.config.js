/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        luckiest_guy: ['var(--font-luckiest_guy)'],
        roboto_mono: ['var(--font-roboto_mono)']
      },
    },
  },
  plugins: [require("daisyui")],
}
