const { Builder, By, Key } = require("selenium-webdriver");
const { expect } = require('chai');


describe("ChromeDriver tests", () => {
  let driver;
  before(async () => {
   driver = new Builder().forBrowser("chrome").setChromeOptions({
    'args': ['--start-maximized', '--incognito']
  }).build();

    await driver.manage().window().setSize({ width: 1920, height: 1080 });
  });

  after(async () => {
    await driver.quit();
  });

  it("check Main title", async () => {
    await driver.get("https://chromedriver.chromium.org");
    const mainTitle = await driver.findElement(By.css('span[class*="Rn3Z1b"]'));
    expect(await mainTitle.getText()).to.equal("ChromeDriver");
    const chromeExtButton = await driver.findElement(By.xpath('//*[@class="PsKE7e qV4dIc Qrrb5 YSH9J"]//a[text()="Chrome Extensions"]'));
    await chromeExtButton.click();
    const newMainTitle = await driver.findElement(By.css('span[class*="Rn3Z1b"]'));
    driver.executeScript("arguments[0].style.backgroundColor = 'red'", newMainTitle);
    expect(await newMainTitle.getText()).to.equal("Chrome Extensions");
  });

  it("check Search field", async () => {
    await driver.get("https://chromedriver.chromium.org");
    const searchField = await driver.findElement(By.css('.RBEWZc'));
    await searchField.click();

    const searchInput = await driver.findElement(By.css('.whsOnd.zHQkBf'));
    await driver.sleep(1500);
    await searchInput.sendKeys("driver", Key.ENTER);
    await driver.sleep(1500);
    const searchResult = await driver.findElement(By.css('div[class*="gtazFe"]:first-of-type div[class*="yDWqEe"]')).getText();
    expect(await searchResult).to.contain("driver");
  });
 
});