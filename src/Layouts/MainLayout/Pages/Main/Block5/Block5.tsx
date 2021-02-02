import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BottomShadowBlock from '../../../../../SharedComponents/BottomShadowBlock/BottomShadowBlock'
import MirrorHeader from '../../../../../SharedComponents/MirrorHeader/MirrorHeader'
import './Block5.scss'
import { Element } from 'react-scroll'

interface Block5Props {}

interface Block5State {}

class Block5 extends React.Component<Block5Props, Block5State> {
  render() {
    return (
      <Element name="Block5">
        <Container className="Block5">
          <MirrorHeader headerLeft="вы уже пробовали" headerRight="но результата не было" />
          <Row className="Block5__Container">
            <Col md={5} xs={12} className="Block5__Left d-none d-md-flex">
              <div className="Block5__imgContainer">
                <img src="img/block5_1.png" alt="" />
              </div>
            </Col>
            <Col md={7} xs={12} className="Block5__Right d-flex align-items-center">
              <Container fluid className="Block5__RightCont">
                <Row className="Block5__RightLine m-0 p-0">
                  <Col xl={3} xs={4} className="Block5__RightLineImg">
                    <BottomShadowBlock
                      bgColor="#FF8585"
                      shadowColor="#F45959"
                      width="110px"
                      image="img/block5_icon1.png"
                    />
                  </Col>
                  <Col xl={9} xs={8} className="Block5__RightLineTitle">
                    Пробовала диеты и не получилось
                  </Col>
                </Row>
                <Row className="Block5__RightLine m-0 p-0">
                  <Col xl={3} xs={4} className="Block5__RightLineImg">
                    <BottomShadowBlock
                      bgColor="#FF8585"
                      shadowColor="#F45959"
                      width="110px"
                      image="img/block5_icon2.png"
                    />
                  </Col>
                  <Col xl={9} xs={8} className="Block5__RightLineTitle">
                    Думаю, что у меня не получится
                  </Col>
                </Row>
                <Row className="Block5__RightLine m-0 p-0">
                  <Col xl={3} xs={4} className="Block5__RightLineImg">
                    <BottomShadowBlock
                      bgColor="#FF8585"
                      shadowColor="#F45959"
                      width="110px"
                      image="img/block5_icon3.png"
                    />
                  </Col>
                  <Col xl={9} xs={8} className="Block5__RightLineTitle">
                    Худела и вес вернулся
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="Block5__imgMob d-flex d-md-none justify-content-center">
            <img src="img/block5_1.png" alt="" />
          </Row>
        </Container>
      </Element>
    )
  }
}

export default Block5
