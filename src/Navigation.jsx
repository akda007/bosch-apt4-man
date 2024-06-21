import style from './App.module.css'

export default function Navigation() {
    return (
        <div className={style.wrapBtns}>
            <a href="/products"><button>Produtos</button></a>
            <a href="/api"><button>API</button></a>
            <a href="map"><button>Mapa</button></a>
            <a href="graphs"><button>Graphs</button></a>
        </div>
    )
}