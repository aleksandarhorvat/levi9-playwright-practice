const { test, expect } = require('@playwright/test');
import { PokemonAPI } from '../../common/pokemonAPI';
const Ajv = require("ajv");

test.describe("Testing PokeAPI", () => {

    test("Testing fetching pokemon species name", async () =>{
        const ajv = new Ajv();

        var pokemonAPI = new PokemonAPI();

        var response = await pokemonAPI.getPokemon("pikachu");

        const schema = require("../../utils/pokemonSchema.json");

        await expect(ajv.validate(schema, response)).toBeTruthy();

        await expect(response.species.name).toEqual("pikachu");
    })

    test("Testing fetching pokemon abilities", async () =>{
        const ajv = new Ajv();

        var pokemonAPI = new PokemonAPI();

        var response = await pokemonAPI.getPokemon("pikachu");

        var schema = require("../../utils/pokemonSchema.json");

        await expect(ajv.validate(schema, response)).toBeTruthy();

        await expect(response.abilities[0].ability.name).toEqual("static");

        response = await pokemonAPI.getAbility(response.abilities[0].ability.url);

        schema = require("../../utils/pokemonAbility.json");

        await expect(ajv.validate(schema, response)).toBeTruthy();
    })

})