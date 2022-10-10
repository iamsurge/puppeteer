const puppeteer = require('puppeteer');

async function browser(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(url)

    await page.screenshot({path: 'screenshot.png'});
    await browser.close();
  
  return page.content();
}

console.log(browser("https://joelee.works"))
