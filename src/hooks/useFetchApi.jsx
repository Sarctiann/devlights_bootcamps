import { useMemo, useState } from 'react'
import API from '../services/api'

const useFetchApi = () => {

  const [list, setList] = useState({})
  const [q, setQ] = useState({
    endpoint: 'pokemon',
    page: 1,
    limit: 28
  })

  useMemo(() => {
    try {
      (async () => {
        const res = await API.get(
          `${q.endpoint}?offset=${(q.page - 1) * q.limit}&limit=${q.limit}`
        )
        if (res?.results) {
          setList({
            results: res.results,
            disable_next: !Boolean(res.next),
            disable_prev: !Boolean(res.previous)
          })
        }
      })()
    }
    catch (err) {
      console.error(err)
    }
  }, [q])

  return { list, q, setQ }
}

export default useFetchApi