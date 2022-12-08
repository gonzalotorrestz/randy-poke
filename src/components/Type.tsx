import React from 'react'
import PokemonTypeStyle from '../utils/pokemonTypeStyle'

export default function Type({ type }: { type: string }) {
    if (type === '') {
        return (
            <div></div>
        )
    }
    return (
        <div className={`flex px-3 rounded-xl shadow-md ${PokemonTypeStyle(type).bgTypeColor}`} >
            <p
                className={`${PokemonTypeStyle(type).fontTypeColor} font-semibold p-0.5`}
            >
                {type}
            </p>
            <span className='flex w-4 ml-2 '>
                <img
                    src={`/assets/type_icons/${type.toLowerCase()}.svg`}
                    alt="Type Icon"
                />
            </span>
        </div >
    )

}
