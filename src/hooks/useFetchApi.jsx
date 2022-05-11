import { useMemo, useState } from 'react'
import API from '../services/api'

const useFetchApi = () => {

  const [list, setList] = useState({})
  const [q, setQ] = useState({
    endpoint: 'pokemon',
    page: 0,
    limit: 10
  })

  useMemo(() => {
    try {
      (async () => {
        const res = await API.get(
          `${q.endpoint}?offset=${q.page * q.limit}&limit=${q.limit}`
        )
        if (res?.results) {
          setList({
            result: res.results,
            next: Boolean(res.next),
            prev: Boolean(res.previous)
          })
        }
      })()
    }
    catch (err) {
      console.error(err)
    }
  }, [q])

  return { list, setQ }
}

export default useFetchApi