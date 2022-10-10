const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://joelee.works');
  await page.screenshot({path: 'screenshot.png'});
  console.log(page)
  await browser.close();
})();
