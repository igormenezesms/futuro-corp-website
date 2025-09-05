/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    tailwindcss: {
      // Início da configuração do Tailwind
      content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {},
      },
      plugins: [],
      // Fim da configuração do Tailwind
    },
    autoprefixer: {},
  },
};
