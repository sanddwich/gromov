import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BeforeAfterBlock from '../../../../../SharedComponents/BeforeAfterBlock/BeforeAfterBlock'
import MirrorHeader from '../../../../../SharedComponents/MirrorHeader/MirrorHeader'
import './Block8.scss'

interface Block8Props {}

interface Block8State {}

class Block8 extends React.Component<Block8Props, Block8State> {
  render() {
    return (
      <Container className="Block8 p-0">
        <MirrorHeader headerLeft="Результаты моих учеников" headerRight="Вы сможете так же как они" />
        <Row className="Block8__Content">
          <Col md={6} xs={12} className="Block8__card">
            <BeforeAfterBlock
              imgBefore="img/81_1.png"
              imgAfter="img/81_2.png"
              textBefore="ДО"
              textAfter="После"
              textVisible={true}
            />

            <div className="Block8__cardDescr">
              <div className="Block8__cardDescrLine">
                <span>Цель:</span>{' '}
                Соревнования
              </div>
              <div className="Block8__cardDescrLine">
                Разница во времени фото{' '}<span>6 недель</span>
              </div>
              <div className="Block8__cardDescrLine">
                <span>Результат:</span>
              </div>
              <div className="Block8__cardDescrLine">
                <ul style={{listStyleImage: 'url(img/marker.svg)'}}>
                  <li><span>ТОП 10</span>{' '}на Чемпионате России</li>
                  <li><span>Чемпион</span>{' '}Астраханской области</li>
                  <li><span>ТОП 5</span>{' '}Чемпионата Европы</li>
                  <li><span>5 медалей</span>{' '}серебро/бронза по ЮФО</li>
                </ul>
              </div>
            </div>
          </Col>

          <Col md={6} xs={12} className="Block8__card">
            <BeforeAfterBlock
              imgBefore="img/82_1.png"
              imgAfter="img/82_2.png"
              textBefore="ДО"
              textAfter="После"
              textVisible={true}
            />

            <div className="Block8__cardDescr">
              <div className="Block8__cardDescrLine">
                <span>Цель:</span>{' '}
                Снижение процента подкожного жира
              </div>
              <div className="Block8__cardDescrLine">
                Разница во времени фото {' '}<span>1 месяц</span>
              </div>
              <div className="Block8__cardDescrLine">
                <span>Результат:</span>
              </div>
              <div className="Block8__cardDescrLine">
                <ul style={{listStyleImage: 'url(img/marker.svg)'}}>
                  <li>Без диет и спорта</li>
                  <li>Пример работы нутрициалогии</li>
                </ul>
              </div>
            </div>
          </Col>

          <Col md={6} xs={12} className="Block8__card">
            <BeforeAfterBlock
              imgBefore="img/83_1.png"
              imgAfter="img/83_2.png"
              textBefore="ДО"
              textAfter="После"
              textVisible={true}
            />

            <div className="Block8__cardDescr">
              <div className="Block8__cardDescrLine">
                <span>Цель:</span>{' '}
                Набор мышечной массы
              </div>
              <div className="Block8__cardDescrLine">
                Разница во времени фото {' '}<span>2,5 года</span>
              </div>
              <div className="Block8__cardDescrLine">
                <span>Результат:</span>
              </div>
              <div className="Block8__cardDescrLine">
                <ul style={{listStyleImage: 'url(img/marker.svg)'}}>
                  <li>Набор {' '}<span>с 60 кг до 80 кг</span></li>
                  <li>Пример набора массы для {' '}<span>эктоморфа</span></li>
                </ul>
              </div>
            </div>
          </Col>
          
          <Col md={6} xs={12} className="Block8__card">
            <BeforeAfterBlock
              imgBefore="img/84_1.png"
              imgAfter="img/84_2.png"
              textBefore="ДО"
              textAfter="После"
              textVisible={true}
            />

            <div className="Block8__cardDescr">
              <div className="Block8__cardDescrLine">
                <span>Цель:</span>{' '}
                Снижение процента подкожного жира и набор мышечной массы
              </div>
              <div className="Block8__cardDescrLine">
                <span>Результат:</span>
              </div>
              <div className="Block8__cardDescrLine">
                <ul style={{listStyleImage: 'url(img/marker.svg)'}}>
                  <li>Результат за  {' '}<span>2 месяца тренировок</span></li>
                </ul>
              </div>
            </div>
          </Col>
          
          <Col md={6} xs={12} className="Block8__card">
            <BeforeAfterBlock
              imgBefore="img/85_1.png"
              imgAfter="img/85_2.png"
              textBefore="ДО"
              textAfter="После"
              textVisible={true}
            />

            <div className="Block8__cardDescr">
              <div className="Block8__cardDescrLine">
                <span>Цель:</span>{' '}
                Снижение веса
              </div>
              <div className="Block8__cardDescrLine">
              Разница во времени фото {' '}<span>3 недели</span>
              </div>
              <div className="Block8__cardDescrLine">
                <span>Результат:</span>
              </div>
              <div className="Block8__cardDescrLine">
                <ul style={{listStyleImage: 'url(img/marker.svg)'}}>
                  <li>Минус {' '}<span>8 киллограмм</span></li>
                </ul>
              </div>
            </div>
          </Col>
          
          <Col md={6} xs={12} className="Block8__card">
            <BeforeAfterBlock
              imgBefore="img/86_1.png"
              imgAfter="img/86_2.png"
              textBefore="ДО"
              textAfter="После"
              textVisible={true}
            />

            <div className="Block8__cardDescr">
              <div className="Block8__cardDescrLine">
                <span>Цель:</span>{' '}
                Набор мышечной массы
              </div>
              <div className="Block8__cardDescrLine">
                Разница во времени фото {' '}<span>3 недели</span>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Block8