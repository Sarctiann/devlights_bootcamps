import { useMemo } from 'react'
import { useLocation } from 'react-router'
import { useQuery } from 'react-query'

import API from '../../services/api'
import city_ids from '../../helpers/city_ids'

const City = () => {

  const location = useLocation()

  const initialID = useMemo(() => {
    return city_ids.filter(
      city => city.name === location.pathname.replace('/', '')
    )[0].id
  }, [location])

  const weather = useQuery(
    ['weather', location], () => API.get_weather(initialID)
  )
  const forecast = useQuery(
    ['forecast', location], () => API.get_forecast(initialID)
  )

  return (
    <div>
      <h3>Current City</h3>
      <p>{JSON.stringify(weather.data)}</p>
      <p>{JSON.stringify(forecast.data)}</p>
    </div>
  )
}

export default City

// Notas: necesito representar los datos. está bien que no se toma en cuenta
//  el diseño gráfico. Pero no se referian a esto jajaja

// Para la temperatura tengo que restar 273.15 grados

// Voy a intentar utilizar scss modules
