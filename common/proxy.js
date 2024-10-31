export class Proxy {
    /**
     * GET request
     * @params url - request url
     * @params headers - request headers
     * @params auth - request token
     * @returns res - java script object
     */
    async get(url = null, params = {}, auth = {},) {
        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': auth
        }

        const queryString = new URLSearchParams(params).toString();
        const fullUrl = `${url}?${queryString}`; // Append query string to URL

        const response = await fetch(fullUrl, { method: "GET", headers: headers });
        let res = await response.json();

        return res;
    }

    /**
     * POST request
     * @params url - request url
     * @params headers - request headers
     * @params auth - request token
     * @returns res - java script object
     */
    async post(url = null, body = {}, auth = {}) {
        const headers = {
            'Authorization': auth
        }

        const response = await fetch(url, { method: "POST", headers: headers, body: body });
        let res = await response.json();

        return res;
    }

    /**
    * DELETE request
    * @params url - request url
    * @params headers - request headers
    * @params auth - request token
    * @returns res - java script object
    */
    async delete(url = null, body = {}, auth = {}) {
        const headers = {
            'Authorization': auth
        }

        const response = await fetch(url, { method: "DELETE", headers: headers, body: body });
        let res = await response.json();

        return res;
    }

    /**
    * PUT request
    * @params url - request url
    * @params headers - request headers
    * @params auth - request token
    * @returns res - java script object
    */
    async put(url = null, body = {}, auth = {}) {
        const headers = {
            'Authorization': auth
        }

        const response = await fetch(url, { method: "PUT", headers: headers, body: body });
        let res = await response.json();

        return res;
    }
}