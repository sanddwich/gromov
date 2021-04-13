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
import { Items } from '../../../../../Interfaces/Items'
import Config from '../../../../../Config/Config'
import { setShowPaymentModal } from '../../../../../Redux/actions/modal'

interface Program {
  name: string
  male?: boolean
  properties?: string[]
  propertiesSelectActive?: boolean
  activeProperty?: number
  price: number
}

interface AdditionalServicesProps {
  setShowPaymentModal: (isActive: boolean) => void
  setOrderPayment: (payment: TinkoffPay) => void
  order: OrderState
}

interface AdditionalServicesState {
  messangers: string[]
  programs: Program[]
}

class AdditionalServices extends React.Component<AdditionalServicesProps, AdditionalServicesState> {
  constructor(props: AdditionalServicesProps) {
    super(props)
    this.state = {
      messangers: ['https://www.instagram.com/victor__gromov/', 'https://api.whatsapp.com/send?phone=+79171874086'],
      programs: Config.programs,
    }
  }

  onClickHandler = (element: number): void => {
    if (this.state.messangers[element]) {
      window.open(this.state.messangers[element])
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
    // Items Массив позиций чека с информацией о товарах.
    const payment = this.props.order.payment

    const ItemsArray: Items[] = [
      {
        Amount: program.price * 100,
        Name: `${typeof program.male !== 'undefined' ? (program.male ? 'Мужская ' : 'Женская ') : ''}${
          program.properties && typeof program.activeProperty === 'number'
            ? program.properties[program.activeProperty]
            : program.name
        }`,
        Price: program.price * 100,
        Quantity: 1,
        Tax: Config.Tax,
      },
    ]

    if (payment.Receipt) payment.Receipt.Items = ItemsArray
    payment.Amount = program.price * 100
    // payment.Description = `${program.name} / ${ItemsArray.map(item => item.Name + ' / ')}`
    payment.Description = program.name
    payment.OrderId = new Date().valueOf().toString()

    this.props.setOrderPayment(payment)
    this.props.setShowPaymentModal(true)
  }

  render() {
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
                  Это список упражнений, который скоординирует вас в тренажёрном зале, дома или на улице.
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
                  травмоопасной.
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Данная программа является стандартной и универсальной без учёта индивидуальных параметров.
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
                  Эта тренировочная программа составляется с учётом ваших индивидуальных параметров и пожеланий,
                  например сброс веса или набор мышечной массы.
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  В ней принимается во внимание ритм жизни, рабочий график, а также возможные ограничения физических
                  нагрузок.
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Программа составляется для тренажёрного зала, домашних и уличных тренировок.
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Также сюда входит консультация (по видеосвязи или телефонному звонку), в ходе которой по необходимости
                  вносятся корректировки с учетом индивидуального прогресса.
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  В данном формате программы к каждому упражнению прикрепляется видеоинструкция с подробным описанием
                  техники выполнения.
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
                  Это базовые принципы сбалансированного, рационального, так называемого правильного питания.
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Это не диета, а фундаментальные правила, придерживаясь которых вы сможете самостоятельно составить
                  свой рацион питания для похудения или набора массы.
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  В данной программе присутствуют не только базовые рекомендации, но и конкретные примеры сочетания
                  продуктов в рационе и определенных блюд.
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Данная программа является стандартной и универсальной без учёта индивидуальных параметров.
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
                  Это не только базовые принципы сбалансированного, рационального, так называемого правильного питания.
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  В этой программе учитывается ваш график приёма пищи, индивидуальная непереносимость продуктов, пищевые
                  ограничения (например, при диабете или аллергии).
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  В этом варианте программы ведётся ежедневный учёт потребляемой вами еды в специальной форме. Также вы
                  получаете консультацию по видеосвязи или по телефону, в которой мы разбираем ваши записи и
                  корректируем ошибки.
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  В течение одной-двух недель составляется индивидуальная программа именно для вас.
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Главным преимуществом данной программы является её эффективность, т. к. она формируется исходя из
                  вашего рациона, а не методом «рекомендаций вслепую».
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  Также вы бонусом получаете файл с базовыми принципами питания с наиболее удачными сочетаниями
                  продуктов и примерами конкретных блюд.
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
                  Ответы на интересующие вопросы, выявление потребностей, сопоставление желаемого результата с
                  реальностью и образом жизни.
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
                  Подбор бадов и способа их применения с учетом ваших потребностей и задач.
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
                  Диагностика по анализам крови и рекомендации на основе полученного результата.
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
                  <p>на один из предложенных каналов связи и я отвечу на любые вопросы</p>

                  <div className="AdditionalServices__iconButton" onClick={() => this.onClickHandler(1)}>
                    <img src="/img/whatsapp_blue.svg" alt="whatsapp" />
                    Whatsapp
                  </div>

                  <div className="AdditionalServices__iconButton" onClick={() => this.onClickHandler(0)}>
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
  setShowPaymentModal,
}

const mapStateToProps = (state: RootState) => {
  const order = state.order
  return {
    order,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalServices)
