const { test, expect } = require('../fixtures/fixture');
const LoginData = require('../schemas/LoginData.json');

test('Cenário 1: Login com sucesso', async ({ loginPage, productsPage }) => {
  const username = LoginData.validUser.username;
  const password = LoginData.validUser.password;

  await test.step('Dado que o user acede à página de login do SauceDemo', async () => {
    await loginPage.navigate();
  });

  await test.step('Quando o user informa um username e password válidos', async () => {
    await loginPage.login(username, password);
  });

  await test.step('Então deve ser redirecionado para a página de produtos', async () => {
    await expect(productsPage.page).toHaveURL(/.*inventory.html/);
  });

  await test.step('E a lista/título de produtos deve estar visível', async () => {
    await expect(productsPage.titleSpan).toBeVisible();
    await expect(productsPage.titleSpan).toHaveText('Products');
  });
});
