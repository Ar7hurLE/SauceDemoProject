const { test, expect } = require('../fixtures/fixture');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

test('Cenário 3: Adicionar produto ao carrinho', async ({ authenticatedPage }) => {
  const productsPage = new ProductsPage(authenticatedPage);
  const cartPage = new CartPage(authenticatedPage);

  await test.step('Quando o user adicionar o primeiro produto disponível ao carrinho', async () => {
    await productsPage.addFirstProductToCart();
  });

  await test.step('Então o badge do carrinho deve atualizar e exibir a quantidade para 1', async () => {
    await expect(productsPage.shoppingCartBadge).toHaveText('1');
  });

  await test.step('E ao abrir a página do carrinho', async () => {
    await productsPage.goToCart();
  });

  await test.step('Então o produto adicionado deve estar listado com sucesso', async () => {
    await expect(cartPage.cartItems).toHaveCount(1);
  });
});
