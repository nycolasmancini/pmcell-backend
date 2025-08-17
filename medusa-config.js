import { defineConfig } from "@medusajs/framework/utils"

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS || "http://localhost:8000,https://*.vercel.app",
      adminCors: process.env.ADMIN_CORS || "http://localhost:7001,http://localhost:7000",
      authCors: process.env.AUTH_CORS || "http://localhost:8000,https://*.vercel.app",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  admin: {
    disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
  },
  modules: [
    {
      resolve: "@medusajs/medusa/cache-inmemory",
      options: {
        ttl: 30,
      },
    },
    {
      resolve: "@medusajs/medusa/event-bus-local",
    },
    {
      resolve: "@medusajs/medusa/workflow-engine-inmemory",
    },
  ],
})