import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BottomShadowBlock from '../../../../../SharedComponents/BottomShadowBlock/BottomShadowBlock'
import MirrorHeader from '../../../../../SharedComponents/MirrorHeader/MirrorHeader'
import './Block5.scss'
import { Element } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'
import Button from '../../../../../SharedComponents/Button/Button'
import Config from '../../../../../Config/Config'

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
                <ScrollAnimation
                  animateOnce={true}
                  offset={0}
                  delay={0}
                  duration={1.5}
                  animateIn="animate__bounceInLeft"
                >
                  <img src="img/block5_1.png" alt="" />
                </ScrollAnimation>
              </div>
            </Col>
            <Col md={7} xs={12} className="Block5__Right d-flex align-items-center">
              <Container fluid className="Block5__RightCont">
                <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__fadeInUp">
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
                      <div className="Block5__RightLineTitleCont">
                        <p>Диеты не помогли</p>
                        <p>Не могу себя сдерживать</p>
                      </div>
                    </Col>
                  </Row>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} offset={150} delay={200} animateIn="animate__fadeInUp">
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
                      <div className="Block5__RightLineTitleCont">
                        <p>Думаю, что у меня не получится</p>
                        <p>Начинаю, но бросаю</p>
                      </div>
                    </Col>
                  </Row>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} offset={150} delay={400} animateIn="animate__fadeInUp">
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
                      <div className="Block5__RightLineTitleCont">
                        <p>Худел(ла), но вес вернулся</p>
                        <p>Все знаю и не делаю</p>
                      </div>
                    </Col>
                  </Row>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true} offset={150} delay={600} animateIn="animate__fadeInUp">
                  <Row className="Block5__button m-0 p-0 pb-3 pl-3 pr-3">
                    <Button text="Хочу добиться результата" buttonHandler={() => {
                        window.open(`https://api.whatsapp.com/send?phone=+79171874086&text=Здравствуйте.+Я+хочу+получить+хорошие+результаты+без+вреда+для+здоровья+и+улучшить+своё+качество+жизни!
                        +При+этом+не+тратя+время+в+пустую+на+бесполезные+действия. 
                        +Вы+можете+мне+в+этом+помочь?`)
                      }} />
                  </Row>
                </ScrollAnimation>
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
