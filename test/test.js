const { expect } = require('chai');
const { Key } = require('webdriverio');

describe('webdriver.io tests', () => {
  it('should go to the allure-reporter link through mouse clicks on the site', async () => {
    await browser.url('https://webdriver.io/');
    await $('.navbar__item.navbar__link[href="/docs/gettingstarted"]').click();
    expect(await browser.url('https://webdriver.io/docs/gettingstarted/'));
    await $('li:nth-child(12) > div > a').click();
    await $('.menu__link[href="/docs/allure-reporter"]').click();
    expect(await browser.url('https://webdriver.io/docs/allure-reporter/'));
    expect(await $('header > h1').getText()).to.equal('Allure Reporter');
  });

  it('search field should move to allure-reporter link ', async() => {
    await browser.url('https://webdriver.io/');
    await $('button.DocSearch-Button').click();
    await $('input.DocSearch-Input').setValue('Allure Reporter');
    await browser.keys(Key.Enter);
    expect(await browser.url('https://webdriver.io/docs/allure-reporter/'));
    expect(await $('header > h1').getText()).to.equal('Allure Reporter');
  });


  it('the site should switch to Ukrainian language', async() => {
    await browser.url('https://webdriver.io/');
    await $('.navbar__item.dropdown.dropdown--hoverable.dropdown--right').click();
    await $('a[href="/uk/"]').click();
    expect(await browser.url('https://webdriver.io/uk/'));
    expect(await $('.hero__subtitle').getText()).to.equal('Тестовий фреймворк наступного покоління для автоматизації браузерів та мобільних пристроїв у Node.js');
  });
});
