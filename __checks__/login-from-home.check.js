const { chromium } = require("playwright")

const DIMENSIONS = [
  { width: 1920, height: 1080, name: "large" },
  { width: 1000, height: 800, name: "middle" },
  { width: 600, height: 800, name: "small" },
]

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  // Change checklyhq.com to your site's URL,
  // or, even better, define a SITE_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.YOUR_SITE_URL || "https://www.checklyhq.com/")

  // Iterate over defined dimensions and screenshot them
  for (let { name, width, height } of DIMENSIONS) {
    await page.setViewportSize({
      height,
      width,
    })

    await page.screenshot({
      path: `${name}.png`,
    })
  }

  // Close the browser and end the session
  await browser.close()
})()