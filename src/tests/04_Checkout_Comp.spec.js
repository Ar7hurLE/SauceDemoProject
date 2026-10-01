const { test, expect } = require('../fixtures/fixture');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const customerData = require('../schemas/userData.json');

test('Cenário 4: Checkout completo', async ({ authenticatedPage }) => {
  const productsPage = new ProductsPage(authenticatedPage);
  const cartPage = new CartPage(authenticatedPage);
  const checkoutPage = new CheckoutPage(authenticatedPage);
  
  const { firstName, lastName, postalCode } = customerData.defaultCheckout;
  
  await test.step('Quando o utilizador adiciona um produto ao carrinho e avança para o checkout', async () => {
    await productsPage.addFirstProductToCart();
    await productsPage.goToCart();
    await cartPage.proceedToCheckout();
  });

  await test.step('E preenche os dados do cliente para finalizar a compra', async () => {
    await checkoutPage.fillCustomerInformation(firstName, lastName, postalCode);
    await checkoutPage.finishCheckout();
  });

  await test.step('Então a mensagem de sucesso deve ser exibida', async () => {
    await expect(checkoutPage.successHeader).toBeVisible();
    await expect(checkoutPage.successHeader).toHaveText('Thank you for your order!');
  });
});
