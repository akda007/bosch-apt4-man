import React from "react";
import { Tilt } from "@jdion/tilt-react";
import Modal from 'react-modal'
import style from './TiltModal.module.css'


const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '300px', // Adjust width as needed
      maxHeight: '80vh', // Adjust height as needed
      overflow: 'auto', // Enable scrolling if content overflows
      padding: '30px', // Adjust padding as needed
      borderRadius: '8px', // Rounded corners
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for depth
      border: 'none', // No border,
      backgroundColor: 'transparent'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    }
  };

  const customStyle = {
      backgroundColor: 'grey', // Semi-transparent overlay
      padding: "20px",
      borderRadius: '20px'
  };

export const TiltModal = ({ isOpen, onClose, name, desc, value, status, species, image }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={customModalStyles} >
            <Tilt options={{ max: 25 }} >
                <div style={customStyle}>
                    <h1>{name}</h1>
                    <p>{species}</p>
                    <p>{value}</p>
                    <p>{status}</p>
                    <img src={image} alt={name} width={120} height={"auto"} />
                    <button onClick={onClose}>Close</button>
                </div>
            </Tilt>
        </Modal>
    )
}