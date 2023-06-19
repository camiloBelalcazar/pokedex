import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonsList = ({ pokemons }) => {

  return (
    <section className='grid justify-center sm:grid-cols-[repeat(2,_18rem)] sm:gap-x-4 gap-y-10 lg:grid-cols-[repeat(3,_18rem)] xl:grid-cols-[repeat(4,_18rem)]'/* 'flex flex-wrap justify-center gap-y-12 gap-x-3 justify-items-center p-2' */>
          {
              pokemons.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} /> )
          }
          
    </section>
  )
}

export default PokemonsList