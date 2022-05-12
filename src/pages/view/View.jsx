import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Button } from '@mui/material'

import Background from "../helpers/Background"
import API from '../../services/api'



// Tengo que Reparar los bonotes de paginas
  // Controlar numero de pagina
// Tengo que agregar boton de Logout
// Tengo que implementar la vista en Detalle

const View = ({ current }) => {

  const navigate = useNavigate()
  const [data, setData] = useState({})

  useEffect(() => {
    try {
      (async () => {
        const res = await API.get(`/pokemon/${current}`)
        if (res?.abilities) {
          setData(res)
          console.log(res)
        }
      })()
    }
    catch (err) {
      console.error(err)
    }
  }, [current])

  return (
    <Background image={
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${current}.png`
    }>
      <Button onClick={() => {
        navigate('/')
      }}>
        Volver a la List
      </Button>
    </Background>
  )
}

export default View