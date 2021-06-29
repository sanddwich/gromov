import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../../../../../SharedComponents/Button/Button'
import './QuizPage.scss'

interface QuizPageProps {}

const QuizPage = (props: QuizPageProps) => {
  const toQuiz = (): void => {
    console.log('toQuiz')
  }

  return (
    <Container fluid className="QuizPage p-0">
      <Container
        fluid
        className="QuizPage__bg d-none d-sm-flex"
        style={{
          backgroundImage: 'url("/img/quiz1.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Container className="QuizPage__content">
          <Row className="QuizPage__Row1">
            <Col className="QuizPage__Col">
              <h1>получите подарок</h1>
              <p>Пройдите небольшой опрос и получите скидку</p>
            </Col>
          </Row>
          <Row className="QuizPage__Row1">
            <Button buttonHandler={() => toQuiz()} text="Пройти опрос" />
            <div className="QuizPage__Row1Title">Время прохождения 2 минуты</div>
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className="QuizPage__bgMob d-flex d-sm-none"
        style={{
          backgroundImage: 'url("/img/quiz2.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Container className="QuizPage__content">
          <Row className="QuizPage__Row1">
            <Col className="QuizPage__Col">
              <h1>получите подарок</h1>
              <p>Пройдите небольшой опрос и получите скидку</p>
            </Col>
          </Row>
          <Row className="QuizPage__Row1">
            <Button buttonHandler={() => toQuiz()} text="Пройти опрос" />
          </Row>
          <Row className="QuizPage__Row3">
            <div className="QuizPage__Row1Title">Время прохождения 2 минуты</div>
          </Row>
        </Container>
      </Container>
    </Container>
  )
}

export default QuizPage
