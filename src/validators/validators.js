const { expect } = require('@playwright/test');
const LoginData = require('../schemas/LoginData.json')

exports.ProductValidator = class ProductValidator {
  static validatePricesLowToHigh(prices) {
    expect(prices.length).toBeGreaterThan(0);
    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
    }
  }
};

exports.AuthValidator = class AuthValidator {
static async validateInvalidCredentialsError(errorLocator) {
    await expect(errorLocator).toBeVisible();
    await expect(errorLocator).toContainText(LoginData.invalidUser.expectedError);
  }
};