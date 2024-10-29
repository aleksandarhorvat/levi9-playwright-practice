import { BasePage } from "./basePage";

export class ProductsPage extends BasePage{
    /**
 * @param {import  ('@playwright/test').Page } page
 */
    constructor(page){
        super(page);
        this.productsButton = page.locator("[href='/products']");
        this.allProductsCheck = page.getByText("All Products");
        this.cartButton = page.locator("ul.nav.navbar-nav a[href='/view_cart']");
        this.cartContent = page.locator("tbody tr");
        this.countProducts = 0;
    }

    async searchProduct(productName){
       await this.page.locator('input[id="search_product"]').fill(productName);

       await this.page.locator("#submit_search").click();

       await this.page.getByText("Searched Products").isVisible();
    }

    async addProductsToCart1(){
        await this.page.locator("div.features_items").isVisible();
        const items = await this.page.locator("//div[@class='col-sm-4']//img/../a").all();
        for(var element of await items){
            this.countProducts++; 
            await element.click();
            await this.page.getByText('Continue Shopping').click()
        }
    }

    async addProductsToCart2(){
        await this.page.locator("div.features_items").isVisible();
        const items = await this.page.locator("div.product-overlay a.btn.btn-default.add-to-cart").all();
        await items.forEach(element => {
            element.click();
            this.page.getByText('Continue Shopping').click()
        });
    }
}