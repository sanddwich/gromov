import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../../../../../SharedComponents/Button/Button'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import PriceBlock from '../../../../../SharedComponents/PriceBlock/PriceBlock'
import RoundButton from '../../../../../SharedComponents/RoundButton/RoundButton'
import './AdditionalServices.scss'
import { Element } from 'react-scroll'

interface AdditionalServicesProps {}

interface AdditionalServicesState {}

class AdditionalServices extends React.Component<AdditionalServicesProps, AdditionalServicesState> {
  render() {
    return (
      <Element name="AdditionalServices">
        <div className="AdditionalServices container-lg p-0 m-md-auto m-0">
          <div className="row m-0 p-0">
            <div className="col-lg-6 m-0 p-0">
              <div className="AdditionalServices__card gray">
                <h2>«базовая тренировочная программа»</h2>
                <p>Отдельная услуга</p>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Это список упражнений который скоординирует вас в тренажёрном зале, дома, или на улице
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Вам не нужно тратить своё время на поиски программы в интернете, которая к тому же может быть весьма
                  травмоопасной
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Данная программа является стандартной и универсальной, без учета индивидуальных параметров
                </DashedBorderBlock>

                <Container className="AdditionalServices__propsCont">
                  <Row className="AdditionalServices__sex m-0 d-flex justify-content-around">
                    <div className="AdditionalServices__sexType d-flex align-items-center">
                      <img src="/img/radio__true.svg" alt="" />
                      <span>Мужчине</span>
                    </div>
                    <div className="AdditionalServices__sexType d-flex align-items-center">
                      <img src="/img/radio__false.svg" alt="" />
                      <span>Женщине</span>
                    </div>
                  </Row>
                </Container>

                <PriceBlock theme="light" price={'900 р'} />
                <Button text="Купить сейчас" buttonHandler={() => console.log(111)} />
              </div>
            </div>
            <div className="col-lg-6 m-0 p-0">
              <div className="AdditionalServices__card blue">
                <h2 style={{ color: '#ffffff' }}>«персональная тренировочная программа»</h2>
                <p>Отдельная услуга</p>
                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Эта тренировочная программа составляется с учётом ваших индивидуальных параметров: сброс веса или
                  набор мышечной массы
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  В ней принимается во внимание ритм жизни, рабочий график, а также возможные ограничения по физическим
                  нагрузкам
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Программа составляется для: тренажёрного зала, домашних и уличных тренировок
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Также сюда входит консультация (по видео связи или звонку), в ходе которой по необходимости вносятся
                  корректировки с учетом индивидуального прогресса
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  В данном формате программы, к каждому упражнению подкрепляется видео инструкция с подробным описанием
                  техники выполнения
                </DashedBorderBlock>

                <PriceBlock theme="dark" price={'900 р'} />
                <Button text="Купить сейчас" buttonHandler={() => console.log(111)} />
              </div>
            </div>
          </div>

          <div className="row m-0 p-0">
            <div className="col-lg-6 m-0 p-0">
              <div className="AdditionalServices__card gray">
                <h2>«базовое питание»</h2>
                <p>Отдельная услуга</p>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Это базовые принципы сбалансированного, рационального, так называемого правильного питания
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Это не диета, а фундаментальные плавила, придерживаясь которых вы сможете самостоятельно составить
                  свой рацион питания для: похудения или набора массы
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  В данной программе присутствуют не только базовые рекомендации но и конкретные примеры сочетания
                  продуктов в рационе, а также примеры конкретных блюд
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Данная программа является стандартной и универсальной без учета индивидуальных параметров
                </DashedBorderBlock>

                <PriceBlock theme="light" price={'900 р'} />
                <Button text="Купить сейчас" buttonHandler={() => console.log(111)} />
              </div>
            </div>
            <div className="col-lg-6 m-0 p-0">
              <div className="AdditionalServices__card blue">
                <h2 style={{ color: '#ffffff' }}>Культура питания «персонально»</h2>
                <p>Отдельная услуга</p>
                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Это не только базовые принципы сбалансированного, рационального, так называемого правильного питания
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  В этой программе учитывается: - ваш график приёма пищи; - индивидуальная непереносимость продуктов; -
                  ограничения по продуктам (например диабет или аллергия)
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  В этом варианте программы ведётся ежедневный учёт потребляемой вами еды, в специальной форме. Так же
                  Вы получаете консультацию по видео связи или звонку, в которой мы разбираем ваши записи и корректируем
                  ошибки
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  В течении одной - двух недель составляется индивидуальная программа именно под вас
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Главным преимуществом данной программы является ее эффективность, т.к. она формируется исходя из
                  вашего рациона, а не методом «рекомендаций в слепую»
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Так же вы бонусом получаете файл с базовыми принципами питания с наиболее удачными сочетаниями
                  продуктов и примерами конкретных блюд
                </DashedBorderBlock>

                <PriceBlock theme="dark" price={'2 700 р'} />
                <Button text="Купить сейчас" buttonHandler={() => console.log(111)} />
              </div>
            </div>
          </div>

          <h1>Дополнительные услуги</h1>
          <div className="row m-0 p-0">
            <div className="col-lg-6 m-0 p-0">
              <div className="AdditionalServices__card gray">
                <h2>Онлайн-Консультация</h2>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                >
                  Ответы на интересующие вопросы, выявление потребностей, сопоставление желаемого результата с реалиями
                  жизнедеятельности
                </DashedBorderBlock>
                <PriceBlock theme="light" price={'1 500 р/час'} />
                <Button text="Купить сейчас" buttonHandler={() => console.log(111)} />
              </div>
            </div>
            <div className="col-lg-6 m-0 p-0">
              <div className="AdditionalServices__card gray">
                <h2>Подбор бадов</h2>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                >
                  Подбор бадов и способ их применения, учитывая ваши потребности и задачи
                </DashedBorderBlock>
                <PriceBlock theme="light" price={'900 р'} />
                <Button text="Купить сейчас" buttonHandler={() => console.log(111)} />
              </div>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-lg-6 m-0 p-0">
              <div className="AdditionalServices__card gray">
                <h2>Диагностика</h2>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                >
                  Диагностика по анализам крови и рекомендации на основе полученного результата
                </DashedBorderBlock>
                <PriceBlock theme="light" price={'900 р'} />
                <Button text="Купить сейчас" buttonHandler={() => console.log(111)} />
              </div>
            </div>
            <div className="col-lg-6 m-0 p-0">
              <div
                style={{ backgroundImage: 'url(/img/contacts_photo.png)' }}
                className="AdditionalServices__card green"
              >
                <div className="AdditionalServices__card__text">
                  <h2 style={{ color: '#ffffff' }}>Напишите мне</h2>
                  <p>Напишите мне на один из предложенных каналов связи и я отвечу на любые вопросы</p>

                  <div className="AdditionalServices__iconButton">
                    <img src="/img/whatsapp_blue.svg" alt="whatsapp" />
                    Whatsapp
                  </div>

                  <div className="AdditionalServices__iconButton">
                    <img src="/img/insta_blue.svg" alt="instagram" />
                    Instagram
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    )
  }
}

export default AdditionalServices
