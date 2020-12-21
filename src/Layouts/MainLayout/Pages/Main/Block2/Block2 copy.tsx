import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Block2.scss'

interface Block2Props {}

interface Block2State {}

class Block2 extends React.Component<Block2Props, Block2State> {
  render() {
    return (
      <Container fluid className="Block2 p-0">
        <Container className="Block2__Container p-0">
          <Row className="m-0 p-0">
            <Col xl={4} md={6} className="Block2__card" style={{ backgroundColor: '#00A0E3' }}>
              123213
              {/* <Row className="m-0 p-0">
                <Col xs={7} className="Block2__cardLeft m-0 p-0 d-flex align-items-center">
                  Жировые отложения уйдут
                </Col>
                <Col xs={5} className="Block2__cardRight m-0 p-0">
                  <img src="img/21.png" alt=""/> 
                </Col>
              </Row> */}
            </Col>
            <Col xl={4} md={6} className="Block2__card" style={{ backgroundColor: '#00A0E3' }}>
              123213
              {/* <Row className="m-0 p-0">
                <Col xs={7} className="Block2__cardLeft m-0 p-0 d-flex align-items-center">
                  Жировые отложения уйдут
                </Col>
                <Col xs={5} className="Block2__cardRight m-0 p-0">
                  <img src="img/21.png" alt=""/> 
                </Col>
              </Row> */}
            </Col>
            <Col xl={4} md={6} className="Block2__card" style={{ backgroundColor: '#00A0E3' }}>
              123213
              {/* <Row className="m-0 p-0">
                <Col xs={7} className="Block2__cardLeft m-0 p-0 d-flex align-items-center">
                  Жировые отложения уйдут
                </Col>
                <Col xs={5} className="Block2__cardRight m-0 p-0">
                  <img src="img/21.png" alt=""/> 
                </Col>
              </Row> */}
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Block2
