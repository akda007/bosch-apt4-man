import style from './Card.module.css'

export const ApiCard = ({name, desc, value, status, species, image}) => {
  return(
      <div className={style.api_card}>
          <div>
            <h1>{name}</h1>
          </div>
          <div className={style.info}>
            <p>{species}</p>
            <p>{value}</p>
            <p>{status}</p>
          </div>
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}