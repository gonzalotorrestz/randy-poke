import React, { useState, useEffect } from 'react'
import { AppService } from '../services/app.services';
import { pokemonType, genType } from '../utils/types';
import FormFilter from './FormFilter';
import Pokemon from './Pokemon';

export default function Form() {
    const randy = { name: 'Randy', type1: 'Psychic', type2: '', gen: "??" }
    const [pokemon, setPokemon] = useState(randy);

    let initTypes: pokemonType[] = [{ id: "0", label: 'Any' }];
    let initGens: genType[] = [{ id: "0", label: 'Any' }];

    const [type1Options, setType1Options] = useState(initTypes);
    const [type2Options, setType2Options] = useState(initTypes);

    const [genOptions, setGenOptions] = useState(initGens);

    const [type1, setType1] = useState("");
    const [type2, setType2] = useState("");
    const [gen, setGen] = useState("");
    const [mega, setMega] = useState("");

    const appService = new AppService();

    const megaOptions = [
        { id: "0", label: 'Any', value: '' },
        { id: "1", label: 'True', value: true },
        { id: "2", label: 'False', value: false },
    ]

    useEffect(() => {
        appService.getAllTypes()
            .then((response: pokemonType[]) => {
                setType1Options(response)
                setType2Options(response)
            })
        appService.getAllGens()
            .then((response: genType[]) =>
                setGenOptions(response))
    }, [])

    const getRandomPokemon = async (e: any) => {
        e.preventDefault()
        let queryParams = {
            type1: type1,
            type2: type2,
            gen: gen,
            mega: mega
        };
        const response = await appService.getPokemon(queryParams);
        setPokemon(response);
    }

    const handleType1 = (value: string) => {
        let selectedType1: pokemonType = type1Options[parseInt(value)] as pokemonType
        setType1(selectedType1.label)
    }
    const handleType2 = (value: any) => {
        let selectedType2: pokemonType = type2Options[parseInt(value)] as pokemonType
        setType2(selectedType2.label)
    }
    const handleGen = (value: any) => {
        setGen(value)
    }
    const handleMega = (value: any) => {
        setMega(value)
    }
    const resetForm = () => {
        handleType1('0')
        handleType2('0')
        handleGen(0)
        handleMega(false);
        setPokemon(randy)
    }

    if (type1Options.length < 2 || type2Options.length < 2 || genOptions === "") {
        return <div className='flex flex-col justify-center items-center'>Loading...</div>;
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <form onSubmit={getRandomPokemon} method="get" className='w-full max-w-lg'>
                <div className="flex mb-2 justify-center gap-2">
                    <button
                        type="submit"
                        value="Hit me!"
                        className='block uppercase tracking-wide w-1/2 bg-pink-100 hover:bg-pink-300 hover:text-pink-100 border border-pink-800 text-pink-900 rounded leading-tight py-2 px-4 cursor-pointer focus:bg-white focus:outline-none focus:shadow-outline" type="button'>
                        Hit me
                    </button>
                    <input
                        type="reset"
                        value="Reset"
                        onClick={resetForm}
                        className='w-1/2 block uppercase bg-purple-300 rounded border leading-tight cursor-pointer py-2 px-4'
                    />
                </div>
                <div className="flex flex-wrap mb-2 items-center justify-center">
                    <FormFilter
                        id={"type1"}
                        label={"Type 1"}
                        dropdownData={type1Options}
                        onChange={handleType1}
                    />
                    <FormFilter
                        id={"type2"}
                        label={"Type 2"}
                        dropdownData={type2Options}
                        onChange={handleType2}
                    />
                    <FormFilter
                        id={"gen"}
                        label={"Generation"}
                        dropdownData={genOptions}
                        onChange={handleGen}
                    />
                    <FormFilter
                        id={"mega"}
                        label={"Mega/Primal"}
                        dropdownData={megaOptions}
                        onChange={handleMega}
                    />
                </div>
            </form>

            <Pokemon pokemon={pokemon} />

        </div>
    )
}
