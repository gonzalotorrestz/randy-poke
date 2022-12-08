
export default function PokemonTypeStyle(type: string) {
    let bgTypeColor = 'white'
    let fontTypeColor = 'text-stone-900'

    let bgGradFrom = "from-stone-50"
    let bgGradTo = "to-stone-50"

    if (typeof (type) === 'string')

        switch (type.toLowerCase()) {
            case 'bug':
                bgTypeColor = 'bg-green-300'
                bgGradFrom = 'from-green-300'
                bgGradTo = 'to-green-300'
                break;
            case 'dark':
                bgTypeColor = 'bg-stone-900'
                bgGradFrom = 'from-stone-900'
                bgGradTo = 'to-stone-900'
                fontTypeColor = 'text-stone-100'
                break;
            case 'dragon':
                bgTypeColor = 'bg-blue-800'
                bgGradFrom = 'from-blue-800'
                bgGradTo = 'to-blue-800'
                break;
            case 'electric':
                bgTypeColor = 'bg-yellow-400'
                bgGradFrom = 'from-yellow-400'
                bgGradTo = 'to-yellow-400'
                break;
            case 'fairy':
                bgTypeColor = 'bg-pink-200'
                bgGradFrom = 'from-pink-200'
                bgGradTo = 'to-pink-200'
                break;
            case 'fighting':
                bgTypeColor = 'bg-orange-800'
                bgGradFrom = 'from-orange-800'
                bgGradTo = 'to-orange-800'
                break;
            case 'fire':
                bgTypeColor = 'bg-red-500'
                bgGradFrom = 'from-red-500'
                bgGradTo = 'to-red-500'
                break;
            case 'flying':
                bgTypeColor = 'bg-blue-200'
                bgGradFrom = 'from-blue-200'
                bgGradTo = 'to-blue-200'
                break;
            case 'ghost':
                bgTypeColor = 'bg-pink-800'
                bgGradFrom = 'from-pink-800'
                bgGradTo = 'to-pink-800'
                break;
            case 'grass':
                bgTypeColor = 'bg-green-600'
                bgGradFrom = 'from-green-600'
                bgGradTo = 'to-green-600'
                break;
            case 'ground':
                bgTypeColor = 'bg-orange-500'
                bgGradFrom = 'from-orange-500'
                bgGradTo = 'to-orange-500'
                break;
            case 'ice':
                bgTypeColor = 'bg-blue-200'
                bgGradFrom = 'from-blue-200'
                bgGradTo = 'to-blue-200'
                break;
            case 'normal':
                bgTypeColor = 'bg-stone-200'
                bgGradFrom = 'from-stone-200'
                bgGradTo = 'to-stone-200'
                break;
            case 'poison':
                bgTypeColor = 'bg-purple-600'
                bgGradFrom = 'from-purple-600'
                bgGradTo = 'to-purple-600'
                break;
            case 'psychic':
                bgTypeColor = 'bg-pink-600'
                bgGradFrom = 'from-pink-600'
                bgGradTo = 'to-pink-600'
                break;
            case 'rock':
                bgTypeColor = 'bg-orange-900'
                bgGradFrom = 'from-orange-900'
                bgGradTo = 'to-orange-900'
                break;
            case 'steel':
                bgTypeColor = 'bg-stone-400'
                bgGradFrom = 'from-stone-400'
                bgGradTo = 'to-stone-400'
                break;
            case 'water':
                bgTypeColor = 'bg-blue-300'
                bgGradFrom = 'from-blue-300'
                bgGradTo = 'to-blue-300'
                break;
        }

    let pokemonTypeStyle = {
        bgTypeColor: bgTypeColor,
        fontTypeColor: fontTypeColor,
        bgGradFrom: bgGradFrom,
        bgGradTo: bgGradTo
    }
    return pokemonTypeStyle;
}