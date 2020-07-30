import React from 'react'
import PokemonCard from './PokemonCard'

function Pokemon({ image: { url }, name, number: id, types }) {
    return (
        <div class="column">
            <div class="card">
            <PokemonCard image={url} name={name} id={id} type={types}/>
            </div>
        </div>


    )
}

export default Pokemon
