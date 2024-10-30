const { test, expect } = require('@playwright/test');
import { ProductClient } from '../../common/productClient';

test.describe("Check if product 'Stylish Dress' with price 1500 exist", () => {
    test("Check if product 'Stylish Dress' with price 1500 exist", async () => {

        var productClient = new ProductClient();

        var products = await productClient.searchProduct("Stylish Dress");
        
        products = productClient.parseProducts(products);

        for await (const element of products) {
            if(element.name == "Stylish Dress")
                expect(element.name).toEqual("Stylish Dress");
                expect(element.price).toEqual(1500);
        }
    })
})