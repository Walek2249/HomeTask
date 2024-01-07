const { test, expect } = require('@playwright/test');
const Navbar = require("../pageobjects/pageComponents/navbar");
const Search = require("../pageobjects/pageComponents/search");
const CommandLinePage = require("../pageobjects/commandLinePage");
const DocsPage = require("../pageobjects/docsPage");
const HomePage = require("../pageobjects/homePage");

test.describe('playwright.dev tests',function () {
  let navbar;
  let search;
  let commandLinePage;
  let docsPage;
  let homePage;
  test.beforeEach(async ({page}) => {
    navbar = new Navbar(page);
    search = new Search(page);
    commandLinePage = new CommandLinePage(page);
    docsPage = new DocsPage(page);
    homePage = new HomePage(page);
    await homePage.navigate('https://playwright.dev/')
  })
    
  test('should go to command line link through mouse clicks on the site', async () => {
    await navbar.docsTab.click();
    await docsPage.commandLineButton.click();
    expect(await commandLinePage.navigate('https://playwright.dev/docs/test-cli/'));
    expect(await commandLinePage.commandLineHeader.textContent()).toEqual('Command line');
  });

  test('search field should move to command line link ', async() => {
    await navbar.clickSearchButton();
    await search.startSearch("Command line");
    expect(await commandLinePage.navigate('https://playwright.dev/docs/test-cli/'));
    expect(await commandLinePage.commandLineHeader.textContent()).toEqual('Command line');
  });


  test('homepage should show right title', async() => {
    expect(await homePage.homeTitle.textContent()).toEqual('Playwright enables reliable end-to-end testing for modern web apps.');
  });


  test('site should switch to dark mode', async() => {
    await navbar.clickColorToggleButton();
    expect(await navbar.colorToggleButton.getAttribute("title")).toEqual('Switch between dark and light mode (currently dark mode)');


});
  });
  
  