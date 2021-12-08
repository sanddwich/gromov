import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Col, Container, Row } from 'react-bootstrap'
import Config from '../../../../../Config/Config'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import ExclusiveCard from '../../../../../SharedComponents/ExclusiveCard/ExclusiveCard'
import IconButton from '../../../../../SharedComponents/IconButton/IconButton'
import './Exclusive.scss'

interface ExclusiveProps {}

const cardsContent = [
  {
    img: '/img/ec1.png',
    title: '1. Постановка целей',
    list: [
      'Построение и проработка желаемых целей',
      'Формирование целей производится с учетом временных интервалов, а их достижение контролируется тренером, который оказывает психологическую поддержку на данном этапе',
    ],
  },
  {
    img: '/img/ec2.png',
    title: '2. питание',
    list: [
      'Ваш рацион выстраивается на основе уже сформированных культурно-пищевых ценностей',
      'При построении рациона учитываются ваши медицинские показания',
      'План питания адаптируется под текущий ритм жизни и любые факторы занятости',
      'Вы можете рассчитывать на мою поддержку в любой непонятной ситуации, связанной с планом питания',
    ],
  },
  {
    img: '/img/ec3.png',
    title: '3. физическая активность',
    list: [
      'Индивидуальная тренеровочная программа',
      'Программа формируется для занятий в любых доступных условиях (спортзал, дом, улица)',
      'Детальный видеоразбор для каждого упражнения. ',
      'Анализ техники выполнения упражнений по видеосвязи',
    ],
  },
]

const messengers = ['https://www.instagram.com/victor__gromov/', 'https://api.whatsapp.com/send?phone=+79171874086']

const Exclusive = (props: ExclusiveProps) => {
  const toSocialLink = (element: number): void => {
    window.open(messengers[element])
  }

  return (
    <React.Fragment>
      <Container fluid className="Exclusive">
        <Container className="Exclusive__content">
          <Row className="Exclusive__Row1 m-0">
            <Col md={7} className="Exclusive__title">
              Эксклюзивный вариант «Персональное ведение»
            </Col>
          </Row>
        </Container>

        <Container className="Exclusive__card">
          <Container fluid className="ExclusiveCard">
            <Row className="ExclusiveCard__Row1 m-0">
              <Col md={6} className="ExclusiveCard__img d-flex justify-content-center align-items-center">
                <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__fadeIn">
                  <img src="/img/ec1.png" className="img-fluid" alt="" />
                </ScrollAnimation>
              </Col>
              <Col md={6} className="ExclusiveCard__content p-0">
                <h1>1. Постановка целей</h1>
                <DashedBorderBlock bgColor="#668E15" color="#ffffff" border="1px dashed #FFFFFF">
                  <p>
                    <span>Построение</span> и проработка желаемых <span>целей</span>
                  </p>
                </DashedBorderBlock>
                <DashedBorderBlock bgColor="#668E15" color="#ffffff" border="1px dashed #FFFFFF">
                  <p>
                    Формирование целей производится с учетом временных интервалов, а их достижение контролируется
                    тренером, который оказывает психологическую <span>поддержку</span> на данном этапе
                  </p>
                </DashedBorderBlock>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container className="Exclusive__card">
          <Container fluid className="ExclusiveCard">
            <Row className="ExclusiveCard__Row1 m-0">
              <Col md={6} className="ExclusiveCard__img d-flex justify-content-center align-items-center">
                <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__fadeIn">
                  <img src="/img/ec2.png" className="img-fluid" alt="" />
                </ScrollAnimation>
              </Col>
              <Col md={6} className="ExclusiveCard__content p-0">
                <h1>2. Питание</h1>
                <DashedBorderBlock bgColor="#668E15" color="#ffffff" border="1px dashed #FFFFFF">
                  <p>
                    Ваш рацион выстраивается <span>на основе уже сформированных</span> культурно-пищевых{' '}
                    <span>ценностей</span>
                  </p>
                </DashedBorderBlock>
                <DashedBorderBlock bgColor="#668E15" color="#ffffff" border="1px dashed #FFFFFF">
                  <p>
                    При построении рациона <span>учитываются</span> ваши медицинские <span>показания</span>
                  </p>
                </DashedBorderBlock>
                <DashedBorderBlock bgColor="#668E15" color="#ffffff" border="1px dashed #FFFFFF">
                  <p>
                    План питания <span>адаптируется под</span> текущий ритм жизни и любые <span>факторы</span> занятости
                  </p>
                </DashedBorderBlock>
                <DashedBorderBlock bgColor="#668E15" color="#ffffff" border="1px dashed #FFFFFF">
                  <p>
                    Вы можете рассчитывать на <span>мою поддержку</span> в любой непонятной ситуации, связанной с планом
                    питания
                  </p>
                </DashedBorderBlock>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container className="Exclusive__card">
          <Container fluid className="ExclusiveCard">
            <Row className="ExclusiveCard__Row1 m-0">
              <Col md={6} className="ExclusiveCard__img d-flex justify-content-center align-items-center">
                <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__fadeIn">
                  <img src="/img/ec3.png" className="img-fluid" alt="" />
                </ScrollAnimation>
              </Col>
              <Col md={6} className="ExclusiveCard__content p-0">
                <h1>3. Физическая активность</h1>
                <DashedBorderBlock bgColor="#668E15" color="#ffffff" border="1px dashed #FFFFFF">
                  <p>
                    <span>Индивидуальная</span> тренеровочная программа
                  </p>
                </DashedBorderBlock>
                <DashedBorderBlock bgColor="#668E15" color="#ffffff" border="1px dashed #FFFFFF">
                  <p>
                    Программа формируется для занятий <span>в любых</span> доступных <span>условиях</span> (спортзал,
                    дом, улица)
                  </p>
                </DashedBorderBlock>
                <DashedBorderBlock bgColor="#668E15" color="#ffffff" border="1px dashed #FFFFFF">
                  <p>
                    Детальный <span>видеоразбор</span> для каждого упражнения
                  </p>
                </DashedBorderBlock>
                <DashedBorderBlock bgColor="#668E15" color="#ffffff" border="1px dashed #FFFFFF">
                  <p>
                    <span>Анализ техники</span> выполнения упражнений по видеосвязи
                  </p>
                </DashedBorderBlock>
              </Col>
            </Row>
          </Container>
        </Container>

        {/* {cardsContent.map((card, index) => {
          return (
            <Container key={index} className="Exclusive__card">
              <ExclusiveCard img={card.img} title={card.title} list={card.list} />
            </Container>
          )
        })} */}
      </Container>

      <Container fluid className="Exclusive__howToBuy__cont">
        <Container className="Exclusive__howToBuy">
          <Row className="Exclusive__Row m-0">
            <Col md={12} className="Exclusive__howToBuyRight d-block">
              <p>Стоимость персонального ведения</p>
              <h1>от 8 000 рублей</h1>
            </Col>
            <Col md={12} className="Exclusive__howToBuyLeft">
              
              <div className="Exclusive__howToBuyButtons d-block d-md-flex">
                <IconButton
                  text="Хочу купить"
                  icon="/img/ww.png"
                  element={1}
                  textColor="#ffffff"
                  bold
                  clickHandler={() => {
                    window.open(`https://api.whatsapp.com/send?phone=+79171874086&text=Здравствуйте!+Меня+интересует+персональное+ведение.+Расскажите,+что+оно+из+себя+представляет?`)
                  }}
                  // clickHandler={() => toSocialLink(1)}
                />
                <IconButton
                  text="Хочу купить"
                  icon="/img/wi.png"
                  element={1}
                  textColor="#ffffff"
                  bold
                  clickHandler={() => toSocialLink(0)}
                />
              </div>
            </Col>
            {/* <Col md={6} className="Exclusive__howToBuyRight d-none d-md-block">
              <p>Стоимость комплексного ведения</p>
              <h1>от 8 000 рублей</h1>
            </Col> */}
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  )
}

export default Exclusive
