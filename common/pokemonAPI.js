import { Proxy } from "./proxy";

export class PokemonAPI extends Proxy {
    getBaseUrl() {
        return "https://pokeapi.co/api/v2";
    }

    async getPokemon(pokemonName){
        let url = this.getBaseUrl() + "/pokemon/" + pokemonName;
        let response = await this.get(url, {}, {})
        return response
    }

    async getAbility(url){
        let response = await this.get(url, {}, {})
        return response  
    }
}