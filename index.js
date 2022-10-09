const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://joelee.works');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
