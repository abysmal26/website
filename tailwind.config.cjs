/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
