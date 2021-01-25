import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import './Block6.scss'

interface Block6Props {}

interface Block6State {}

class Block6 extends React.Component<Block6Props, Block6State> {
  render() {
    return (
      <Container className="Block6 p-0">
        <Row className="Block6__body m-0 p-0">
          <Col md={6} xs={12} className="Block6__Left m-0 d-flex align-items-center">
            <div className="Block6__LeftContent">
              <h1>
                Вам нечего <p>бояться</p>
              </h1>

              <DashedBorderBlock
                bgColor="#80B21C"
                border="1px dashed #FFFFFF"
                color="#ffffff"
                pluses={true}
                borderRadius="0 15px 0 15px"
              >
                Никаких диет, голоданий и ограничений провоцирующих срывы
              </DashedBorderBlock>

              <DashedBorderBlock
                bgColor="#80B21C"
                border="1px dashed #FFFFFF"
                color="#ffffff"
                pluses={true}
                borderRadius="0 15px 0 15px"
              >
                8 из 10 замечают позитивные изменения уже в первый месяц
              </DashedBorderBlock>

              <DashedBorderBlock
                bgColor="#80B21C"
                border="1px dashed #FFFFFF"
                color="#ffffff"
                pluses={true}
                borderRadius="0 15px 0 15px"
              >
                Я не использую ни каких диет!
              </DashedBorderBlock>
            </div>
          </Col>
          <Col md={6} xs={12} className="Block6__Right m-0 p-0 d-flex align-items-end">
            <img className="img-fluid" src="img/block6__gromov.png" alt="" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Block6