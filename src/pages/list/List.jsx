import { Grid, Stack, Button, TextField } from '@mui/material'

import Background from "../helpers/Background"
import image from '../assets/list_bg.jpg'
import PokeCard from './PokeCard'

const List = ({ dataObject }) => {

  return (
    <Background image={image}>
      <Grid container>
        <Grid item p={2}>
          <Button
            disabled={dataObject.list.disable_prev}
            variant='outlined'
            onClick={() => {
              dataObject.setCurrent({ test: 1 })
            }}
            sx={{ height: '100%' }}
          >
            Anterior
          </Button>

          <TextField
            size='small' type='number' variant='outlined' label='Pagina'
            focused
            inputProps={{
              min: 1,
              max: Math.ceil(1126 / dataObject.q.limit),
              style: {
                color: 'orangered'
              }
            }}
            onChange={(e) => {
              dataObject.setQ({ ...dataObject.q, page: e.target.value - 1 })
            }}
          />

          <Button
            disabled={dataObject.list.disable_next}
            variant='outlined'
            onClick={() => {
              dataObject.setCurrent({ test: 1 })
            }}
            sx={{ height: '100%' }}
          >
            Siguiente
          </Button>
        </Grid>
      </Grid>
      <Stack
        sx={{ height: '88vh', overflow: 'auto' }}
      >
        <Grid container justifyContent='center' p={{ xs: 1, md: 5 }}>
          {dataObject?.list?.results?.map(el => {
            return (
              <Grid item p={1} key={el.name} >
                <PokeCard data={el} setCurrent={dataObject.setCurrent} />
              </Grid>
            )
          })}
        </Grid>
      </Stack>

    </Background>
  )
}

export default List
