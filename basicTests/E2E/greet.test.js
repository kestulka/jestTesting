const puppeteer = require("puppeteer"); // jest supportina tik CommonJS syntax?

test("should display 'labas' on page", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  const text = await page.$eval("h1", (el) => el.textContent);
  expect(text).toBe("labas");
  await browser.close();
});
