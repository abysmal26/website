/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                jetBrains: ['JetBrains Mono', 'monospace']
            }
        }
    },
    plugins: [],
}