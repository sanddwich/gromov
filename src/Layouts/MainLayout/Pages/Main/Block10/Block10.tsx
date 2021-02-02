import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import './Block10.scss'
import { Element } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'

interface Block10Props {}

interface Block10State {}

class Block10 extends React.Component<Block10Props, Block10State> {
  render() {
    return (
      <Element name="Block10">
        <Container fluid className="Block10 p-0">
          <Container className="Block10__container p-0">
            <h1>
              <p>Почему я могу вас </p>привести к результату?
            </h1>

            <ScrollAnimation animateOnce={true} offset={100} delay={0} animateIn="animate__zoomIn">
              <DashedBorderBlock bgColor="#80B21C" border="1px dashed #FFFFFF" color="#ffffff" borderRadius="8px">
                <Container className="Block10__contentFull">
                  <Row className="">
                    <Col md={5} xs={12} className="Block10__contentLeft d-flex align-items-center">
                      <div>
                        <h2>Посмотрите короткое видео</h2>
                        <p>
                          В котором я расскажу вам, чем я могу помочь и как уже привел к результату более 1 000 человек
                        </p>
                      </div>
                    </Col>
                    <Col md={7} xs={12} className="Block10__contentRight p-0">
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=5W12VyuD6Cw&ab_channel=PeteBellis%26Tommy"
                        width="100%"
                        height="100%"
                        controls={true}
                      />
                    </Col>
                  </Row>
                </Container>
              </DashedBorderBlock>
            </ScrollAnimation>
          </Container>
        </Container>
      </Element>
    )
  }
}

export default Block10
