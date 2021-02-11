import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../../../../../SharedComponents/Button/Button'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import PriceBlock from '../../../../../SharedComponents/PriceBlock/PriceBlock'
import RoundButton from '../../../../../SharedComponents/RoundButton/RoundButton'
import './AdditionalServices.scss'
import { Element } from 'react-scroll'
import { TinkoffPay } from '../../../../../Interfaces/TinkoffPay'
import { connect } from 'react-redux'
import { RootState } from '../../../../../Redux'
import { setOrderPayment } from '../../../../../Redux/actions/order'
import { OrderState } from '../../../../../Redux/interfaces/interfaces'

interface Program {
  name: string
  male?: boolean
  properties?: string[]
  propertiesSelectActive?: boolean
  activeProperty?: number
  description?: string
  price: number
}

interface AdditionalServicesProps {
  setOrderPayment: (payment: TinkoffPay) => void
  order: OrderState
}

interface AdditionalServicesState {
  programs: Program[]
}

class AdditionalServices extends React.Component<AdditionalServicesProps, AdditionalServicesState> {
  constructor(props: AdditionalServicesProps) {
    super(props)
    this.state = {
      programs: [
        {
          name: '«Базовая тренировочная программа»',
          price: 900,
          male: true,
          description: 'Данная программа является стандартной и универсальной, без учета индивидуальных параметров',
          properties: [
            'программа с акцентом на похудение, для тренажерного зала',
            'программа с акцентом на набор мышечной массы, для тренажерного зала',
            'программа для дома & улицы  с акцентом на похудение',
            'программа для дома & улицы с акцентом на набор мышечной массы',
          ],
          propertiesSelectActive: false,
          activeProperty: 0,
        },
        {
          name: '«Персональная тренировочная программа»',
          price: 2500,
        },
        {
          name: '«Базовое питание»',
          price: 900,
          properties: ['Cнижения веса', 'Набор веса'],
          propertiesSelectActive: false,
          activeProperty: 0,
        },
        {
          name: 'Культура питания «персонально»',
          price: 2700,
        },
        {
          name: 'Онлайн-Консультация',
          price: 1500,
        },
        {
          name: 'Подбор бадов',
          price: 900,
        },
        {
          name: 'Диагностика',
          price: 900,
        },
      ],
    }
  }

  checkMale = (program: number, val: boolean): void => {
    const programs = this.state.programs
    programs[program].male = val
    this.setState({ programs })
  }

  setPropertySelectActive = (program: number, val: boolean): void => {
    const programs = this.state.programs
    programs[program].propertiesSelectActive = val
    this.setState({ programs })
  }

  setProp = (program: number, id: number): void => {
    const programs = this.state.programs
    programs[program].activeProperty = id
    this.setState({ programs })

    this.setPropertySelectActive(program, false)
  }

  toggleProperties = (program: number): void => {
    const programs = this.state.programs
    programs[program].propertiesSelectActive = !programs[program].propertiesSelectActive
    this.setState({ programs })
  }

  buyProgramBytton = (programId: number): void => {
    const program: Program = this.state.programs[programId]
    console.log(this.props.order)
  }

  render() {
    const activeProperty = this.state
    return (
      <Element name="AdditionalServices">
        <div className="AdditionalServices container-lg p-0 m-md-auto m-0">
          <div className="row m-0 p-0">
            <div className="col-lg-6 m-0 p-0">
              <div className="AdditionalServices__card gray">
                <h2>{this.state.programs[0].name}</h2>
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

                <Container className="AdditionalServices__propsCont p-0">
                  <Row className="AdditionalServices__sex m-0 d-flex justify-content-around">
                    <div
                      className="AdditionalServices__sexType d-flex align-items-center"
                      onClick={() => this.checkMale(0, true)}
                    >
                      <img
                        src={`${this.state.programs[0].male ? '/img/radio__true.svg' : '/img/radio__false.svg'}`}
                        alt=""
                      />
                      <span>Мужчине</span>
                    </div>
                    <div
                      className="AdditionalServices__sexType d-flex align-items-center"
                      onClick={() => this.checkMale(0, false)}
                    >
                      <img
                        src={`${this.state.programs[0].male ? '/img/radio__false.svg' : '/img/radio__true.svg'}`}
                        alt=""
                      />
                      <span>Женщине</span>
                    </div>
                  </Row>
                  <Row className="AdditionalServices__select m-0">
                    <Container fluid className="AdditionalServices__styledSelect p-0">
                      <Row
                        className="m-0 mb-2 d-flex justify-content-between"
                        onClick={() => {
                          this.toggleProperties(0)
                        }}
                      >
                        <Col xs={9} className="AdditionalServices__selectValue p-0 d-flex align-items-center">
                          {this.state.programs[0].properties
                            ? this.state.programs[0].properties[
                                this.state.programs[0].activeProperty ? this.state.programs[0].activeProperty : 0
                              ]
                            : ''}
                        </Col>
                        <Col
                          xs={3}
                          className="AdditionalServices__selectArrow p-0 d-flex align-items-center justify-content-end"
                        >
                          <img className="img-fluid" src="/img/select__arrow.svg" alt="" />
                        </Col>
                      </Row>

                      {this.state.programs[0].propertiesSelectActive ? (
                        <Row className="AdditionalServices__selectOptions m-0">
                          {this.state.programs[0].properties?.map((prop, index) => {
                            return (
                              <Container
                                fluid
                                className="AdditionalServices__selectOption p-0"
                                key={index}
                                onClick={() => this.setProp(0, index)}
                              >
                                {prop}
                              </Container>
                            )
                          })}
                        </Row>
                      ) : null}
                    </Container>
                  </Row>
                </Container>

                <PriceBlock theme="light" price={this.state.programs[0].price + ' р'} />
                <Button text="Купить сейчас" buttonHandler={() => this.buyProgramBytton(0)} />
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

                <PriceBlock theme="dark" price={this.state.programs[1].price + ' р'} />
                <Button text="Купить сейчас" buttonHandler={() => this.buyProgramBytton(1)} />
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

                <Container className="AdditionalServices__propsCont p-0">
                  <Row className="AdditionalServices__select m-0">
                    <Container fluid className="AdditionalServices__styledSelect p-0">
                      <Row
                        className="m-0 mb-2 d-flex justify-content-between"
                        onClick={() => {
                          this.toggleProperties(2)
                        }}
                      >
                        <Col xs={9} className="AdditionalServices__selectValue p-0 d-flex align-items-center">
                          {this.state.programs[2].properties
                            ? this.state.programs[2].properties[
                                this.state.programs[2].activeProperty ? this.state.programs[2].activeProperty : 0
                              ]
                            : ''}
                        </Col>
                        <Col
                          xs={3}
                          className="AdditionalServices__selectArrow p-0 d-flex align-items-center justify-content-end"
                        >
                          <img className="img-fluid" src="/img/select__arrow.svg" alt="" />
                        </Col>
                      </Row>

                      {this.state.programs[2].propertiesSelectActive ? (
                        <Row className="AdditionalServices__selectOptions m-0">
                          {this.state.programs[2].properties?.map((prop, index) => {
                            return (
                              <Container
                                fluid
                                className="AdditionalServices__selectOption p-0"
                                key={index}
                                onClick={() => this.setProp(2, index)}
                              >
                                {prop}
                              </Container>
                            )
                          })}
                        </Row>
                      ) : null}
                    </Container>
                  </Row>
                </Container>

                <PriceBlock theme="light" price={this.state.programs[2].price + ' р'} />
                <Button text="Купить сейчас" buttonHandler={() => this.buyProgramBytton(2)} />
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

                <PriceBlock theme="dark" price={this.state.programs[3].price + ' р'} />
                <Button text="Купить сейчас" buttonHandler={() => this.buyProgramBytton(3)} />
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
                <PriceBlock theme="light" price={this.state.programs[4].price + ' р/час'} />
                <Button text="Купить сейчас" buttonHandler={() => this.buyProgramBytton(4)} />
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
                <PriceBlock theme="light" price={this.state.programs[5].price + ' р'} />
                <Button text="Купить сейчас" buttonHandler={() => this.buyProgramBytton(5)} />
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
                <PriceBlock theme="light" price={this.state.programs[6].price + ' р'} />
                <Button text="Купить сейчас" buttonHandler={() => this.buyProgramBytton(6)} />
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

const mapDispatchToProps = {
  setOrderPayment,
}

const mapStateToProps = (state: RootState) => {
  const order = state.order
  return {
    order,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalServices)
