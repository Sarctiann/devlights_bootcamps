import ForecastDay from "./ForecastDay"

const ForecastFiveDays = ({ data }) => {

  const days = 5
  const samples_per_day = 8
  const splited_data = []

  // seguramente hay una forma mas elegante de hacer esto jaja
  // pero estoy nublado de sueño
  for (let i = 0; i < days; i++) {
    splited_data.push([])
    for (let j = 0; j < samples_per_day; j++) {
      splited_data[i].push(data?.list[i * samples_per_day + j])
    }
  }

  return (
    <div className='box'>
      <h2>Forecast</h2>
      {splited_data.map((day, i) => {
        return <ForecastDay key={i} data={day} />
      })}
    </div>
  )
}

export default ForecastFiveDays