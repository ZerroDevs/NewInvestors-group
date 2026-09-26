import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Allow local network connections for Hot Module Replacement in dev mode
  allowedDevOrigins: ['http://192.168.1.100:3000', '192.168.1.100:3000', '192.168.1.100']
};

export default withNextIntl(nextConfig);
