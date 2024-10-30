const { test, expect } = require('@playwright/test');
import { ProductClient } from '../../common/productClient';

test.describe("Check if product 'Blue Top' exist", () => {
    test("Check if product 'Blue Top' exist", async () => {

        var productClient = new ProductClient();

        var products = await productClient.searchProduct("Blue");
        
        products = productClient.parseProducts(products);

        for await (const element of products) {
            if(element.name == "Blue Top")
                expect(element.name).toEqual("Blue Top");
        }
    })
})