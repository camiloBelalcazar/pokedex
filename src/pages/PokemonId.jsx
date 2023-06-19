import React, { useEffect, useState } from 'react'
import Header from '../components/pokedex/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PokemonId = () => {
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

  const bgColor = {
    grass: 'bg-[#80c7c5]',
    fire: 'bg-[#e6931e]',
    water: 'bg-[#1479FB]',
    bug: 'bg-[#3BB039]',
    normal: 'bg-[#BC6B7C]',
    fighting: 'bg-[#F1613C]',
    poison: 'bg-[#A564E3]',
    ghost: 'bg-[#454AA8]',
    electric: 'bg-[#2B319B]',
    ground: 'bg-[#895C1A]',
    psychic: 'bg-[#D13E3E]',
    rock: 'bg-[#8D8D94]',
    ice: 'bg-[#64CBF5]',
    dragon: 'bg-[#56A4AE]',
    dark: 'bg-[#0D1211]',
    steel: 'bg-[#728881]',
    fairy: 'bg-[#C23867]',
    flying: 'bg-[#7CAFC2]',
  }

  const { pokemonName } = useParams()

  const percenProgresStat = (baseStat) => {
    const STAT_MAX = 255
    return `${(baseStat * 100) / 255}%`
  }

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    axios
      .get(url)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <main>
      <Header />
      <section className='grid gap-20 justify-items-center pt-28 pb-28'>
        <article
          className={`w-[290px] xxs:w-[350px] xs:w-[390px] sm:w-[550px] md:w-[650px] lg:w-[690px] border-4 rounded-lg ${
            borderColors[pokemon?.types[0].type.name]
          }`}
        >
          <section
            className={`relative h-40 ${
              pokeLinearGradient[pokemon?.types[0].type.name]
            } `}
          >
            <div className='absolute px-12 sm:px-32 md:px-40 lg:px-48 -bottom-14'>
              <img
                className='drop-shadow-2xl'
                src={pokemon?.sprites.other['official-artwork'].front_default}
                alt={pokemon?.name}
              />
            </div>
          </section>

          {/*nombre y numero */}
          <section className='px-2'>
            <article className='grid justify-items-center gap-3'>
              <h5 className='mt-14 font-semibold text-lg sm:text-xl'>
                # {pokemon?.id}
              </h5>
              <h3
                className={`text-3xl md:text-4xl font-semibold ${
                  textColor[pokemon?.types[0].type.name]
                }`}
              >
                {pokemon?.name}
              </h3>
              <div className='h-1 bg-gray-400/30 min-w-[90%]'></div>
              <div className='grid grid-cols-2 gap-4'>
                <div className='text-center'>
                  <h5 className='text-center font-semibold text-base'>
                    Weight
                  </h5>
                  <span>{pokemon?.weight}</span>
                </div>
                <div className='text-center'>
                  <h5 className='text-center font-semibold text-base'>
                    Heigth
                  </h5>
                  <span>{pokemon?.height}</span>
                </div>
              </div>
              <div className='grid sm:grid-cols-2 gap-3 sm:gap-x-14'>
                <div className='grid gap-2'>
                  <h4 className='text-center font-bold text-lg'>Type</h4>
                  <div className='flex justify-center gap-x-7'>
                    {pokemon?.types.map((type) => (
                      <span
                        className={`px-5 py-1 rounded-md ${
                          bgColor[pokemon?.types[0].type.name]
                        }`}
                        key={type.type.url}
                      >
                        {type.type.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='grid gap-2'>
                  <h5 className='text-center font-bold text-lg'>Abilities</h5>
                  <div className='flex justify-center gap-x-8'>
                    {pokemon?.abilities.map((ability) => (
                      <span
                        className='px-5 py-1 rounded-md'
                        key={ability.ability.url}
                      >
                        {ability.ability.name}
                      </span>
                    ))}

                    {/* <span>{pokemon?.abilities[0].ability.name}</span>
                    <span>{pokemon?.abilities[1].ability.name}</span> */}
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/*stats */}

          <section className='px-5 py-8'>
            <h4 className='text-2xl font-bold p-2 '>Stats</h4>

            <section>
              {pokemon?.stats.map((stat) => (
                <article key={stat.stat.url}>
                  <section className='flex justify-between'>
                    <h5>{stat.stat.name}</h5>
                    <span>{stat.base_stat}</span>
                  </section>

                  {/*barra de prgreso de stat */}

                  <div className='bg-gray-300 h-8 rounded-md overflow-hidden'>
                    <div
                      style={{ width: percenProgresStat(stat.base_stat) }}
                      className={
                        ' h-full bg-gradient-to-r from-yellow-200 to-yellow-600'
                      }
                    ></div>
                  </div>
                </article>
              ))}
            </section>
          </section>
        </article>
        {/* movimientos */}
        <section className='w-[290px] xxs:w-[350px] xs:w-[390px] sm:w-[550px] md:w-[650px] lg:w-[690px] border-4 rounded-lg'>
          <article className='p-2 flex flex-wrap gap-4'>
            <div className='min-w-[100%]'>
              <h2 className='text-2xl font-bold p-2 '>Movements</h2>
            </div>

            {pokemon?.moves.map((move) => (
              <span
                className='text-base px-2 py-1 bg-gray-400 rounded-md'
                key={move?.move.url}
              >
                {move?.move.name}
              </span>
            ))}
          </article>
        </section>
      </section>
    </main>
  )
}

export default PokemonId
