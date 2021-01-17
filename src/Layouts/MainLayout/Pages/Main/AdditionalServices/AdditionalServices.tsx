import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BottomShadowBlock from '../../../../../SharedComponents/BottomShadowBlock/BottomShadowBlock'
import MirrorHeader from '../../../../../SharedComponents/MirrorHeader/MirrorHeader'
import './AdditionalServices.scss'

interface AdditionalServicesProps {}

interface AdditionalServicesState {}

class AdditionalServices extends React.Component<AdditionalServicesProps, AdditionalServicesState> {
  render() {
    return (
      <Container className="AdditionalServices">
        <MirrorHeader headerLeft="вы уже пробовали" headerRight="но результата не было" />
        <Row className="AdditionalServices__Container">
          <Col md={5} xs={12} className="AdditionalServices__Left d-none d-md-flex">
            <div className="AdditionalServices__imgContainer">
              <img src="img/AdditionalServices_1.png" alt="" />
            </div>
          </Col>
          <Col md={7} xs={12} className="AdditionalServices__Right d-flex align-items-center">
            <Container fluid className="AdditionalServices__RightCont">
              <Row className="AdditionalServices__RightLine m-0 p-0">
                <Col xl={3} xs={4} className="AdditionalServices__RightLineImg">
                  <BottomShadowBlock
                    bgColor="#FF8585"
                    shadowColor="#F45959"
                    width="110px"
                    image="img/AdditionalServices_icon1.png"
                  />
                </Col>
                <Col xl={9} xs={8} className="AdditionalServices__RightLineTitle">
                  Пробовала диеты и не получилось
                </Col>
              </Row>
              <Row className="AdditionalServices__RightLine m-0 p-0">
                <Col xl={3} xs={4} className="AdditionalServices__RightLineImg">
                  <BottomShadowBlock
                    bgColor="#FF8585"
                    shadowColor="#F45959"
                    width="110px"
                    image="img/AdditionalServices_icon2.png"
                  />
                </Col>
                <Col xl={9} xs={8} className="AdditionalServices__RightLineTitle">
                  Думаю, что у меня не получится
                </Col>
              </Row>
              <Row className="AdditionalServices__RightLine m-0 p-0">
                <Col xl={3} xs={4} className="AdditionalServices__RightLineImg">
                  <BottomShadowBlock
                    bgColor="#FF8585"
                    shadowColor="#F45959"
                    width="110px"
                    image="img/AdditionalServices_icon3.png"
                  />
                </Col>
                <Col xl={9} xs={8} className="AdditionalServices__RightLineTitle">
                  Худела и вес вернулся
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="AdditionalServices__imgMob d-flex d-md-none justify-content-center">
          <img src="img/AdditionalServices_1.png" alt="" />
        </Row>
      </Container>
    )
  }
}

export default AdditionalServices
