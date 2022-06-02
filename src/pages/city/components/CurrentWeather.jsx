const CurrentWeather = ({ data }) => {

  const temp_offset = 273.15
  const now = new Date().getHours()
  const time = 6 < now && now < 19 ? 'morning' : 'night'

  const icon = `http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`
  const destcrip = data?.weather[0].description
  const temp_max = (data?.main.temp_max - temp_offset).toFixed(1)
  const temp_min = (data?.main.temp_min - temp_offset).toFixed(1)
  const humidity = data?.main.humidity

  return (
    <div className={`box ${time}`}>
      <h2>Current Weather</h2>
      <div className='weather-box'>
        <img src={icon} alt='clima-icon' />
        <div>
          <h4>Description: <span>{destcrip}</span></h4>
          <h4>Max: <span>{temp_max}</span></h4>
          <h4>Min: <span>{temp_min}</span></h4>
          <h4>Humidity: <span>{humidity}</span></h4>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather