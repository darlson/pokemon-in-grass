import React from 'react'
import Pokemon from './Pokemon'

// export default function(props){}
// export default props => {}

function Pokedex (props) {
    const pokemonMap = props.caughtPokemon.map((pokemon) => (
        <Pokemon 
            key={pokemon.id} 
            saveName={props.saveName} 
            releasePokemon={props.releasePokemon} 
            data={pokemon} 
        />
    ))
    return (
        <div>
            <h2>Pokedex.js</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {pokemonMap}
            </div>
        </div>
    )
}
export default Pokedex