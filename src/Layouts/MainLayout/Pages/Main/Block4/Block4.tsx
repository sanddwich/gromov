import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import MirrorHeader from '../../../../../SharedComponents/MirrorHeader/MirrorHeader'
import './Block4.scss'
import { Element } from 'react-scroll'

interface Block4Props {}

interface Block4State {}

class Block4 extends React.Component<Block4Props, Block4State> {
  render() {
    return (
      <Element name="Block4">
        <Container className="Block4">
          <MirrorHeader headerLeft="Пора измениться полностью" headerRight="Cделайте свой выбор" />

          <Row className="Block4__content">
            <Col md={6} xs={12} className="Block4__LeftColumn">
              <DashedBorderBlock
                bgColor="#81B31C"
                border="1px dashed #FFFFFF"
                color="#ffffff"
                width="100%"
                pluses={true}
              >
                Снижение веса и физическая активность придадут легкость.{' '}
                <b>
                  <u>Вы станете более энергичными, заряженными и позитивными.</u>
                </b>
              </DashedBorderBlock>
              <DashedBorderBlock
                bgColor="#81B31C"
                border="1px dashed #FFFFFF"
                color="#ffffff"
                width="100%"
                pluses={true}
              >
                <b>
                  <u>Жировые отложения уйдут,</u>
                </b>{' '}
                а снижение веса и повышение физической активности улучшат общее состояние здоровья.
              </DashedBorderBlock>
              <DashedBorderBlock
                bgColor="#81B31C"
                border="1px dashed #FFFFFF"
                color="#ffffff"
                width="100%"
                pluses={true}
              >
                <b>
                  <u>Мы поставим цели,</u>
                </b>{' '}
                пропишем способ их достижения и будем осуществлять контроль за их достижением.
              </DashedBorderBlock>
              {/* <DashedBorderBlock
                bgColor="#81B31C"
                border="1px dashed #FFFFFF"
                color="#ffffff"
                width="100%"
                pluses={true}
              >
                Мы поставим цели. Пропишется способ их достижения и будет контроль по их достижению
              </DashedBorderBlock> */}
            </Col>

            <Col md={6} xs={12} className="Block4__RightColumn d-flex align-items-end">
              <div>
                <div className="Block4__Img w-100 d-none d-md-flex justify-content-center">
                  <img className="img-fluid" src="img/block4_1.png" alt="" />
                </div>
                <DashedBorderBlock
                  bgColor="#81B31C"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={true}
                >
                  В новом теле вы будете чувствовать себя более{' '}
                  <b>
                    <u>уверенными и сексуальными.</u>
                  </b>
                </DashedBorderBlock>
              </div>
            </Col>
          </Row>

          <Row className="Block4__ImgMob w-100 d-flex d-sm-none justify-content-center">
            <img
              // className="img-fluid"
              src="img/block4_1.png"
              alt=""
            />
          </Row>
        </Container>
      </Element>
    )
  }
}

export default Block4
