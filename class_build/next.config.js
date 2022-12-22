/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "codecamp_deploy_10",

  // 아래 주소들만 out 폴더에 만들어줘(getServerSideProps가 있는 페이지를 제외)
  exportPathMap: () => ({
    "/": { page: "/" },
    boards: { page: "/" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
