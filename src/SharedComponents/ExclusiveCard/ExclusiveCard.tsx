import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Col, Container, Row } from 'react-bootstrap'
import DashedBorderBlock from '../DashedBorderBlock/DashedBorderBlock'
import './ExclusiveCard.scss'

interface ExclusiveCardProps {
  img: string
  title: string
  list: string[]
}

const ExclusiveCard = (props: ExclusiveCardProps) => {
  return (
    <Container fluid className="ExclusiveCard">
      <Row className="ExclusiveCard__Row1 m-0">
        <Col md={6} className="ExclusiveCard__img d-flex justify-content-center align-items-center">
          <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__fadeIn">
            <img src={props.img} className="img-fluid" alt={props.img} />
          </ScrollAnimation>
        </Col>
        <Col md={6} className="ExclusiveCard__content p-0">
          <h1>{props.title}</h1>
          {props.list.map((el) => {
            return (
              <DashedBorderBlock bgColor="#668E15" color="#ffffff" border="1px dashed #FFFFFF">
                {el}
              </DashedBorderBlock>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default ExclusiveCard
