/* eslint-disable react/prop-types */
import style from './Card.module.css'

export const Card = ({className, name, desc, value, image, status, category}) => {
  return(
      <div className={className}>
          <div>
            <h1>{name}</h1>
            <h2>{desc}</h2>
            <h3>{category}</h3>
            <div className={style.info}>
              <p>{value}</p>
              <div className={status == true ? style.status_green : style.status_red}></div>
            </div>
          </div>

          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}