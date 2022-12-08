import axios from 'axios';

export class AppService {
    public async getPokemon(params: any): Promise<any> {
        let baseUrl = import.meta.env.VITE_BACK_URL;
        baseUrl = baseUrl + 'pokemon/';

        if (params.type1 !== '' || params.type2 !== '' || params.gen !== '' || params.mega !== 0) {
            baseUrl = baseUrl + '?'
            if (params.type1 !== 'Any' && params.type1 !== undefined && params.type1 !== "")
                baseUrl = baseUrl + `&type1=${params.type1}`
            if (params.type2 !== 'Any' && params.type2 !== undefined && params.type2 !== "")
                baseUrl = baseUrl + `&type2=${params.type2}`
            if (params.gen !== 0 && params.gen !== undefined && params.gen !== "")
                baseUrl = baseUrl + `&gen=${params.gen}`
            if (params.mega !== 0 && params.mega !== undefined && params.mega !== "")
                baseUrl = baseUrl + `&mega=${params.mega}`
        }

        let getPokemonResponse = await axios.get(baseUrl);

        if (getPokemonResponse.status === 200) {
            if (getPokemonResponse.data[0][0] !== undefined) {
                let poke = getPokemonResponse.data[0][0];
                if (poke.number === undefined)
                    return poke
                let pokePic = await this.getPokemonPic(poke.number)
                poke.imgUrl = pokePic;

                return poke
            }
            else {
                return { name: 'Randy ??', type1: 'Psychic', type2: '', gen: "??" }
            }
        }
        return getPokemonResponse;
    }

    public async getAllTypes(): Promise<any> {
        let baseUrl = import.meta.env.VITE_BACK_URL;

        baseUrl = baseUrl + 'type/';

        let anyType = { id: '0', label: 'Any' }

        let getAlltTypesResponse = await axios.get(baseUrl);

        if (getAlltTypesResponse.status === 200) {
            let allTypes = getAlltTypesResponse.data[0];
            allTypes.unshift(anyType)
            return allTypes;
        }
        return anyType;
    }

    public async getAllGens(): Promise<any> {
        let baseUrl = import.meta.env.VITE_BACK_URL;

        baseUrl = baseUrl + 'gen/';

        let anyGen = { id: '0', label: 'Any' }

        let getAllGensResponse = await axios.get(baseUrl);

        if (getAllGensResponse.status === 200) {
            let allGens = getAllGensResponse.data[0];
            allGens.unshift(anyGen)
            return allGens;
        }
        return anyGen;
    }

    public async getPokemonPic(num: any): Promise<any> {
        let pokeApiBaseUrl = "https://pokeapi.co/api/v2/pokemon/"
        pokeApiBaseUrl = pokeApiBaseUrl + num
        let response = await axios.get(pokeApiBaseUrl)
        let pic = response.data.sprites.other["official-artwork"]["front_default"]
        return pic
    }
}