class Navbar {
    get docsTab() {
      return $('.navbar__item.navbar__link[href="/docs/gettingstarted"]');
    }
    get languageSwitcher() {
      return $(".navbar__item.dropdown.dropdown--hoverable.dropdown--right");
    }
  
    get UAOption() {
      return $('a[href="/uk/"]');
    }
    get searchButton() {
      return $("button.DocSearch-Button");
    }
    get searchInput() {
      return $("input.DocSearch-Input");
    }
    
    async clickDocsTab() {
      await this.docsTab.waitForClickable();
      await this.docsTab.click();
    }
  
    async clickLanguageSwitcher() {
      await this.languageSwitcher.waitForClickable();
      await this.languageSwitcher.click();
    }
  
    async selectUALanguage() {
      await this.UAOption.waitForClickable();
      await this.UAOption.click();
    }
  
    async clickSearchButton() {
      await this.searchButton.waitForClickable();
      await this.searchButton.click();
    }
  }
  
  module.exports = new Navbar();