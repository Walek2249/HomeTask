const BasePage = require("./basePage");

class UAPage extends BasePage {
  get UAPageSubtitle() {
    return $('.hero__subtitle');
  }
}



module.exports = new UAPage();