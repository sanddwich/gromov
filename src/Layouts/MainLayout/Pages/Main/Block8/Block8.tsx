import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BeforeAfterBlock from '../../../../../SharedComponents/BeforeAfterBlock/BeforeAfterBlock'
import MirrorHeader from '../../../../../SharedComponents/MirrorHeader/MirrorHeader'
import './Block8.scss'
import { Element } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll'

interface Block8Props {}

interface Block8State {}

const links: string[] = [
  'https://instagram.com/malygin_mph?utm_medium=copy_link',
  'https://instagram.com/kohanovskaya91?utm_medium=copy_link',
  'https://www.instagram.com/amiljaev2018/',
  'https://instagram.com/ann_bilberry?utm_medium=copy_link',
  'https://instagram.com/radik_show?utm_medium=copy_link',
  'https://instagram.com/anna___polyakova?utm_medium=copy_link',
]

class Block8 extends React.Component<Block8Props, Block8State> {
  toInsta = (link: string):void => {
    window.open(link)
  }

  render() {
    return (
      <Element name="Block8">
        <Container className="Block8 p-0">
          <MirrorHeader headerLeft="Результаты моих учеников" headerRight="Вы сможете так же как они" />
          <Row className="Block8__Content m-0">
            <Col md={6} xs={12} className="Block8__card">
              <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__flipInY">
                <BeforeAfterBlock
                  imgBefore="img/81_1.png"
                  imgAfter="img/81_2.png"
                  textBefore="ДО"
                  textAfter="После"
                  textVisible={true}
                  onClickHandler={() => this.toInsta(links[0])}
                />
              </ScrollAnimation>

              <div className="Block8__cardDescr">
                <div className="Block8__cardDescrLine">
                  <span>Цель:</span> cоревнования.
                </div>
                <div className="Block8__cardDescrLine">
                  Разница во времени между фото – <span>6 недель</span>
                </div>
                <div className="Block8__cardDescrLine">
                  <span>Результат:</span>
                </div>
                <div className="Block8__cardDescrLine">
                  <ul style={{ listStyleImage: 'url(img/marker.svg)' }}>
                    <li>С первого раза вошёл в 10-ку лучших на чемпионате России</li>
                    {/* <li>
                      <span>Чемпион</span> Астраханской области;
                    </li> */}
                    <li>4 место на чемпионате Европы</li>
                    <li>Чемпион пяти регионов ЮФО</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col md={6} xs={12} className="Block8__card">
              <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__flipInY">
                <BeforeAfterBlock
                  imgBefore="img/82_1.png"
                  imgAfter="img/82_2.png"
                  textBefore="ДО"
                  textAfter="После"
                  textVisible={true}
                  onClickHandler={() => this.toInsta(links[1])}
                />
              </ScrollAnimation>

              <div className="Block8__cardDescr">
                <div className="Block8__cardDescrLine">
                  <span>Цель:</span> снижение процента подкожного жира.
                </div>
                <div className="Block8__cardDescrLine">
                  Разница во времени фото - <span>1 месяц</span>
                </div>
                <div className="Block8__cardDescrLine">
                  <span>Результат:</span>
                </div>
                <div className="Block8__cardDescrLine">
                  <ul style={{ listStyleImage: 'url(img/marker.svg)' }}>
                    <li>процент подкожного жира снизился без диет и спорта;</li>
                    <li>пример работы нутрициологии.</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col md={6} xs={12} className="Block8__card">
              <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__flipInY">
                <BeforeAfterBlock
                  imgBefore="img/83_1.png"
                  imgAfter="img/83_2.png"
                  textBefore="ДО"
                  textAfter="После"
                  textVisible={true}
                  onClickHandler={() => this.toInsta(links[2])}
                />
              </ScrollAnimation>

              <div className="Block8__cardDescr">
                <div className="Block8__cardDescrLine">
                  <span>Цель:</span> набор мышечной массы.
                </div>
                <div className="Block8__cardDescrLine">
                  Разница во времени фото - <span>2,5 года</span>
                  <p>Пример набора массы для эктоморфа.</p>
                </div>
                <div className="Block8__cardDescrLine">
                  <span>Результат:</span>
                </div>
                <div className="Block8__cardDescrLine">
                  <ul style={{ listStyleImage: 'url(img/marker.svg)' }}>
                    <li>
                      набор <span>с 60 до 80 килограммов.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col md={6} xs={12} className="Block8__card">
              <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__flipInY">
                <BeforeAfterBlock
                  imgBefore="img/84_1.png"
                  imgAfter="img/84_2.png"
                  textBefore="ДО"
                  textAfter="После"
                  textVisible={true}
                  onClickHandler={() => this.toInsta(links[3])}
                />
              </ScrollAnimation>

              <div className="Block8__cardDescr">
                <div className="Block8__cardDescrLine">
                  <span>Цель:</span> cнижение процента подкожного жира и набор мышечной массы.
                  <p>
                    Разница во времени между фото – <span>2 месяца.</span>
                  </p>
                </div>
                <div className="Block8__cardDescrLine">
                  <span>Результат:</span>
                </div>
                <div className="Block8__cardDescrLine">
                  <ul style={{ listStyleImage: 'url(img/marker.svg)' }}>
                    <li>
                      Достижение поставленной цели <span>за 2 месяца тренировок.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col md={6} xs={12} className="Block8__card">
              <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__flipInY">
                <BeforeAfterBlock
                  imgBefore="img/85_1.png"
                  imgAfter="img/85_2.png"
                  textBefore="ДО"
                  textAfter="После"
                  textVisible={true}
                  onClickHandler={() => this.toInsta(links[4])}
                />
              </ScrollAnimation>

              <div className="Block8__cardDescr">
                <div className="Block8__cardDescrLine">
                  <span>Цель:</span> снижение веса.
                </div>
                <div className="Block8__cardDescrLine">
                  Разница во времени фото - <span>3 недели</span>
                </div>
                <div className="Block8__cardDescrLine">
                  <span>Результат:</span>
                </div>
                <div className="Block8__cardDescrLine">
                  <ul style={{ listStyleImage: 'url(img/marker.svg)' }}>
                    <li>
                      минус <span>8 киллограмм</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col md={6} xs={12} className="Block8__card">
              <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__flipInY">
                <BeforeAfterBlock
                  imgBefore="img/86_1.png"
                  imgAfter="img/86_2.png"
                  textBefore="ДО"
                  textAfter="После"
                  textVisible={true}
                  onClickHandler={() => this.toInsta(links[5])}
                />
              </ScrollAnimation>

              <div className="Block8__cardDescr">
                <div className="Block8__cardDescrLine">
                  <span>Цель:</span> набор мышечной массы.
                </div>
                <div className="Block8__cardDescrLine">
                  Разница во времени фото - <span>10 недель</span>
                  <p>Дисциплина – гарант достижения качественного результата.</p>
                </div>
                <div className="Block8__cardDescrLine">
                  <span>Результат:</span>
                </div>
                <div className="Block8__cardDescrLine">
                  <ul style={{ listStyleImage: 'url(img/marker.svg)' }}>
                    <li>Увеличение веса на 5 кг;</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Element>
    )
  }
}

export default Block8
