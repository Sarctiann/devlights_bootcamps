import { useMemo } from 'react'
import { useLocation } from 'react-router'
import { useQuery } from 'react-query'

import API from '../../services/api'
import city_ids from '../../helpers/city_ids'
import CurrentWeather from './components/CurrentWeather'
import ForecastFiveDays from './components/ForecastFiveDays'

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
      <CurrentWeather data={weather.data} />
      <ForecastFiveDays data={forecast.data} />
    </div>
  )
}

export default City
