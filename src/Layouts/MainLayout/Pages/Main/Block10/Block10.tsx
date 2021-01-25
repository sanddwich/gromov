import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import './Block10.scss'

interface Block10Props {}

interface Block10State {}

class Block10 extends React.Component<Block10Props, Block10State> {
  render() {
    return (
      <Container fluid className="Block10 p-0">
        <Container className="Block10__container p-0">
          <h1>
            <p>Почему я могу вас </p>привести к результату?
          </h1>

          {/* <Row className="Block10__content">

          </Row> */}

          <DashedBorderBlock bgColor="#80B21C" border="1px dashed #FFFFFF" color="#ffffff" borderRadius="8px">
            <Container className="Block10__contentFull">
              <Row className="">
                <Col xs={5} className="Block10__contentLeft d-flex align-items-center">
                  <div>
                    <h2>Посмотрите короткое видео</h2>
                    <p>В котором я расскажу вам, чем я могу помочь и как уже привел к результату более 1 000 человек</p>
                  </div>
                </Col>
                <Col xs={7} className="Block10__contentRight">

                </Col>
              </Row>
            </Container>
          </DashedBorderBlock>
        </Container>
      </Container>
    )
  }
}

export default Block10
