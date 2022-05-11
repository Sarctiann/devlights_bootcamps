import { Grid, Typography, Fade } from '@mui/material'

import Background from '../helpers/Background'
import image from '../assets/not_found_bg.png'

const NotFound = () => {
  return (
    <Background image={image}>
      <Grid container justifyContent='center' p={10}>
        <Fade in={true} timeout={3000}>
          <Grid item>
            <Typography variant='h2' color='warning.light'>
              Ups... No encontramos la Pagina
            </Typography>
          </Grid>
        </Fade>
        <Fade in={true} timeout={1000}>
          <Grid item>
            <Typography variant='h1' color='error'>
              Error 404
            </Typography>
          </Grid>
        </Fade>
      </Grid>
    </Background>
  )
}

export default NotFound