import { useState, useEffect } from 'react'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { ApiCard } from './components/ApiCard'
import Navigation from './Navigation'

export default function Api() {
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [name, setName] = useState("")
  
  
    useEffect(() => {
      api.get(`/character/?page=${page}`).then((response) => {
        if (!response.data.results) {
          console.log("Vazio")
        }
        setData(response.data.results)
      }).catch((error) => {
        if (error.response.status === 404) {
          console.log("Esta pagina nao contem este personagem")
        }
        console.error(error)
      })
    }, [page])
  
    useEffect(() => {
      api.get(`/character/?name=${name}`).then((response) => {
        if (!response.data.results) {
          console.log("Vazio")
        }
  
        setData(response.data.results)
      }).catch((error) => {
        if (error.response.status === 404) {
          console.log("Esta pagina nao contem este personagem")
        }
        console.error(error)
      })
    }, [name])

    return (
        <>
            <Navigation/>
            <div>
            <h2>Rick and Morty API</h2>
            <div className={style.search_bar}>
              <input type="number" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)} />
              <input type="text" placeholder="Search by name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className={style.productList}>
              {data.map((item) => {
                return (
                  <div key={item.id}>
                    <ApiCard name={item.name} species={item.species} value={item.gender} status={item.status} image={item.image} />
                  </div>
                )
              })}
            </div>
            </div>
          </>
    )
}