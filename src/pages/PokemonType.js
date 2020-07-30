import React from 'react'

function PokemonType({type}) {
    const normalize = type.toLowerCase();
    return (
        <span className={`pokemon-type pokemon-type-${normalize}`}>{type}</span>
    )
}

export default PokemonType
