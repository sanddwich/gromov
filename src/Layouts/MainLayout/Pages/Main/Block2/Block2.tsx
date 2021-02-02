import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Block2.scss'
import { Element } from 'react-scroll'

interface Block2Props {}

interface Block2State {}

class Block2 extends React.Component<Block2Props, Block2State> {
  render() {
    return (
      <Element name="Block2">
        <Container className="Block2 p-0">
          <Row className="m-0 pl-2 pr-2 pr-sm-0 pl-sm-0">
            <Col md={4} xs={6} className="p-2 p-sm-0">
              <Row className="Block2__card m-0 h-100" style={{ backgroundColor: '#00A0E3' }}>
                <Col xs={6} className="Block2__cardContent p-0 pl-3">
                  Уйдёт лишний вес
                </Col>
                <Col xs={6} className="Block2__cardImg p-0 d-flex justify-content-end">
                  <img className="fullHeight" src="img/21.png" alt="" />
                </Col>
              </Row>
            </Col>

            <Col md={4} xs={6} className="p-2 p-sm-0">
              <Row className="Block2__card m-0" style={{ backgroundColor: '#00B2FD' }}>
                <Col xs={6} className="Block2__cardContent p-0 pl-3">
                  Почувствуйте энергию, зараженность, позитив
                </Col>
                <Col xs={6} className="Block2__cardImg p-0 d-flex justify-content-end align-items-center h-100">
                  <img src="img/22.png" alt="" style={{ marginRight: '-30px' }} />
                </Col>
              </Row>
            </Col>

            <Col md={4} xs={6} className="p-2 p-sm-0">
              <Row className="Block2__card m-0" style={{ backgroundColor: '#00A0E3' }}>
                <Col xs={6} className="Block2__cardContent p-0 pl-3">
                  Кайф от занятий и питания
                </Col>
                <Col xs={6} className="Block2__cardImg p-0 d-flex justify-content-end h-100">
                  <img className="fullHeight" src="img/23.png" alt="" />
                </Col>
              </Row>
            </Col>

            <Col md={4} xs={6} className="p-2 p-sm-0">
              <Row className="Block2__card m-0" style={{ backgroundColor: '#05ABF0' }}>
                <Col xs={6} className="Block2__cardContent p-0 pl-3">
                  Никаких диет, голоданий, ограничений
                </Col>
                <Col xs={6} className="Block2__cardImg p-0 d-flex justify-content-end align-items-end h-100">
                  <img className="bottomEnd" src="img/24.png" alt="" />
                </Col>
              </Row>
            </Col>

            <Col md={4} xs={6} className="p-2 p-sm-0">
              <Row className="Block2__card m-0" style={{ backgroundColor: '#14BAFF' }}>
                <Col xs={6} className="Block2__cardContent p-0 pl-3">
                  Наставник на связи 24/7
                </Col>
                <Col xs={6} className="Block2__cardImg p-0 d-flex justify-content-end align-items-end h-100">
                  <img className="gromovImg bottomEnd" src="img/25.png" alt="" />
                </Col>
              </Row>
            </Col>

            <Col md={4} xs={6} className="p-2 p-sm-0">
              <Row className="Block2__card m-0" style={{ backgroundColor: '#668E15' }}>
                <Col xs={12} className="Block2__cardContent p-0 pl-3 pr-3">
                  8/10 чувствуют изменения в первый месяц
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Element>
    )
  }
}

export default Block2
