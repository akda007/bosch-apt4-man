import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { ApiCard } from './components/ApiCard'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import {MapDisplay} from './components/Map'
// import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function App() {
  const [show, setShow] = useState("")
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
      <div className={style.wrapBtns}>
        <button onClick={() => setShow("prod")}>Produtos</button>
        <button onClick={() => setShow("api")}>API</button>
        <button onClick={() => setShow("map")}>Mapa</button>
      </div>
      <div className={style.wrapPage}>
        <h1>Exercícios de manutenção</h1>
        {show === "prod" &&
          <>
            <h2>Showroom de produtos</h2>
            <div className={style.productList}>
              {produtos.map((item) => {
                return (
                  <Card category={item.categoria} status={item.status} className={style.card} me={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} />
                )
              })}
            </div>
          </>
        }
        {show === "api" &&
          <>
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
                    {/* <button onClick={() => {}}>Info</button> */}
                  </div>
                )
              })}
            </div>
          </>
        }
        {show === "map" &&
          <>
            <h2>Mapa</h2>
            <div className={style.mapContainer}>
              <MapDisplay></MapDisplay>

            </div>
          </>
        }
      </div>
    </>
  )
}

export default App
