import React from 'react'

import './Achivements.scss'

interface AchivementsProps {}

interface AchivementsState {}

class Achivements extends React.Component<AchivementsProps, AchivementsState> {
  render() {
    return (
      <div className="Achivements">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="Achivements__card">Вице-чемпион России и кубка Восточной Европы</div>
              <div className="Achivements__card">Вице-чемпион Астраханской области</div>
              <div className="Achivements__card">Вице-чемпион кубка Сочи</div>
              <div className="Achivements__card">Чемпион турнира Гран-при Анапа</div>
              <div className="Achivements__card">Призёр ЮФО на турнире «Самсон 46»</div>
              <div className="Achivements__card">ТОП 6 на чемпионате России 2019</div>
              <div className="Achivements__card">Действующий спортсмен</div>
            </div>
            <div className="col-lg-6 ">
              <div className="Achivements__photo">
                <div>
                  <img src="/img/gromov_before.jpg" alt="До" />
                </div>
                <div>
                  <img src="/img/gromov_after.jpg" alt="До" />
                </div>
              </div>

              <div className="Achivements__text">
                Цель: Соревнования <br></br> Разница во времени фото 14 месяцев
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Achivements
