const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const LoginData = require('../schemas/LoginData.json');


exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

    authenticatedPage: async ({page}, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(LoginData.validUser.username, LoginData.validUser.password)

    await use(page);
}

});

exports.expect = base.expect;
