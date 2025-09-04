/** @type {import('next').NextConfig} */

const repoName = 'futuro-corp-website'; // IMPORTANTE: O nome exato do seu repositório

const nextConfig = {
  /**
   * Essencial para o GitHub Pages:
   * Gera um site 100% estático (HTML/CSS/JS) na pasta 'out/'.
   */
  output: 'export',

  /**
   * Otimização de imagens do Next.js requer um servidor.
   * Como estamos gerando um site estático, precisamos desativá-la.
   */
  images: {
    unoptimized: true,
  },

  /**
   * Informa ao Next.js que o site não está na raiz do domínio,
   * mas sim em um subdiretório (ex: seudominio.com/nome-do-repo).
   */
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;