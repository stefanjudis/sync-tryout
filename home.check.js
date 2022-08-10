const expect = require('expect')
const { goToPage, cleanUp} = require('./helpers')

// this script is synced to Checkly together with its local dependencies
async function run() {
  const { page, browser } = await goToPage('/')

  console.log(`ENVIRONMENT_NAME ${process.env.ENVIRONMENT_NAME}`)
  console.log(`ENVIRONMENT_URL ${process.env.ENVIRONMENT_URL}`)
  console.log(`DEPLOYMENT_ID ${process.env.DEPLOYMENT_ID}`)
  await page.screenshot({ path: 'home.jpg' })

  // trigger prod deployment - 2nd time

  await cleanUp(page, browser)
}

run();
