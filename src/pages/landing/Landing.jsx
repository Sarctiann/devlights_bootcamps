import { Grid, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import Background from '../helpers/Background'
import image from '../assets/landing_bg.png'

const Landing = () => {

  const navigate = useNavigate()

  return (
    <Background image={image}>
      <Grid container margin={0} p={10}>
        <Grid item xs={12} align='center'>
          <Typography variant='h3' color='white'>
            Bienvenido a Poké(in)dex
          </Typography>
        </Grid>
        <Grid item xs={12} align='center'>
          <Typography variant='body1' color='secondary'>
            Por favor ingrese con su email para continuar
          </Typography>
          <Button variant='contained' color='secondary'
            onClick={() => {navigate('/login')}}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Background>
  )
}

export default Landing