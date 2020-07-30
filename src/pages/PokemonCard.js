import React from 'react'
import PokemonType from './PokemonType';

function PokemonCard({image, name, id, type}) {
    return (
        <div class="card">
            <div class="container">
                <img className="pokeImage" src={image} alt={name}/>
                <p className="pokemon-number">#{id >= 10 ? `0${id}` : `00${id}`}</p>
                <p className="pokemon-name">{name}</p>
                {type.map(t => (
                    <PokemonType key={`pokemon:${name}:${t}`} type={t} />
                ))}
            </div>
        </div>
    )
}

export default PokemonCard


// - How did you decide on the technical and architectural choices used as part of your solution?
// I will study first and go thruogh the system and will identify which part needs to be revised and improve. By then, I will decide as to how I will design the intire project that will be user friendly and will imediatly cought the attention of the user. To top it all I will make remedies that will blend in with it's architectural choices as well as the technical chouncis.
// - Are there any improvements you could make to your submission?
// Yes, to make it more lively and colorful eyecathing, I need to do moore improvements and design. 
// - What would you do differently if you were allocated more time?
//  I will add database so that the user can add pokemons, update and to make it easy to search by anyone for those who are in to it. 
