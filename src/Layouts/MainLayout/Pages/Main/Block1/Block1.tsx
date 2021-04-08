import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { RootState } from '../../../../../Redux'
import { ModalState } from '../../../../../Redux/interfaces/interfaces'
import RoundButton from '../../../../../SharedComponents/RoundButton/RoundButton'
import { setMobileMenuModal, setGiftModal } from '../../../../../Redux/actions/modal'
import './Block1.scss'
import ScrollAnimation from 'react-animate-on-scroll'

interface Block1Props {
  setGiftModal: (isActive: boolean) => void
  setMobileMenuModal: (isActive: boolean) => void
  modal: ModalState
}

interface Block1State {
  whats: string
  insta: string
}

class Block1 extends React.Component<Block1Props, Block1State> {
  constructor(props: Block1Props) {
    super(props)
    this.state = {
      insta: 'https://www.instagram.com/victor__gromov/',
      whats: 'https://api.whatsapp.com/send?phone=+79171874086',
    }
  }

  instaClick = (): void => {
    window.open(this.state.insta)
  }

  whatsAppClick = (): void => {
    window.open(this.state.whats)
  }

  openMobileMenu = (): void => {
    this.props.setMobileMenuModal(true)
  }

  render() {
    return (
      <Container
        fluid
        className="Block1 p-0"
        style={{
          background: `url(img/bg1.png)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="Block1_gift" onClick={() => this.props.setGiftModal(true)}>
          <img className="img-fluid" src="/img/gift.png" alt="" />
        </div>
        <div className="Block1_wa" onClick={() => this.whatsAppClick()}>
          <img className="img-fluid" src="/img/whatsapp1.png" alt="" />
        </div>

        <Row className="Block1__Row1 m-0 p-0 align-items-center">
          <Container className="p-0">
            <ScrollAnimation animateOnce={true} offset={0} animateIn="animate__fadeInDown">
              <Row className="Block1__logoRow m-0 p-0 d-none d-sm-flex justify-content-between">
                <div className="Block1__logo">
                  <img className="img-fluid" src="img/logo.png" alt="" />
                </div>
                <div className="Block1__callback d-flex justify-content-end">
                  <div className="Block1__callbackTitle d-none d-md-flex">Связаться со мной</div>
                  <div className="Block1__callbackButton">
                    <RoundButton icon="img/whats.svg" width="50px" buttonHandler={this.whatsAppClick} />
                  </div>
                  <div className="Block1__callbackButton">
                    <RoundButton icon="img/insta.svg" width="50px" buttonHandler={this.instaClick} />
                  </div>
                </div>
              </Row>
            </ScrollAnimation>

            <Row className="MobileMenu__oneRow m-0 d-flex d-sm-none justify-content-between align-items-center">
              <div className="MobileMenu__logo p-2">
                <img className="img-fluid" src="/img/logo.png" alt="" />
              </div>
              <div className="MobileMenu__closeButton">
                <img src="/img/burger.svg" alt="" onClick={() => this.openMobileMenu()} />
              </div>
            </Row>
          </Container>
        </Row>

        <Container className="Block1__Row2Cont d-none d-sm-flex p-0">
          <Row className="Block1__Row2 d-none d-sm-flex w-100 m-0 p-0">
            <Col md={5} className="p-0 p-0 d-flex align-items-center">
              <div className="Block1__Row2Title">
                <ScrollAnimation animateOnce={true} offset={0} delay={1000} animateIn="animate__fadeIn">
                  <p>Приведу вас в форму за</p>
                  <span>4 месяца</span>
                </ScrollAnimation>

                <Row className="Block1__Row2DescrBlock">
                  <Col md={5} className="Block1__Row2DescrLeft">
                    <div>
                      В основе метода <span>нутрициология</span>, <span>психология</span> и{' '}
                      <span>физическая активность</span>
                    </div>
                  </Col>
                  <Col md={7} className="Block1__Row2DescrRight">
                    <div>
                      Учитывая этот фактор, <b>вы не потеряете заинтересованность и мотивацию</b> на пути к желаемому
                      результату
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={7} className="Block1__img p-0 p-0 d-none d-md-block">
              <ScrollAnimation animateOnce={true} offset={0} delay={500} animateIn="animate__fadeInRightBig">
                <img src="img/gromov1.png" alt="" />
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>

        <Container className="Block1__Row2ContMobile w-100 h-100 d-flex d-sm-none p-0 align-items-end">
          <div>
            <Row className="w-100 h-100 m-0">
              <Col xs={8} className="Block1__Row2Title d-flex align-items-end">
                <div>
                  <p>Приведу вас в</p>
                  <p>форму за</p>
                  <span>4 месяца</span>
                </div>
              </Col>

              <Col xs={4}>
                <img className="Block1__mobileImg" src="/img/gromov1_mobile.png" alt="" />
              </Col>
            </Row>

            <Row className="Block1__Row2DescrBlock p-0 m-0">
              <Col xs={12} className="Block1__Row2DescrLeft">
                <div>
                  В основе метода - <span>нутрициология</span>, <span>психология</span> и{' '}
                  <span>физические нагрузки</span>
                </div>
              </Col>
              <Col xs={12} className="Block1__Row2DescrRight">
                <div>
                  <p>Учитывая эти факторы, на пути к желаемой фигуре</p> вы не потеряете заинтересованность и мотивацию
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  setMobileMenuModal,
  setGiftModal,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block1)
