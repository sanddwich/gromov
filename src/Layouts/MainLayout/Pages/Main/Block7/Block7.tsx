import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BottomShadowBlock from '../../../../../SharedComponents/BottomShadowBlock/BottomShadowBlock'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import MirrorHeader from '../../../../../SharedComponents/MirrorHeader/MirrorHeader'
import './Block7.scss'

interface Block7Props {}

interface Block7State {}

class Block7 extends React.Component<Block7Props, Block7State> {
  render() {
    return (
      <Container className="Block7 p-0">
        <MirrorHeader headerLeft="Насколько все индивидуально?" headerRight="или будет одна большая группа?" />
        <Row className="Block7__Content m-0 p-0">
          <Col md={8} className="Block7__Left m-0 p-0 d-none d-md-flex align-items-end justify-content-center">
            <img src="img/block7__1.png" alt="" />
          </Col>

          <Col md={4} xs={12} className="Block7__Right m-0 p-0 d-flex align-items-center justify-content-center">
            <div className="Block7__RightContent">
              <div className="Block7__RightEl">
                <BottomShadowBlock bgColor="#F45959" shadowColor="#DB3030" height="100px">
                  Нет возможности пойти в зал
                </BottomShadowBlock>
              </div>

              <div className="Block7__RightEl">
                <BottomShadowBlock bgColor="#F45959" shadowColor="#DB3030" height="100px">
                  Нет времени заняться собой
                </BottomShadowBlock>
              </div>

              <div className="Block7__RightEl">
                <BottomShadowBlock bgColor="#F45959" shadowColor="#DB3030" height="100px">
                  А что если у вас все как у всех?
                </BottomShadowBlock>
              </div>

              <div className="Block7__RightEl">
                <BottomShadowBlock bgColor="#F45959" shadowColor="#DB3030" height="100px">
                  Это марафон?
                </BottomShadowBlock>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="Block7__MobImg m-0 p-0 d-flex d-md-none">
          <img className="img-fluid" src="img/block7__1.png" alt="" />
        </Row>

        <Container fluid className="Block7__Bottom m-0">
          <MirrorHeader
            headerLeft="Методика подстраивается под ваш образ жизни"
            headerRight="А не вы под методику"
            leftBlocks={8}
            rightBlocks={4}
          />

          <Row className="Block7__BottomContent m-0 p-0">
            <Col className="Block7__BottomContentLeft m-0 p-3">
              <DashedBorderBlock bgColor="#80B21C" border="1px dashed #FFFFFF" color="#ffffff" pluses={true}>
                За основу методики взята психофизиология и выстраивание фундамента пищевых привычек. Это позволяет
                сохранить результат на долгие годы!
              </DashedBorderBlock>
            </Col>

            <Col className="Block7__BottomContentRight m-0 p-3">
              <DashedBorderBlock bgColor="#80B21C" border="1px dashed #FFFFFF" color="#ffffff" pluses={true}>
                Тренировки могут проходить в любых условиях (спортзал, дом, улица)
              </DashedBorderBlock>
            </Col>
          </Row>

          <Row className="Block7__BottomContent m-0 p-0">
            <Col className="Block7__BottomContentLeft m-0 p-3">
              <DashedBorderBlock bgColor="#80B21C" border="1px dashed #FFFFFF" color="#ffffff" pluses={true}>
                Формат работы индивидуальный, то есть 1 на 1
              </DashedBorderBlock>
            </Col>

            <Col className="Block7__BottomContentRight m-0 p-3">
              <DashedBorderBlock bgColor="#80B21C" border="1px dashed #FFFFFF" color="#ffffff" pluses={true}>
                Не Вы подстраиваетесь под данную систему, а она формируется под вас
              </DashedBorderBlock>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Block7