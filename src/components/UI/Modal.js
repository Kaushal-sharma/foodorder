import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
}

const ModalOverlay = (props) => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

function Modal(props) {
    const element = document.getElementById('modalOverlay')
  return (
    <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClick}/>, element)}
        {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>, element)}
    </>
  )
}

export default Modal