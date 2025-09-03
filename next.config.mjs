/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // As linhas abaixo são cruciais para o GitHub Pages funcionar.
  // Elas garantem que o site encontre seus arquivos (CSS, imagens, etc.) corretamente.
    basePath: '/futuro-corp-website',
  assetPrefix: '/futuro-corp-website/',
};

export default nextConfig;