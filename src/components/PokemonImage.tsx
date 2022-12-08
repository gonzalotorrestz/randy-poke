import React, { Component } from 'react'
import PokemonTypeStyle from '../utils/pokemonTypeStyle'
import Type from './Type'

export default class PokemonImage extends Component<any, any> {
    render() {
        return (
            <div className={`${this.props.className} flex border-2 border-stone-900 rounded-md overflow-hidden bg-gradient-to-br ${PokemonTypeStyle(this.props.type1).bgGradFrom} ${PokemonTypeStyle(this.props.type2).bgGradTo}`}>
                <img
                    src={this.props.imgUrl ?? "assets/randy.jpg"}
                    alt={`${this.props.name} Picture"`} />
            </div>
        )
    }
}

