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
import { Program } from '../../../../../Interfaces/Program'

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

  setPropertySelectActive2 = (program: number, val: boolean): void => {
    const programs = this.state.programs
    programs[program].propertiesSelectActive2 = val
    this.setState({ programs })
  }

  setProp = (program: number, id: number): void => {
    const programs = this.state.programs
    programs[program].activeProperty = id
    this.setState({ programs })

    this.setPropertySelectActive(program, false)
  }
  
  setProp2 = (program: number, id: number): void => {
    const programs = this.state.programs
    programs[program].activeProperty2 = id
    this.setState({ programs })

    this.setPropertySelectActive2(program, false)
  }

  toggleProperties = (program: number): void => {
    const programs = this.state.programs
    programs[program].propertiesSelectActive = !programs[program].propertiesSelectActive
    this.setState({ programs })
  }
  
  toggleProperties2 = (program: number): void => {
    const programs = this.state.programs
    programs[program].propertiesSelectActive2 = !programs[program].propertiesSelectActive2
    this.setState({ programs })
  }

  buyProgramBytton = (programId: number): void => {
    const program: Program = this.state.programs[programId]
    // Items Массив позиций чека с информацией о товарах.
    const payment = this.props.order.payment

    let name = `${typeof program.male !== 'undefined' ? (program.male ? 'Мужская ' : 'Женская ') : ''}${
      program.properties && typeof program.activeProperty === 'number'
        ? program.properties[program.activeProperty]
        : program.name
    }`

    if (programId === 7 || programId === 8) {
      name = 'Комплексная ' + name
    } 

    const ItemsArray: Items[] = [
      {
        Amount: program.price * 100,
        Name: name,
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
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/1.png" alt="" />
                    Содержит список упражнений для занятий дома, на улице, в тренажёрном зале.
                  </div>
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/2.png" alt="" />
                    Безопасна и экономит ваше время.
                  </div>
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/3.png" alt="" />
                    Универсальна (без учета индивидуальных параметров).
                  </div>
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
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/4.png" alt="" />
                    Включает в себя базовые принципы правильного питания.
                  </div>
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/5.png" alt="" />
                    Не является диетой, но заключает в себе важные правила благодаря которым вы сможете самостоятельно
                    составить свой рацион для определенных целей.
                  </div>
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/6.png" alt="" />
                    Содержит конкретные примеры блюд и сочетания продуктов в рационе.
                  </div>
                </DashedBorderBlock>
                <DashedBorderBlock
                  bgColor="#ffffff"
                  border="1px dashed #058DC7"
                  color="#313131"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/7.png" alt="" />
                    Универсальна (без учета индивидуальных параметров).
                  </div>
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
          </div>

          <Container fluid className="DoubleCard">
            <Row className="DoubleCard__Row m-0">
              <Col xs={12} lg={6} className="DoubleCard__Col p-0 d-flex align-items-center justify-content-center">
                <div className="DoubleCard__title">
                  <h1>«База: Тренировки и питание»</h1>
                  <h3>Комбо</h3>
                  {/* <p>Содержит в себе все из курсов «базовая тренировочная программа» и «базовое питание»</p> */}
                </div>
              </Col>
              <Col xs={12} lg={6} className="DoubleCard__Col">
                <Container className="AdditionalServices__propsCont  p-0">
                  <Row className="AdditionalServices__sex m-0 d-flex justify-content-around">
                    <div
                      className="AdditionalServices__sexType d-flex align-items-center"
                      onClick={() => this.checkMale(7, true)}
                    >
                      <img
                        src={`${this.state.programs[7].male ? '/img/radio__true.svg' : '/img/radio__false.svg'}`}
                        alt=""
                      />
                      <span>Мужчине</span>
                    </div>
                    <div
                      className="AdditionalServices__sexType d-flex align-items-center"
                      onClick={() => this.checkMale(7, false)}
                    >
                      <img
                        src={`${this.state.programs[7].male ? '/img/radio__false.svg' : '/img/radio__true.svg'}`}
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
                          this.toggleProperties(7)
                        }}
                      >
                        <Col xs={9} className="AdditionalServices__selectValue p-0 d-flex align-items-center">
                          {this.state.programs[7].properties
                            ? this.state.programs[7].properties[
                                this.state.programs[7].activeProperty ? this.state.programs[7].activeProperty : 0
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

                      {this.state.programs[7].propertiesSelectActive ? (
                        <Row className="AdditionalServices__selectOptions m-0">
                          {this.state.programs[7].properties?.map((prop, index) => {
                            return (
                              <Container
                                fluid
                                className="AdditionalServices__selectOption p-0"
                                key={index}
                                onClick={() => this.setProp(7, index)}
                              >
                                {prop}
                              </Container>
                            )
                          })}
                        </Row>
                      ) : null}
                    </Container>
                  </Row>
                  {/* <Row className="AdditionalServices__select m-0">
                    <Container fluid className="AdditionalServices__styledSelect p-0">
                      <Row
                        className="m-0 mb-2 d-flex justify-content-between"
                        onClick={() => {
                          this.toggleProperties2(7)
                        }}
                      >
                        <Col xs={9} className="AdditionalServices__selectValue p-0 d-flex align-items-center">
                          {this.state.programs[7].properties2
                            ? this.state.programs[7].properties2[
                                this.state.programs[7].activeProperty2 ? this.state.programs[7].activeProperty2 : 0
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

                      {this.state.programs[7].propertiesSelectActive2 ? (
                        <Row className="AdditionalServices__selectOptions m-0">
                          {this.state.programs[7].properties2?.map((prop, index) => {
                            return (
                              <Container
                                fluid
                                className="AdditionalServices__selectOption p-0"
                                key={index}
                                onClick={() => this.setProp2(7, index)}
                              >
                                {prop}
                              </Container>
                            )
                          })}
                        </Row>
                      ) : null}
                    </Container>
                  </Row> */}
                </Container>
                <PriceBlock theme="light" oldPrice={this.state.programs[7].oldPrice + ' р'} price={this.state.programs[7].price + ' р'} />
                <Button text="Купить сейчас" buttonHandler={() => this.buyProgramBytton(7)} />
              </Col>
            </Row>
          </Container>

          <div className="row m-0 p-0">
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
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/8.png" alt="" />
                    Составляется с учётом индивидуальных параметров и пожеланий.
                  </div>
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/9.png" alt="" />
                    Учитывает ваш ритм жизни, факторы занятости и медицинские показатели.
                  </div>
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/10.png" alt="" />
                    Подходит для тренировок дома, на улице, в тренажерном зале.
                  </div>
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/11.png" alt="" />
                    Включает в себя консультацию по телефону или видеосвязи.
                  </div>
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/12.png" alt="" />
                    Содержит видеоинструкцию с техникой выполнения для каждого упражнения.
                  </div>
                </DashedBorderBlock>

                <PriceBlock theme="dark" price={this.state.programs[1].price + ' р'} />
                <Button text="Купить сейчас" buttonHandler={() => this.buyProgramBytton(1)} />
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
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/13.png" alt="" />
                    Содержит базовые принципы правильного питания.
                  </div>
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/14.png" alt="" />
                    Учитывает ваш график приема пищи и любые пищевые ограничения.
                  </div>
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/15.png" alt="" />
                    Предполагает сбор информации о вашем рационе, в специальной форме.
                  </div>
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/16.png" alt="" />
                    Индивидуальная программа составляется в течение одной-двух недель.
                  </div>
                </DashedBorderBlock>

                <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/17.png" alt="" />
                    Формируется исходя из вашего рациона, и потому наиболее эффективна.
                  </div>
                </DashedBorderBlock>

                {/* <DashedBorderBlock
                  bgColor="#00A4E9"
                  border="1px dashed #FFFFFF"
                  color="#ffffff"
                  width="100%"
                  pluses={false}
                  padding="15px 0"
                >
                  <div className="AdditionalServices__cardCont d-flex align-items-center">
                    <img className="img-fluid" src="/img/icons/18.png" alt="" />В качестве бонуса включает в себя файл с
                    базовыми принципами питания, удачными сочетаниями пррдуктов, примерами конкретных блюд.
                  </div>
                </DashedBorderBlock> */}

                <PriceBlock theme="dark" price={this.state.programs[3].price + ' р'} />
                <Button text="Купить сейчас" buttonHandler={() => this.buyProgramBytton(3)} />
              </div>
            </div>
          </div>

          <Container fluid className="DoubleCard">
            <Row className="DoubleCard__Row m-0" style={{backgroundColor: '#058DC7'}}>
              <Col lg={6} className="DoubleCard__Col p-0 d-flex align-items-center justify-content-center">
                <div className="DoubleCard__title">
                  <h1 style={{color: '#ffffff'}}>«Персонально: Тренировки и питание»</h1>
                  <h3 style={{color: '#ffffff'}}>Комбо</h3>
                  {/* <p style={{color: '#ffffff'}}>Содержит в себе все из курсов «базовая тренировочная программа» и «базовое питание»</p> */}
                </div>
              </Col>
              <Col lg={6} className="DoubleCard__Col">
                <Container className="AdditionalServices__propsCont  p-0">
                  <Row className="AdditionalServices__sex m-0 d-flex justify-content-around">
                    <div
                      className="AdditionalServices__sexType d-flex align-items-center"
                      onClick={() => this.checkMale(8, true)}
                    >
                      <img
                        src={`${this.state.programs[8].male ? '/img/radio__true.svg' : '/img/radio__false.svg'}`}
                        alt=""
                      />
                      <span>Мужчине</span>
                    </div>
                    <div
                      className="AdditionalServices__sexType d-flex align-items-center"
                      onClick={() => this.checkMale(8, false)}
                    >
                      <img
                        src={`${this.state.programs[8].male ? '/img/radio__false.svg' : '/img/radio__true.svg'}`}
                        alt=""
                      />
                      <span>Женщине</span>
                    </div>
                  </Row>                  
                </Container>
                <PriceBlock theme="dark" oldPrice={this.state.programs[8].oldPrice + ' р'} price={this.state.programs[8].price + ' р'} />
                <Button text="Купить сейчас" buttonHandler={() => this.buyProgramBytton(8)} />
              </Col>
            </Row>
          </Container>

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

                  <div className="AdditionalServices__iconButton" onClick={() => Config.goToWhattsApp()}>
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
