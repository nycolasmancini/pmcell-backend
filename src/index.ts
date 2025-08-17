import { MedusaApp } from "@medusajs/framework"

async function start() {
  const app = await MedusaApp({
    directory: process.cwd(),
  })

  app.listen(process.env.PORT || 9000, () => {
    console.log(`🚀 PMCELL Backend running on port ${process.env.PORT || 9000}`)
  })
}

start()