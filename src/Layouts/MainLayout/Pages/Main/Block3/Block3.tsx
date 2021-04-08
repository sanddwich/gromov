import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BeforeAfterBlock from '../../../../../SharedComponents/BeforeAfterBlock/BeforeAfterBlock'
import BottomShadowBlock from '../../../../../SharedComponents/BottomShadowBlock/BottomShadowBlock'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import IconButton from '../../../../../SharedComponents/IconButton/IconButton'
import MirrorHeader from '../../../../../SharedComponents/MirrorHeader/MirrorHeader'
import ScrollAnimation from 'react-animate-on-scroll'
import './Block3.scss'
import { Element } from 'react-scroll'

interface Block3Props {}

interface Block3State {}

class Block3 extends React.Component<Block3Props, Block3State> {
  render() {
    return (
      <Element name="Block3">
        <Container className="Block3 p-0">
          <MirrorHeader headerLeft="Каждый день одно и то же" headerRight="Вы находитесь в замкнутом круге" />

          <Row className="Block3__img m-0 p-0">
            <Col md={7} className="m-0 p-0 d-none d-md-flex justify-content-center align-items-center">
              <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__fadeInLeft">
                <img className="img-fluid" src="img/sircle_bigman.png" alt="" />
              </ScrollAnimation>
            </Col>

            <Col md={5} className="m-0 p-0 d-flex justify-content-center align-items-center">
              <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__fadeInRight">
                <div>
                  <Row className="m-0 p-0 pb-3 pl-3 pr-3">
                    <BottomShadowBlock bgColor="#F45959" shadowColor="#DB3030" image="img/battery_icon3.png">
                      Нет сил, энергии и мотивации
                    </BottomShadowBlock>
                  </Row>
                  <Row className="m-0 p-0 pb-3 pl-3 pr-3">
                    <BottomShadowBlock bgColor="#F45959" shadowColor="#DB3030" image="img/girla_icon.png">
                      Плохое состояние здоровья
                    </BottomShadowBlock>
                  </Row>
                  <Row className="m-0 p-0 pb-3 pl-3 pr-3">
                    <BottomShadowBlock bgColor="#F45959" shadowColor="#DB3030" image="img/puzan_icon.png">
                      Лишний вес
                    </BottomShadowBlock>
                  </Row>
                  <Row className="m-0 p-0 pb-3 pl-3 pr-3">
                    <BottomShadowBlock bgColor="#F45959" shadowColor="#DB3030" image="img/mirror_icon.png">
                      Комплексы из-за внешнего вида
                    </BottomShadowBlock>
                  </Row>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>

          <Row className="Block3__imgMob m-0 mt-4 p-0 d-flex d-sm-none">
            <Col md={7} className="m-0 p-0 d-flex justify-content-center align-items-center">
              <img className="img-fluid" src="img/sircle_bigman.png" alt="" />
            </Col>
          </Row>
        </Container>
      </Element>
    )
  }
}

export default Block3
