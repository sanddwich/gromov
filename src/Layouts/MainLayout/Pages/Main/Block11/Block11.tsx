import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import './Block11.scss'
import { Element } from 'react-scroll'

interface Block11Props {}

interface Block11State {}

class Block11 extends React.Component<Block11Props, Block11State> {
  render() {
    return (
      <Element name="Block11">
        <Container className="Block11 p-0">
          <h1>Кто я такой?</h1>
          <Row className="Block11__Row m-0 p-0">
            <Col md={6} xs={12} className="Block11__Left p-0 d-flex align-items-center">
              <div>
                <DashedBorderBlock
                  bgColor="#80B21C"
                  color="#ffffff"
                  border="none"
                  borderRadius="8px"
                  boxShadow="0px 8px 10px rgba(0, 0, 0, 0.13)"
                >
                  Стаж в фитнес-индустрии более 14 лет
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#80B21C"
                  color="#ffffff"
                  border="none"
                  borderRadius="8px"
                  boxShadow="0px 8px 10px rgba(0, 0, 0, 0.13)"
                >
                  Обучался в лучшем образовательном фитнес-учреждении страны
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#80B21C"
                  color="#ffffff"
                  border="none"
                  borderRadius="8px"
                  boxShadow="0px 8px 10px rgba(0, 0, 0, 0.13)"
                >
                  Имею квалификацию тренера Международного класса
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#80B21C"
                  color="#ffffff"
                  border="none"
                  borderRadius="8px"
                  boxShadow="0px 8px 10px rgba(0, 0, 0, 0.13)"
                >
                  Провожу лекции и семинары
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#80B21C"
                  color="#ffffff"
                  border="none"
                  borderRadius="8px"
                  boxShadow="0px 8px 10px rgba(0, 0, 0, 0.13)"
                >
                  Диплом с квалификацией «Тренер-эксперт»
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#80B21C"
                  color="#ffffff"
                  border="none"
                  borderRadius="8px"
                  boxShadow="0px 8px 10px rgba(0, 0, 0, 0.13)"
                >
                  Имею сертификаты от топовых тренеров, экспертов и научных деятелей России в области фитнеса
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#80B21C"
                  color="#ffffff"
                  border="none"
                  borderRadius="8px"
                  boxShadow="0px 8px 10px rgba(0, 0, 0, 0.13)"
                >
                  Эксперт в психофизиологии питания
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#80B21C"
                  color="#ffffff"
                  border="none"
                  borderRadius="8px"
                  boxShadow="0px 8px 10px rgba(0, 0, 0, 0.13)"
                >
                  Организатор самого крупного проекта преображения в своём регионе
                </DashedBorderBlock>
              </div>
            </Col>

            <Col md={6} className="Block11__Right p-0 d-none d-md-flex align-items-center">
              <img src="img/block11_1.png" alt="" />
            </Col>
            <Col xs={12} className="Block11__RightMob p-0 d-flex d-md-none">
              <img className="img-fluid" src="img/block11_1.png" alt="" />
            </Col>
          </Row>
        </Container>
      </Element>
    )
  }
}

export default Block11
