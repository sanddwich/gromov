import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BottomShadowBlock from '../../../../../SharedComponents/BottomShadowBlock/BottomShadowBlock'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import MirrorHeader from '../../../../../SharedComponents/MirrorHeader/MirrorHeader'
import './Block7.scss'
import { Element } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'
import Button from '../../../../../SharedComponents/Button/Button'
import Config from '../../../../../Config/Config'

interface Block7Props {}

interface Block7State {}

class Block7 extends React.Component<Block7Props, Block7State> {
  render() {
    return (
      <Element name="Block7">
        <Container className="Block7 p-0">
          <MirrorHeader headerLeft="Насколько все индивидуально?" headerRight="или будет одна большая группа?" />
          <Row className="Block7__Content m-0 p-0">
            <Col md={8} className="Block7__Left m-0 p-0 d-none d-md-flex align-items-end justify-content-center">
              <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__fadeInUp">
                <div>
                  <img src="img/block7__1.png" alt="" />
                </div>
              </ScrollAnimation>
            </Col>

            <Col md={4} xs={12} className="Block7__Right m-0 p-0 d-flex align-items-center justify-content-center">
              <div className="Block7__RightContent">
                <div className="Block7__RightEl">
                  <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__fadeInUp">
                    <BottomShadowBlock
                      bgColor="#F45959"
                      shadowColor="#DB3030"
                      height="100px"
                      callWhatsapp={() => window.open(Config.messages[7])}
                    >
                      Нет возможности пойти в зал
                    </BottomShadowBlock>
                  </ScrollAnimation>
                </div>

                <div className="Block7__RightEl">
                  <ScrollAnimation animateOnce={true} offset={150} delay={200} animateIn="animate__fadeInUp">
                    <BottomShadowBlock
                      bgColor="#F45959"
                      shadowColor="#DB3030"
                      height="100px"
                      callWhatsapp={() => window.open(Config.messages[8])}
                    >
                      Нет времени заняться собой
                    </BottomShadowBlock>
                  </ScrollAnimation>
                </div>

                <div className="Block7__RightEl">
                  <ScrollAnimation animateOnce={true} offset={150} delay={400} animateIn="animate__fadeInUp">
                    <BottomShadowBlock
                      bgColor="#F45959"
                      shadowColor="#DB3030"
                      height="100px"
                      callWhatsapp={() => window.open(Config.messages[9])}
                    >
                      Нет стимула начать
                    </BottomShadowBlock>
                  </ScrollAnimation>
                </div>

                <div className="Block7__RightEl">
                  <ScrollAnimation animateOnce={true} offset={150} delay={600} animateIn="animate__fadeInUp">
                    <BottomShadowBlock
                      bgColor="#F45959"
                      shadowColor="#DB3030"
                      height="100px"
                      callWhatsapp={() => window.open(Config.messages[10])}
                    >
                      Лень?
                    </BottomShadowBlock>
                  </ScrollAnimation>
                </div>

                <div className="Block7__RightEl">
                  <ScrollAnimation animateOnce={true} offset={150} delay={800} animateIn="animate__fadeInUp">
                    <Button
                      text="Начать действовать сейчас"
                      buttonHandler={() => {
                        window.open(`https://api.whatsapp.com/send?phone=+79171874086&text=Здравствуйте.+Я+хочу+получить+хорошие+результаты,+сделать+свою+жизнь+лучше+и+более+качественной!
                        +Надоело+постоянно+откладывать+все+на+завтра!
                        +Я+хочу+начать+действовать+прямо+сейчас!
                        +Вы+можете+мне+в+этом+помочь?`)
                      }}
                    />
                  </ScrollAnimation>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="Block7__MobImg m-0 p-0 d-flex d-md-none">
            <ScrollAnimation animateOnce={true} offset={150} delay={500} animateIn="animate__fadeInUp">
              <div>
                <img className="img-fluid" src="img/block7__1.png" alt="" />
              </div>
            </ScrollAnimation>
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
                  сохранить
                  <b>
                    <u>результат на долгие годы!</u>
                  </b>
                </DashedBorderBlock>
              </Col>

              <Col className="Block7__BottomContentRight m-0 p-3">
                <DashedBorderBlock bgColor="#80B21C" border="1px dashed #FFFFFF" color="#ffffff" pluses={true}>
                  Тренировки могут проходить{' '}
                  <b>
                    <u>в любых условиях (спортзал, дом, улица).</u>
                  </b>
                </DashedBorderBlock>
              </Col>
            </Row>

            {/* <Row className="Block7__BottomContent m-0 p-0">
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
            </Row> */}
          </Container>
        </Container>
      </Element>
    )
  }
}

export default Block7
