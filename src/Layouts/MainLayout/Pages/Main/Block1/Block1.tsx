import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RoundButton from '../../../../../SharedComponents/RoundButton/RoundButton'
import './Block1.scss'

interface Block1Props {}

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
        <Row className="Block1__Row1 m-0 p-0 d-flex align-items-center">
          <Container className="p-0">
            <Row className="Block1__logoRow m-0 p-0 d-flex justify-content-between">
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
          </Container>
        </Row>

        <Container className="Block1__Row2Cont p-0">
          <Row className="Block1__Row2 w-100 m-0 p-0">
            <Col md={5} className="p-0 p-0 d-flex align-items-center">
              <div className="Block1__Row2Title">
                <p>Приведу вас в форму за</p>
                <span>4 месяца</span>

                <Row className="Block1__Row2DescrBlock">
                  <Col md={5} className="Block1__Row2DescrLeft">
                    <div>
                      В основе метода - <span>нутрициология</span>, <span>психология</span> и{' '}
                      <span>физические нагрузки</span>
                    </div>
                  </Col>
                  <Col md={7} className="Block1__Row2DescrRight">
                    <div>
                      <p>Учитывая эти факторы, на пути к желаемой фигуре</p> вы не потеряете заинтересованность и
                      мотивацию
                    </div>
                  </Col>
                </Row>

              </div>
            </Col>
            <Col md={7} className="Block1__img p-0 p-0 d-none d-md-block">
              <img src="img/gromov1.png" alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Block1
