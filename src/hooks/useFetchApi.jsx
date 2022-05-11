import { useState } from 'react'

// Voy a hacer algo copado acá
const useFetchApi = () => {

  const [ pokemonList, setPokemonList ] = useState([])

  return { pokemonList, setPokemonList }
}

export default useFetchApi