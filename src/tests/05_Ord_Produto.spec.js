const { test } = require('../fixtures/fixture');
const { ProductsPage } = require('../pages/ProductsPage');
const { ProductValidator } = require('../validators/validators');

test('Cenário 5: Ordenação de produtos por preço', async ({ authenticatedPage }) => {
  const productsPage = new ProductsPage(authenticatedPage);
  
  let prices;
  await test.step('Quando o utilizador seleciona a ordenação por preço do menor para o maior', async () => {
    await productsPage.sortByPriceLowToHigh();
    prices = await productsPage.getAllPrices();
  });

  await test.step('Então os preços devem aparecer em ordem crescente', async () => {
    ProductValidator.validatePricesLowToHigh(prices);
  });
});
