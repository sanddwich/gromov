import React from 'react'
import BeforeAfterBlock from '../../../../../SharedComponents/BeforeAfterBlock/BeforeAfterBlock'
import { Element } from 'react-scroll'

import './Achivements.scss'
import ScrollAnimation from 'react-animate-on-scroll'

interface AchivementsProps {}

interface AchivementsState {}

class Achivements extends React.Component<AchivementsProps, AchivementsState> {
  render() {
    return (
      <Element name="Achivements">
        <div className="Achivements">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="Achivements__card">Вице-чемпион Кубка России и Кубка Восточной Европы</div>
                <div className="Achivements__card">Вице-чемпион Астраханской области</div>
                <div className="Achivements__card">Вице-чемпион Кубка Сочи</div>
                <div className="Achivements__card">Чемпион турнира Гран-при Анапы</div>
                <div className="Achivements__card">Призёр турниров ЮФО «Самсон»</div>
                <div className="Achivements__card">Вошёл в ТОП 6 лучших на чемпионате России</div>
                {/* <div className="Achivements__card">Действующий спортсмен</div> */}
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-center pt-4 pb-4">
                {/* <div className="Achivements__photo">
                <div>
                  <img src="/img/gromov_before.jpg" alt="До" />
                </div>
                <div>
                  <img src="/img/gromov_after.jpg" alt="До" />
                </div>
              </div> */}

                <ScrollAnimation animateOnce={true} offset={150} delay={0} animateIn="animate__flipInY">
                  <div>
                    <BeforeAfterBlock
                      imgBefore="img/gromov_before.jpg"
                      imgAfter="img/gromov_after.jpg"
                      textVisible={false}
                    />
                    <div className="Achivements__text">
                      <div className="w-100">
                        <p>Цель: cоревнования.</p>
                        <p>
                          Разница во времени между фото – <b>14 месяцев.</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}

export default Achivements
