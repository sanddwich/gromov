import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../Redux'
import { setGiftModal } from '../../Redux/actions/modal'
import { ModalState } from '../../Redux/interfaces/interfaces'
import IconButton from '../IconButton/IconButton'
import './GiftModal.scss'

interface GiftModalProps {
  setGiftModal: (isActive: boolean) => void
  modal: ModalState
}

interface GiftModalState {}

class GiftModal extends React.Component<GiftModalProps, GiftModalState> {
  bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  onClickHandler = (): void => {
    window.open('https://www.instagram.com/victor__gromov/')
    this.props.setGiftModal(false)
    this.bodyUnBlock()
  }

  closeModal = (): void => {
    this.props.setGiftModal(false)
    this.bodyUnBlock()
  }

  render() {
    this.props.modal.giftModal.isActive ? this.bodyBlock() : this.bodyUnBlock()
    return (
      <Container fluid className="GiftModal p-0 d-flex align-items-center justify-content-center">
        <div className="GiftModal__body">
          <Row className="GiftModalBody__closeBtnLine d-flex justify-content-end m-0">
            <div className="GiftModalBody__closeBtn position-relative" onClick={() => this.closeModal()}>
              <img src="/img/close.svg" alt="" />
            </div>
          </Row>
          <Row className="GiftModalBody__header m-0">
            <h1>Подарок</h1>
          </Row>
          <Row className="GiftModalBody__ContentCont m-0">
            <div className="GiftModalBody__Content">
              <img className="img-fluid" src="/img/gift.png" alt="" />
              <div className="GiftModalBody__Text">
                <h3>Для получения подарка перейдите в мой инстаграмм и отправьте сообщение:</h3>
                <h1>Подарок</h1>
                <IconButton
                    icon="/img/instagram.svg"
                    text="Instagram"
                    textColor="#ffffff"
                    bgColor="#80b21c"
                    height="60px"
                    borderRadius="8px"
                    bold="600"
                    element={0}
                    clickHandler={this.onClickHandler}
                  />
              </div>
            </div>
          </Row>
        </div>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  setGiftModal,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftModal)
