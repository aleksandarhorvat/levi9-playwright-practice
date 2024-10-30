import { Proxy } from "./proxy";
import { Product } from "./product";

export class ProductClient extends Proxy {
    getBaseUrl() {
        return "https://automationexercise.com/api"
    }

    async getAllProducts() {
        let url = this.getBaseUrl() + "/productsList"
        let response = await this.get(url, {}, {})
        return response
    }

    async getAllBrands() {
        let url = this.getBaseUrl() + "/brandsList"
        let response = await this.get(url, {}, {})
        return response
    }

    async searchProduct(terms) {
        let url = this.getBaseUrl() + "/searchProduct"

        let formData = new FormData();
        formData.append("search_product", terms);

        let response = await this.post(url, formData, {})
        return response
    }

    parseProducts(jsonData) {
        // Check if the responseCode is 200
        if (jsonData.responseCode !== 200) {
            throw new Error('Invalid response code');
        }

        // Map the products to Product objects
        const products = jsonData.products.map(product => {
            const price = Number(product.price.replace(/[^0-9]/g, ''));
            return new Product(
                product.id,
                product.name,
                price,
                product.brand,
            );
        });

        return products;
    }

    async createAccount(userData){
        let url = this.getBaseUrl() + "/createAccount"

        let formData = new FormData();
        formData.append("email", userData.email);
        formData.append("name", userData.username);
        formData.append("password", userData.password);
        formData.append("birth_date", userData.day);
        formData.append("birth_month", userData.month);
        formData.append("birth_year", userData.year);
        formData.append("firstname", userData.firstName);
        formData.append("lastname", userData.lastName);
        formData.append("company", userData.company);
        formData.append("address1", userData.address1);
        formData.append("address2", userData.address2);
        formData.append("country", userData.country);
        formData.append("zipcode", userData.zipcode);
        formData.append("state", userData.state);
        formData.append("city", userData.city);
        formData.append("mobile_number", userData.mobile_number);

        let response = await this.post(url, formData, {})
        return response
    }

    async verifyLogin(userData){
        let url = this.getBaseUrl() + "/verifyLogin"

        let formData = new FormData();
        formData.append("email", userData.email);
        formData.append("password", userData.password);

        let response = await this.post(url, formData, {})
        return response
    }

    async getUserDetailByEmail(email){
        let url = this.getBaseUrl() + "/getUserDetailByEmail"

        let response = await this.get(url, {email: email}, {});
        return response
    }

    async deleteAccount(userData){
        let url = this.getBaseUrl() + "/deleteAccount"

        let formData = new FormData();
        formData.append("email", userData.email);
        formData.append("password", userData.password);

        let response = await this.delete(url, formData, {})
        return response
    }
}