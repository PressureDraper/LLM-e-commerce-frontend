import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    allowedDevOrigins: ['10.30.13.67', 'localhost'],
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pub-2340d562e49941639edaa262ef4996bc.r2.dev'
            }
        ]
    }
};

export default nextConfig;
