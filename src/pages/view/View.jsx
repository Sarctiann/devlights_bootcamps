import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Container, Grid, Button, Typography, Chip, Paper,
  Card, CardMedia, CardContent, CardActions, CardHeader
} from '@mui/material'

import Background from "../helpers/Background"
import API from '../../services/api'


// Tengo que agregar boton de Logout
// Tengo que implementar la vista en Detalle


const View = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    try {
      (async () => {
        const res = await API.get(`/pokemon/${id}`)
        if (res?.abilities) {
          setData(res)
        }
      })()
    }
    catch (err) {
      console.error(err)
    }
  }, [id])

  const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/'
    + `sprites/pokemon/other/official-artwork/${id}.png`

  return (
    <Background image={image}>
      <Container maxWidth='md'>
        <Grid container p={2}>

          {data.abilities &&
            <Grid item xs='auto'>
              <Card variant='elevation'
                sx={{
                  border: '7px solid',
                  borderColor: '#383242',
                  borderRadius: '10px'
                }}
              >
                <CardHeader
                  avatar={<Chip color='warning' label={
                    <Typography variant='h6'>
                      {data.id}
                    </Typography>
                  } />}
                  title={
                    <Typography variant='h5' color='secondary'>
                      {data.name[0].toUpperCase() + data.name.slice(1)}
                    </Typography>
                  }
                />
                <CardMedia
                  component='img'
                  image={image}
                  height='300'
                  alt={data.name}
                  sx={{ m: 0 }}
                />
                <CardContent>
                  <Typography variant='h6' 
                    sx={{
                      margin: 1
                    }}
                  >
                    Types: {data.types.map((el) => {
                      return <Chip key={el.type.name} label={
                        <Typography variant='button'>
                          {el.type.name}
                        </Typography>
                      } />
                    })}
                  </Typography>
                    <Paper
                      sx={{
                        width: 250,
                        backgroundColor: 'warning.light'
                      }}
                    >
                      {data.stats.map((el) => {
                        return (
                          <Chip key={el.stat.name} p={1} color='info' 
                            sx={{
                              margin: 1
                            }}
                            label={
                              <Typography variant='caption'>
                                {el.stat.name}: {el.base_stat}
                              </Typography>
                            } 
                          />
                        )
                      })}
                    </Paper>
                </CardContent>
                <CardActions>
                  <Button variant='contained' size='small' color='secondary'
                    onClick={() => {
                      navigate('/')
                    }}
                  >
                    Volver a la Lista
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          }

        </Grid>
      </Container>
    </Background>
  )
}

export default View