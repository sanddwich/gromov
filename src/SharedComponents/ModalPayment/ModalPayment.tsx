import React from 'react'
import { Container } from 'react-bootstrap'
import { RootState } from '../../Redux'
import PayBlock from '../PayBlock/PayBlock'
import { setShowPaymentModal } from '../../Redux/actions/modal'
import './ModalPayment.scss'
import { ModalState } from '../../Redux/interfaces/interfaces'
import { connect } from 'react-redux'

interface ModalPaymentProps {
  setShowPaymentModal: (isActive: boolean) => void
  modal: ModalState
}

interface ModalPaymentState {}

class ModalPayment extends React.Component<ModalPaymentProps, ModalPaymentState> {
  closeModal = (): void => {
    this.bodyUnBlock()
    this.props.setShowPaymentModal(false)
  }

  bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  render() {
    this.props.modal.modalPayment.isActive ? this.bodyBlock() : this.bodyUnBlock()
    return (
      <Container fluid className="ModalPayment p-0 d-flex align-items-center justify-content-center">
        <div className="ModalPayment__modal">
          <div className="ModalPayment__closeCont d-flex justify-content-end position-relative">
            <div className="ModalPayment__closeButton position-absolute" onClick={() => this.closeModal()}>
              <img src="img/close.svg" alt="" />
            </div>
          </div>
          <div className="ModalPayment__body d-flex justify-content-center align-items-center">
            <div className="ModalPayment__payForm">
              <PayBlock />
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  setShowPaymentModal,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalPayment)
