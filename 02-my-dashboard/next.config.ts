import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  //* Enable the images property to allow the use of the next/image component
  images: {
    remotePatterns: [
      {
        protocol: "https", // The protocol of the remote image
        hostname: "images.unsplash.com", // The hostname of the remote image
      },
    ]
  }
};

export default nextConfig;
