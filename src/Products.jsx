import produtos from './constants/produtos.json'
import style from './App.module.css'
import { Card } from './components/Card';
import Navigation from './Navigation';

export default function Products() {
    return (
        <>
            <Navigation/>

            <div>
            <h2>Showroom de produtos</h2>
            <div className={style.productList}>
                {produtos.map((item) => {
                    return (
                        <Card category={item.categoria} status={item.status} className={style.card} me={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} />
                    )
                })}
            </div>
                
            </div>
        </>
    );
}