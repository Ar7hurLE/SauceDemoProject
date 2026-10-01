exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;
    this.titleSpan = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
    this.sortSelector = page.locator('[data-test="product-sort-container"]');
    this.itemPrices = page.locator('.inventory_item_price');
  }
  async addFirstProductToCart() { await this.inventoryItems.first().locator('button').click(); }
  async goToCart() { await this.shoppingCartLink.click(); }
  async sortByPriceLowToHigh() { await this.sortSelector.selectOption('lohi'); }
  async getAllPrices() {
    const priceTextArray = await this.itemPrices.allInnerTexts();
    return priceTextArray.map(p => parseFloat(p.replace('$', '')));
  }
};