import ReactDOM from 'react-dom'
import ModalElement from './ModalElement'

const modalContainer = document.getElementById('modal-root')

const Modal = ({ children }) => {
  return modalContainer
    ? ReactDOM.createPortal(<ModalElement>{children}</ModalElement>, modalContainer)
    : null
}

export default Modal
