/* eslint-disable no-await-in-loop */
import puppeteer from 'puppeteer'

const browserOptions = {
  args: [
    '--window-size=1920,1080',
    '--start-maximized',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-web-security',
    '--disable-features=IsolateOrigins',
    '--disable-site-isolation-trials'
  ],
  defaultViewport: null,
  headless: true
}

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// eslint-disable-next-line jest/valid-describe
describe('components', () => {
  let browser

  beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions)
  })

  it('should match previous screenshot', async () => {
    const page = await browser.newPage()

    await page.setViewport({
      height: 400,
      width: 800
    })

    await page.goto('http://127.0.0.1:6006/')

    await page.waitForSelector('button[data-parent-id="components"]')
    await page.keyboard.press('a')

    const items = await page.$$('button[data-parent-id="components"]')

    items[0].click()
    await timeout(2000)
    await page.keyboard.press('s')
    let url = ''

    while (url !== page.url()) {
      url = page.url()

      await page.keyboard.down('Alt')
      await page.keyboard.press('ArrowRight')
      await page.keyboard.up('Alt')

      await timeout(1000)
      const image = await page.screenshot({ fullPage: true })

      expect(image).toMatchImageSnapshot()
    }
  }, 30000)

  afterAll(async () => {
    await browser.close()
  })
})
