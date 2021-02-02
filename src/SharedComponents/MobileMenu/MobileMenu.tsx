import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RootState } from '../../Redux'
import { ModalState } from '../../Redux/interfaces/interfaces'
import { setShowPaymentModal, setMobileMenuModal } from '../../Redux/actions/modal'
import './MobileMenu.scss'
import { connect } from 'react-redux'
import IconButton from '../IconButton/IconButton'
import { scroller } from 'react-scroll'

interface MobileMenuProps {
  setShowPaymentModal: (isActive: boolean) => void
  setMobileMenuModal: (isActive: boolean) => void
  modal: ModalState
}

interface MobileMenuState {}

class MobileMenu extends React.Component<MobileMenuProps, MobileMenuState> {
  bodyBlock = (): void => {
    document.querySelector('body')?.classList.add('modal-open')
  }

  bodyUnBlock = (): void => {
    document.querySelector('body')?.classList.remove('modal-open')
  }

  closeButton = (): void => {
    this.bodyUnBlock()
    this.props.setMobileMenuModal(false)
  }

  scrollTo = (ankorName: string, offset: number): void => {
    scroller.scrollTo(ankorName, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset, 
    })

    this.closeButton()
  }

  render() {
    this.props.modal.mobileMenu.isActive ? this.bodyBlock() : this.bodyUnBlock()

    return (
      <Container
        fluid
        className="MobileMenu p-0 animated animate__fadeInDownBig"
        style={{
          background: `url(/img/bg1.png)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Row className="MobileMenu__oneRow m-0 d-flex justify-content-between align-items-center">
          <div className="MobileMenu__logo p-2">
            <img className="img-fluid" src="/img/logo.png" alt="" />
          </div>
          <div className="MobileMenu__closeButton">
            <img src="/img/exitMobile.svg" alt="" onClick={() => this.closeButton()} />
          </div>
        </Row>

        <Row className="MobileMenu__twoRow m-0">
          <Col className="MobileMenu__menuBlock p-2">
            <ul style={{ listStyleType: 'none' }}>
              <li onClick={() => this.scrollTo('Block2', -150)}>Преимущества</li>
              <li>Чем мы можем помочь</li>
              <li>Отзывы</li>
              <li>Обо мне</li>
              <li>Тарифы и цены</li>
            </ul>
          </Col>
        </Row>

        <Container className="MobileMenu__messengersCont d-flex align-items-end">
          <Container className="MobileMenu__messengers p-0">
            <Row className="MobileMenu__MC m-0 h-100">
              <Col xs={8} className="p-0 pl-4 d-flex align-items-center">
                <div className="MobileMenu__LeftContent">
                  <h1>Напишите мне</h1>
                  <p>Напишите мне на один из предложенных каналов связи и я отвечу на любые вопросы</p>
                  <IconButton
                    icon="/img/whatsapp_blue.svg"
                    text="Whatsapp"
                    textColor="#058DC7"
                    bgColor="#ffffff"
                    height="60px"
                    borderRadius="8px"
                    bold="600"
                  />
                  <IconButton
                    icon="/img/insta_blue.svg"
                    text="Instagram"
                    textColor="#058DC7"
                    bgColor="#ffffff"
                    height="60px"
                    borderRadius="8px"
                    bold="600"
                  />
                </div>
              </Col>

              <Col className="MobileMenu__photo p-0 d-flex align-items-end justify-content-end" xs={4}><img src="/img/contacts_photo.png" alt=""/></Col>
            </Row>
          </Container>
        </Container>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  setShowPaymentModal,
  setMobileMenuModal,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu)
