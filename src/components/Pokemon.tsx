import React from 'react'
import PokemonImage from './PokemonImage'
import Type from './Type'

export default function Pokemon({ pokemon }: { pokemon: any }) {
    return (
        <div className='flex md:flex-col md:flex-wrap md:w-3/4 xl:w-3/5 md:items-center '>
            <PokemonImage
                name={pokemon.name}
                type1={pokemon.type1}
                type2={pokemon.type2}
                imgUrl={pokemon.imgUrl}
                className={`w-1/2 md:w-2/3 xl:w-1/3`}
            />
            <div className='w-1/2 md:w-full md:justify-center items-center flex flex-col'>
                <div className='p-4'>
                    <h3 className='text-xl md:text-4xl mb-2 md:mb-3 font-semibold text-center'>{pokemon.name ?? 'error'}</h3>
                    <p className='text-xs text-center -mt-2.5'>(Generation {pokemon.gen})</p>
                </div>
                <div className='flex flex-col md:flex-row mx-1 gap-1'>
                    <Type type={pokemon.type1 ?? 'Psychic'} />
                    <Type type={pokemon.type2 ?? ''} />
                </div>
            </div>
        </div>
    )
}