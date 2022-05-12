import { useNavigate } from 'react-router-dom'
import {
  Card, CardMedia, CardContent, CardActions, Typography, Button
} from '@mui/material'

const PokeCard = ({ data }) => {

  const elID = data.url.split('/')[6]
  const navigate = useNavigate()

  const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/'
  + `sprites/pokemon/other/official-artwork/${elID}.png`

  return (
    <Card variant='elevation'
      sx={{
        border: '7px solid',
        borderColor: '#383242',
        borderRadius: '10px'
      }}
    >
      <CardMedia
        component='img'
        image={image}
        height='140'
        alt={data.name}
        sx={{ m: 0 }}
      />
      <CardContent>
        <Typography variant='h6' color='secondary'>
          {data.name[0].toUpperCase() + data.name.slice(1)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size='small' color='secondary'
          onClick={() => {
            navigate(`/pokemon/${elID}`)
          }}
        >
          Ver Detalle
        </Button>
      </CardActions>
    </Card>
  )
}

export default PokeCard