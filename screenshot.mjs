import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  executablePath: '/home/foundry/.cache/puppeteer/chrome/linux-153.0.8010.36/chrome-linux64/chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--ignore-certificate-errors'],
});

const page = await browser.newPage();

// Desktop 1440px viewport, tall enough to load everything
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

// Make all reveal animations visible instantly so nothing is hidden
await page.addStyleTag({
  content: `
    .reveal, .reveal-left, .reveal-right, .reveal-scale {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
    * { animation-duration: 0s !important; animation-delay: 0s !important; }
    #ceipa-nav { position: relative !important; }
  `
});

// Wait for images and fonts to settle
await new Promise(r => setTimeout(r, 3000));

// Get full page height
const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
await page.setViewport({ width: 1440, height: bodyHeight, deviceScaleFactor: 1 });
await new Promise(r => setTimeout(r, 500));

// Full-page PDF at 1440px equivalent
await page.pdf({
  path: 'ceipa-home-desktop.pdf',
  width: '1440px',
  height: `${bodyHeight}px`,
  printBackground: true,
  pageRanges: '1',
});

console.log(`PDF generado: ceipa-home-desktop.pdf (altura: ${bodyHeight}px)`);
await browser.close();
