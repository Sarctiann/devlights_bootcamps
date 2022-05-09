import LoginBG from './LoginBG'
import { Grid, Paper, Typography, TextField, Button } from '@mui/material'

const Login = (props) => {

  return (
    <LoginBG>
      <Grid container justifyContent='center' p={10}>
        <Grid item xs={12} md={6}>
          <Paper elevation={5}>
            <Grid container spacing={2} p={2}>

              <Grid item xs={12} align='center'>
                <Typography variant='caption' color='text.disabled'>
                  Ingrese sus credenciales para acceder al sitio
                </Typography>
              </Grid>

              <Grid item xs={12} align='center'>
                <TextField size='small' fullWidth label='Nombre de Usuario' />
              </Grid>

              <Grid item xs={12} align='center'>
                <TextField size='small' fullWidth label='Contraseña' />
              </Grid>

              <Grid item xs={6} align='center'>
                <Button variant='contained' color='success' fullWidth>
                  Ingresar
                </Button>
              </Grid>

              <Grid item xs={6} align='center'>
                <Button variant='contained' fullWidth>
                  Volver al Inicio
                </Button>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </LoginBG>
  )
}

export default Login;