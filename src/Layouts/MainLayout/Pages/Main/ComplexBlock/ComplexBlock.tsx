import React from 'react'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import { Element } from 'react-scroll'

import './ComplexBlock.scss'
import { Col, Row } from 'react-bootstrap'
import IconButton from '../../../../../SharedComponents/IconButton/IconButton'

interface ComplexBlockProps {}

interface ComplexBlockState {
  messangers: string[]
}

class ComplexBlock extends React.Component<ComplexBlockProps, ComplexBlockState> {
  constructor(props: ComplexBlockProps) {
    super(props)
    this.state = {
      messangers: ['https://www.instagram.com/victor__gromov/', 'https://api.whatsapp.com/send?phone=+79171874086'],
    }
  }

  onClickHandler = (element: number): void => {
    if (this.state.messangers[element]) {
      window.open(this.state.messangers[element])
    }
  }

  render() {
    return (
      <Element name="ComplexBlock">
        <div className="ComplexBlock container-lg ml-md-auto mr-md-auto p-0">
          <div className="ComplexBlock__stages">
            <h1>Эксклюзивный вариант «Комплексное ведение»</h1>
            <h4>1. Постановка целей</h4>
            <div className="row m-0 p-0">
              <div className="col-lg-6  col-12 m-0 p-0">
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #668E15"
                  color="#668E15"
                  width="100%"
                  pluses={false}
                  padding="15px 20px"
                >
                  Первый важный пункт из этого пакета - это постановка целей: амбициозные, достижимые, желанные. Это
                  важно
                </DashedBorderBlock>
              </div>

              <div className="col-lg-6 col-12  m-0 p-0">
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #668E15"
                  color="#668E15"
                  width="100%"
                  pluses={false}
                  padding="15px 20px"
                >
                  Мы формируем цели исходя из реальной картины, обязательно учитываются: временные интервалы,
                  производится контроль достижения целей и тут ни как не обойтись без психологической поддержкой от
                  тренера
                </DashedBorderBlock>
              </div>
            </div>
            <h4>2. питание</h4>
            <div className="row m-0 p-0">
              <div className="col-lg-6 col-12 m-0 p-0">
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #668E15"
                  color="#668E15"
                  width="100%"
                  pluses={false}
                  padding="15px 20px"
                >
                  Мы будем работать с вашими культурно- пищевыми ценностями, которые формировались на протяжении всей
                  вашей жизни. На их основе будет строиться ваш рацион
                </DashedBorderBlock>
              </div>

              <div className="col-lg-6 col-12 m-0 p-0">
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #668E15"
                  color="#668E15"
                  width="100%"
                  pluses={false}
                  padding="15px 20px"
                >
                  В формировании рациона принимаются во внимание и Ваши медицинские показания, мы скорректируем и
                  заменим продукты по необходимости
                </DashedBorderBlock>
              </div>
            </div>

            <div className="row m-0 p-0">
              <div className="col-lg-6 col-12 m-0 p-0">
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #668E15"
                  color="#668E15"
                  width="100%"
                  pluses={false}
                  padding="15px 20px"
                >
                  Предположим. У Вас плотный деловой график или Вы плотно занимаетесь семьей, это в принципе может быть
                  любой фактор из вашей жизне- деятельности, и времени может просто не хватать - Окей, не проблема,
                  адаптируем план питания под текущий ритм жизни. Говоря проще, не вы подстраиваетесь под план, а он
                  формируется под вас
                </DashedBorderBlock>
              </div>

              <div className="col-lg-6 col-12 m-0 p-0">
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #668E15"
                  color="#668E15"
                  width="100%"
                  pluses={false}
                  padding="15px 20px"
                >
                  Наше с вами взаимодействие предусматривает постойную поддержку с моей стороны. Я всегда на связи и при
                  любой непонятной ситуации скоординирую в верном направлении
                </DashedBorderBlock>
              </div>
            </div>

            <h4>3.физическая активность</h4>
            <div className="row m-0 p-0">
              <div className="col-lg-6 col-12 m-0 p-0">
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #668E15"
                  color="#668E15"
                  width="100%"
                  pluses={false}
                  padding="15px 20px"
                >
                  Для вас составляется индивидуальная тренировочная программа с учетом всех нюансов: здоровье, образ
                  жизни, деловая активность, быт, семья, время и так далее.
                </DashedBorderBlock>
              </div>

              <div className="col-lg-6 col-12 m-0 p-0">
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #668E15"
                  color="#668E15"
                  width="100%"
                  pluses={false}
                  padding="15px 20px"
                >
                  Важно, что программа формируется как для занятий в зале, так и для тренировок в домашних условиях или
                  для улицы.
                </DashedBorderBlock>
              </div>
            </div>

            <div className="row m-0 p-0">
              <div className="col-lg-6 col-12 m-0 p-0">
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #668E15"
                  color="#668E15"
                  width="100%"
                  pluses={false}
                  padding="15px 20px"
                >
                  В данном пакете Вам становятся доступны записи 600 роликов с детальным разбором каждого упражнения.
                </DashedBorderBlock>
              </div>

              <div className="col-lg-6 col-12 m-0 p-0">
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #668E15"
                  color="#668E15"
                  width="100%"
                  pluses={false}
                  padding="15px 20px"
                >
                  Я буду анализировать корректность техники выполнения упражнений по видео и вносить изменения в
                  программу по необходимости
                </DashedBorderBlock>
              </div>
            </div>
            <p>
              Помимо основных плюсов данного пакета, описанных выше, есть ещё много бонусов, которые Вы сможете
              использовать, став его счастливым обладателем
            </p>
          </div>

          <Row className="ComplexBlock__purchase m-0">
            <h4>как приобрести?</h4>
            <p>Выберите удобный канал связи и напишите “Комплексное ведение”</p>
            <Col xs={12} sm={6} className="ComplexBlock__buttonCont d-flex justify-content-sm-end justify-content-center">
              <div className="buttonCont">
                <IconButton
                  icon="/img/whatsapp_blue.svg"
                  text="Whatsapp"
                  textColor="#058DC7"
                  bgColor="#ffffff"
                  height="60px"
                  borderRadius="8px"
                  bold="600"
                  element={1}
                  clickHandler={this.onClickHandler}
                />
              </div>

              {/* <img src="/img/whatsapp_blue.svg" alt="whatsapp" />
                Whatsapp */}
            </Col>

            <Col xs={12} sm={6} className="ComplexBlock__buttonCont d-flex justify-content-sm-start justify-content-center">
              <div className="buttonCont">
                <IconButton
                  icon="/img/insta_blue.svg"
                  text="Instagram"
                  textColor="#058DC7"
                  bgColor="#ffffff"
                  height="60px"
                  borderRadius="8px"
                  bold="600"
                  element={0}
                  clickHandler={this.onClickHandler}
                />
              </div>

              {/* <img src="/img/insta_blue.svg" alt="instagram" />
                Instagram */}
            </Col>
          </Row>
        </div>
      </Element>
    )
  }
}

export default ComplexBlock
