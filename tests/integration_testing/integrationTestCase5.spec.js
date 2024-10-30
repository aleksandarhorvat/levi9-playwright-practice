const { test, expect } = require('@playwright/test');
import { ProductClient } from '../../common/productClient';

test.describe("Create JSON from name and price * 0.2", () => {
    test("Create JSON from name and price * 0.2", async () => {

        var productClient = new ProductClient();

        var products = await productClient.getAllProducts();

        products = productClient.parseProducts(products);

        var jsonList = [];

        for await (const element of products) {
            let name = element.name;
            let price = element.price + element.price * 0.2;
            jsonList.push({ name, price });
        }

        jsonList = JSON.stringify(jsonList, null, 2);
        console.log(jsonList);
    })
})