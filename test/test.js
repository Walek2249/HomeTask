const { expect } = require("chai");
const { Key } = require("webdriverio");
const navbar = require("../pageobjects/pageComponents/navbar");
const search = require("../pageobjects/pageComponents/search");
const allureReporterPage = require("../pageobjects/allureReporterPage");
const docsPage = require("../pageobjects/docsPage");
const homePage = require("../pageobjects/homePage");
const UAPage = require("../pageobjects/UAPage");

describe('webdriver.io tests', () => {
  it('should go to the allure-reporter link through mouse clicks on the site', async () => {
    await homePage.navigate('https://webdriver.io/');
    await navbar.docsTab.click();
    expect(docsPage.navigate('https://webdriver.io/docs/gettingstarted/'));
    await docsPage.reporterButton.click();
    await docsPage.allureReporterButton.click();
    expect(await allureReporterPage.navigate('https://webdriver.io/docs/allure-reporter/'));
    expect(await allureReporterPage.allureReporterHeader.getText()).to.equal('Allure Reporter');
  });

  it('search field should move to allure-reporter link ', async() => {
    await homePage.navigate('https://webdriver.io/');
    await navbar.clickSearchButton();
    await search.startSearch("Allure Reporter");
    expect(await allureReporterPage.navigate('https://webdriver.io/docs/allure-reporter/'));
    expect(await allureReporterPage.allureReporterHeader.getText()).to.equal('Allure Reporter');
  });


  it('the site should switch to Ukrainian language', async() => {
    await homePage.navigate('https://webdriver.io/');
    await navbar.clickLanguageSwitcher();
    await navbar.selectUALanguage();
    expect(await UAPage.navigate('https://webdriver.io/uk/'));
    expect(await UAPage.UAPageSubtitle.getText()).to.equal('Тестовий фреймворк наступного покоління для автоматизації браузерів та мобільних пристроїв у Node.js');
  });
});
