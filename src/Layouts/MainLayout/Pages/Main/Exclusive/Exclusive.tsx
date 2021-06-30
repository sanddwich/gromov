import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
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
              Эксклюзивный вариант «Комплексное ведение»
            </Col>
          </Row>
        </Container>
        {cardsContent.map((card, index) => {
          return (
            <Container key={index} className="Exclusive__card">
              <ExclusiveCard img={card.img} title={card.title} list={card.list} />
            </Container>
          )
        })}
      </Container>

      <Container fluid className="Exclusive__howToBuy__cont">
        <Container className="Exclusive__howToBuy">
          <Row className="Exclusive__Row m-0">
            <Col md={6} className="Exclusive__howToBuyRight d-block d-md-none">
              <p>Стоимость комплексного ведения</p>
              <h1>от 10 000 рублей</h1>
            </Col>
            <Col md={6} className="Exclusive__howToBuyLeft">
              <h1>как приобрести?</h1>
              <p>
                Выберите удобный канал связи и напишите <b>«Комплексное ведение»</b>
              </p>
              <div className="Exclusive__howToBuyButtons d-block d-md-flex">
                <IconButton
                  text="Whatsapp"
                  icon="/img/ww.png"
                  element={1}
                  textColor="#ffffff"
                  clickHandler={() => toSocialLink(1)}
                />
                <IconButton
                  text="Instagram"
                  icon="/img/wi.png"
                  element={1}
                  textColor="#ffffff"
                  clickHandler={() => toSocialLink(0)}
                />
              </div>
            </Col>
            <Col md={6} className="Exclusive__howToBuyRight d-none d-md-block">
              <p>Стоимость комплексного ведения</p>
              <h1>от 10 000 рублей</h1>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  )
}

export default Exclusive
