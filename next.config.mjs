/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "simetria-app.connect.ge",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
