import React, { useEffect, useState } from 'react'
import Header from '../components/pokedex/Header'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PokemonsList from '../components/pokedex/PokemonsList'
import { set } from 'react-hook-form'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const [namePokemon, setNamePokemon] = useState("");

  const [types, setTypes] = useState([]);

  const [currenType, setCurrenType] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const nameTrainer = useSelector(store => store.nameTrainer)

  const pokemonsByName = pokemons.filter((pokemon) => pokemon.name.includes(namePokemon.toLowerCase().trim())) 

  const handleSubmit = (e) => { 
    e.preventDefault()
    setNamePokemon(e.target.namePokemon.value)
  }

  const handleChangeType = (e) => { 
    setCurrenType(e.target.value)
  }
  
  const paginationLogic = () => {
    /// CANTINDAD DE POKEMONS POR PAGINA
    const POKEMONS_PER_PAGE = 16
    

      //pokemons que se van a mostrar en la pagina actual
    const sliceStart = (currentPage - 1) * POKEMONS_PER_PAGE
    const sliceEnd = sliceStart + POKEMONS_PER_PAGE
    const pokemonInPage = pokemonsByName.slice(sliceStart, sliceEnd)

    //ultima pagina
    const lastPage = Math.ceil(pokemonsByName.length / POKEMONS_PER_PAGE) || 1

    // bloque actual

    const PAGES_PER_BLOCK = 5
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)

    //paginas que se van a mostrar en el bloque actual

    const pagesInBlock = []
    const minPage = (actualBlock - 1) * PAGES_PER_BLOCK + 1
    const maxPage = actualBlock * PAGES_PER_BLOCK
    for (let i = minPage; i <= maxPage; i++) {
      if (i <= lastPage) {
      pagesInBlock.push(i)
      }
    }
    return {pokemonInPage, lastPage, pagesInBlock}
  }

  const { lastPage, pagesInBlock, pokemonInPage } = paginationLogic()

  const handleClickPreviusPage = () => {
    const newCurrentPage = currentPage - 1
    if (newCurrentPage >= 1) {
      setCurrentPage(newCurrentPage)
    }

  }

  const handleClickNextPage = () => {
    const newCurrentPage = currentPage + 1
    if (newCurrentPage <= lastPage) {
      setCurrentPage(newCurrentPage)
    }
  }

  useEffect(() => {
    if (!currenType) {
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1281'

      axios.get(URL)
        .then(({ data }) => setPokemons(data.results))
        .catch((err) => console.log(err))
    }

  }, [currenType])

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    

    axios.get(URL)
      .then(({ data }) => setTypes(data.results))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => { 
    if (currenType) {      
      const url = `https://pokeapi.co/api/v2/type/${currenType}/`

      axios.get(url)
        .then(({ data }) => {
          const PokemonsByType = data.pokemon.map(pokemon => pokemon.pokemon)
          setPokemons(PokemonsByType)
        })
        .catch((err) => console.log(err))
    }

  }, [currenType])

  useEffect(() => {
    setCurrentPage(1)
  },[namePokemon, currenType])

  return (
    <section className='min-h-screen'>
      <Header />
      <section className='flex flex-wrap gap-5 py-6 gap-x-6  justify-center pb-16'>
        <div className='min-w-[100%] grid p-6 justify-center sm:-translate-x-16 lg:-translate-x-52 xl:-translate-x-[22rem]'>
          <p className='md:text-lg'><span className='text-primary font-bold'>Wellcome {nameTrainer}, </span> here you can find your favorite pokemon </p>
        </div>
        <form onSubmit={handleSubmit} className='shadow-xl'>
            <div className='flex'>
            <input className='border h-10 sm:h-14 w-[220px] lg:w-[400px] xl:w-[550px] pl-3' id='namePokemon' placeholder='Look for a pokemon...' type="text" />
            <button className='bg-red-500 px-4 sm:px-10 text-white hover:bg-primary'>search</button>
            </div>
        </form>
        <div >
          <select className='border h-10 sm:h-14 w-[300px] lg:w-[350px] xl:w-[500px] shadow-lg' onChange={handleChangeType}>
            <option value="">All pokemon</option>
            {
              types.map((type) => <option value={type.name} key={type.url}>{type.name}</option>)
            }
          </select>
        </div>
        
        
      </section>
      
      

      <PokemonsList pokemons={pokemonInPage} />

      <ul className='flex gap-3 justify-center py-10 px-2 flex-wrap '>
        {/*pagina anterior */}
        <li onClick={() => setCurrentPage(1)} className='p-3 bg-red-600 text-white rounded-md cursor-pointer'><i class='bx bx-rewind text-2xl'></i></li>

        <li onClick={handleClickPreviusPage} className='p-3 bg-red-600 text-white rounded-md cursor-pointer'><i className='bx bx-skip-previous text-2xl'></i></li>
        {
          pagesInBlock.map(numberPage => <li onClick={() => setCurrentPage(numberPage)} className={`p-3 bg-red-600 text-white rounded-md cursor-pointer ${numberPage === currentPage && 'bg-red-400'}`} key={numberPage}>{numberPage}</li>)
        }

        {/*pagina siguiente */ }
        <li onClick={handleClickNextPage} className='p-3 bg-red-600 text-white rounded-md cursor-pointer'><i class='bx bx-skip-next text-2xl' ></i></li>
        {/*ultima pagina */}
        <li onClick={() => setCurrentPage(lastPage)} className='p-3 bg-red-600 text-white rounded-md cursor-pointer'><i class='bx bx-fast-forward text-2xl'></i></li>
      </ul>

      
    </section>
  )
}

export default Pokedex