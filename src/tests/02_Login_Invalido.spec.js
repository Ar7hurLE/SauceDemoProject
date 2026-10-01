const { test, expect } = require('../fixtures/fixture');
const { AuthValidator } = require('../validators/validators');
const LoginData = require('../schemas/LoginData.json');

test('Cenário 2: Login inválido', async ({loginPage}) => {

  const InvalidUsername = LoginData.invalidUser.username;
  const InvalidPassword = LoginData.invalidUser.password;

  await test.step('Dado que o user acede à página de login do SauceDemo', async () => {
    await loginPage.navigate();
  });

  await test.step('Quando o user informa um username e password inválidos', async () => {
    await loginPage.login(InvalidUsername, InvalidPassword);
  });

  await test.step('Então a mensagem de erro é exibida', async () => {
      await AuthValidator.validateInvalidCredentialsError(loginPage.errorMessage);
    });

  await test.step('E o utilizador permanece na página de login', async () => {
      await expect(loginPage.page).toHaveURL('https://www.saucedemo.com');
    });
  });