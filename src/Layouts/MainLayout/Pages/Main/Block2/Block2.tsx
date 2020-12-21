import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Block2.scss'

interface Block2Props {}

interface Block2State {}

class Block2 extends React.Component<Block2Props, Block2State> {
  render() {
    return (
      <Container className="Block2 p-0">
        <Row className="m-0">
          <Col xl={4} lg={6} className="p-0">
            <Row className="Block2__card m-0" style={{backgroundColor: '#00A0E3'}}>
              <Col xs={6} className="p-0 pl-2">
                Жировые отложения уйдут
              </Col>
              <Col xs={6} className="p-0">
                <img src="img/21.png" alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Block2
