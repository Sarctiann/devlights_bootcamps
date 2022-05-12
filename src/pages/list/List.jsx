import { Grid, Stack, Button, TextField } from '@mui/material'

import useFetchApi from '../../hooks/useFetchApi'

import Background from "../helpers/Background"
import image from '../assets/list_bg.jpg'
import PokeCard from './PokeCard'

const List = () => {

  const dataObject = useFetchApi()
  
  const setQPage = (p) => {
    dataObject.setQ({ ...dataObject.q, page: p })
  }

  const handleChangePage = (offset) => {

    setQPage(dataObject.q.page + offset)
  }

  return (
    <Background image={image}>
      <Grid container>
        <Grid item p={1}>
          <Button
            disabled={dataObject.list.disable_prev}
            variant='outlined'
            onClick={() => {
              handleChangePage(-1)
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
            value={dataObject.q.page}
            onChange={(e) => {
              setQPage(parseInt(e.target.value))
            }}
          />

          <Button
            disabled={dataObject.list.disable_next}
            variant='outlined'
            onClick={() => {
              handleChangePage(1)
            }}
            sx={{ height: '100%' }}
          >
            Siguiente
          </Button>
        </Grid>
      </Grid>
      <Stack
        sx={{ height: '83vh', overflow: 'auto' }}
      >
        <Grid container justifyContent='center'>
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
