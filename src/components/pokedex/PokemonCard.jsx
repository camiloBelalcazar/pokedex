import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '/src/components/styles/PokemonCard.css'


const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null)

  const pokeLinearGradient = {
    grass: 'bg-gradient-to-t from-[#c8e09b] to-[#80c7c5]',
    fire: 'bg-gradient-to-t from-[#e6931e] to-[#ea5f5f]',
    water: 'bg-gradient-to-t from-[#82B2F1] to-[#1479FB]',
    bug: 'bg-gradient-to-t from-[#AAFFA8] to-[#3BB039]',
    normal: 'bg-gradient-to-t from-[#7C3F4C] to-[#BC6B7C]',
    fighting: 'bg-gradient-to-t from-[#CB735D] to-[#F1613C]',
    poison: 'bg-gradient-to-t from-[#CE9BFF] to-[#A564E3]',
    ghost: 'bg-gradient-to-t from-[#787DDA] to-[#454AA8]',
    electric: 'bg-gradient-to-t from-[#7075D9] to-[#2B319B]',
    ground: 'bg-gradient-to-t from-[#D69638] to-[#895C1A]',
    psychic: 'bg-gradient-to-t from-[#F07F7F] to-[#D13E3E]',
    rock: 'bg-gradient-to-t from-[#D3D3D3] to-[#8D8D94]',
    ice: 'bg-gradient-to-t from-[#BDEBFE] to-[#64CBF5]',
    dragon: 'bg-gradient-to-t from-[#A2BEC1] to-[#56A4AE]',
    dark: 'bg-gradient-to-t from-[#5A5E5D] to-[#0D1211]',
    steel: 'bg-gradient-to-t from-[#A8A8A8] to-[#728881]',
    fairy: 'bg-gradient-to-t from-[#CD7D98] to-[#C23867]',
    flying: 'bg-gradient-to-t from-[#C1D5E0] to-[#7CAFC2]',
    
  }

  const borderColors = {
    grass: 'border-[#c8e09b]',
    fire: 'border-[#e6931e]',
    water: 'border-[#1479FB]',
    bug: 'border-[#3BB039]',
    normal: 'border-[#BC6B7C]',
    fighting: 'border-[#F1613C]',
    poison: 'border-[#A564E3]',
    ghost: 'border-[#454AA8]',
    electric: 'border-[#2B319B]',
    ground: 'border-[#895C1A]',
    psychic: 'border-[#D13E3E]',
    rock: 'border-[#8D8D94]',
    ice: 'border-[#64CBF5]',
    dragon: 'border-[#56A4AE]',
    dark: 'border-[#0D1211]',
    steel: 'border-[#728881]',
    fairy: 'border-[#C23867]',
    flying: 'border-[#7CAFC2]',
  }

  const textColor = {
    grass: 'text-[#c8e09b]',
    fire: 'text-[#e6931e]',
    water: 'text-[#1479FB]',
    bug: 'text-[#3BB039]',
    normal: 'text-[#BC6B7C]',
    fighting: 'text-[#F1613C]',
    poison: 'text-[#A564E3]',
    ghost: 'text-[#454AA8]',
    electric: 'text-[#2B319B]',
    ground: 'text-[#895C1A]',
    psychic: 'text-[#D13E3E]',
    rock: 'text-[#8D8D94]',
    ice: 'text-[#64CBF5]',
    dragon: 'text-[#56A4AE]',
    dark: 'text-[#0D1211]',
    steel: 'text-[#728881]',
    fairy: 'text-[#C23867]',
    flying: 'text-[#7CAFC2]',
  }


  const formatTypesPokemon = (types = []) => {
    const nameTypes = types.map((type) => type.type.name)
    const titleTypes = nameTypes.join(' / ')
    return titleTypes
  }


    useEffect(() => {
        axios.get(pokemonUrl)
            .then(({ data }) => setPokemon(data))
            .catch((err) => console.log(err))
    },[])

  return (
    <article className={`card w-[290px] border-[10px] rounded-lg ${borderColors[pokemon?.types[0].type.name]}`}>
      <Link to={`/pokedex/${pokemon?.name}`}>
        {/*seccion superior */}
        <section className={`relative h-40  ${pokeLinearGradient[pokemon?.types[0].type.name]}`}>
          <div className='absolute px-12 -bottom-14'>
            <img className='drop-shadow-2xl' src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
          </div>
        </section>

        {/*seccion inferior */}
        
        <section>
          <article className='grid justify-items-center'>
            <h3 className={`text-3xl font-semibold mt-14 ${textColor[pokemon?.types[0].type.name]}`}>{pokemon?.name}</h3>
            <h5>{formatTypesPokemon(pokemon?.types)}</h5>
            <span className='text-gray-400 text-sm'>Type</span>
          </article>

          <hr />

          <section className='grid grid-cols-2 justify-items-center gap-2 p-4'>
            {/*generar lista de stast */}

            {
              pokemon?.stats.slice(0, 4).map(stat => (
                <div className='text-center' key={stat.stat.url}>
                  <h6 className='text-gray-400'>{stat.stat.name}</h6>
                  <span className={`font-semibold ${textColor[pokemon?.types[0].type.name]}`} >{stat.base_stat}</span>
                </div>
              ))
            }

          </section>
        </section>
      </Link>
    </article>
    
  )
}

export default PokemonCard