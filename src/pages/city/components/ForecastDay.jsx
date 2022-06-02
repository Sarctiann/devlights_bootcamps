const ForecastDay = ({ data }) => {

  const temp_offset = 273.15

  return (
    <div className='box'>
      <h2>{data[0]?.dt_txt.slice(0, 10)}</h2>
      <div className='weather-box'>
        <div>
          <h4>Hora:</h4>
          <h4>Description:</h4>
          <h4>Max:</h4>
          <h4>Min:</h4>
          <h4>Humidity:</h4>
        </div>
        {data.map(hora => {

          const now = parseInt(hora?.dt_txt.slice(11, 13))
          const time = 6 < now && now < 19 ? 'morning' : 'night'

          const icon = `http://openweathermap.org/img/wn/${hora?.weather[0].icon}.png`
          const destcrip = hora?.weather[0].description
          const temp_min = (hora?.main.temp_min - temp_offset).toFixed(1)
          const temp_max = (hora?.main.temp_max - temp_offset).toFixed(1)
          const humidity = hora?.main.humidity

          return (
            <div className={`little-box ${time}`}>
              <div className='img-abs'>
                <img src={icon} alt='clima-icon' />
              </div>
              <p><span>{hora?.dt_txt.slice(11, 16)}</span></p>
              <p><span>{destcrip}</span></p>
              <p><span>{temp_max}</span></p>
              <p><span>{temp_min}</span></p>
              <p><span>{humidity}</span></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ForecastDay