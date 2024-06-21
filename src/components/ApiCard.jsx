import { useState } from 'react'
import style from './Card.module.css'
import { TiltModal } from './TiltModal'

export const ApiCard = ({ name, desc, value, status, species, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className={style.api_card} onClick={openModal}>
      <div>
        <h1>{name}</h1>
      </div>
      <div className={style.info}>
        <p>{species}</p>
        <p>{value}</p>
        <p>{status}</p>
      </div>
      <img src={image} alt={name} width={150} height={"auto"} />

      <TiltModal
        isOpen={isModalOpen}
        onClose={closeModal}
        name={name}
        desc={desc}
        value={value}
        status={status}
        species={species}
        image={image}
      />
    </div>
  )
}