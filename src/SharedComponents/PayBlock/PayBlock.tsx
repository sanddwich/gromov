import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactInputMask from 'react-input-mask'
import { connect } from 'react-redux'
import { Items } from '../../Interfaces/Items'
import { Receipt } from '../../Interfaces/Receipt'
import { TinkoffPay } from '../../Interfaces/TinkoffPay'
import { RootState } from '../../Redux'
import { setShowPaymentModal } from '../../Redux/actions/modal'
import { ModalState, OrderState } from '../../Redux/interfaces/interfaces'
import { sha256 } from 'js-sha256'

import './PayBlock.scss'
import Config from '../../Config/Config'

interface PayBlockProps {
  modal: ModalState
  order: OrderState
  setShowPaymentModal: (isActive: boolean) => void
}

interface PayBlockState {
  formData: {
    phone: string
    phoneValid: boolean
    email: string
    emailValid: boolean
    inputPhoneTouched: boolean
    inputEmailTouched: boolean
    minPhoneNumbers: number
    checkbox: boolean
    formValid: boolean
    agreeTouched: boolean
    agree: boolean
    showFormErrorMessage: boolean
    loading: boolean
  }
}

interface OrderData {
  email: string
  phone: string
  PaymentId: string
  itemName: string
  Token: string
}

class PayBlock extends React.Component<PayBlockProps, PayBlockState> {
  constructor(props: PayBlockProps) {
    super(props)
    this.state = {
      formData: {
        phone: '',
        phoneValid: false,
        email: '',
        emailValid: false,
        inputPhoneTouched: false,
        inputEmailTouched: false,
        minPhoneNumbers: 11,
        checkbox: true,
        formValid: false,
        agreeTouched: false,
        agree: false,
        showFormErrorMessage: false,
        loading: false,
      },
    }
  }

  payTinkoff = async (): Promise<any> => {
    const url: string = 'https://securepay.tinkoff.ru/v2/Init'
    const headers = {
      'Content-Type': 'application/json',
    }

    const payment: TinkoffPay = this.props.order.payment

    let Token: string = ''
    
    Token = Token.concat(
      payment.Amount.toString(),
      payment.Description,
      payment.OrderId,
      Config.TerminalPassword,
      Config.TerminalKey
    )
    // console.log(Token)
    Token = sha256(Token)
    // console.log(Token)

    payment.Token = Token

    if (payment.Receipt) {
      payment.Receipt.Email = this.state.formData.email
      payment.Receipt.Phone = this.state.formData.phone
    }

    // console.log(payment)

    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(payment),
    })

    const paymentResult = await res.json()

    console.log(paymentResult)

    if (paymentResult.PaymentId) {
      localStorage.setItem('payment', JSON.stringify(payment))

      // window.open(paymentResult.PaymentURL, '_self')
    } else {
      window.open(payment.FailURL, '_self')
    }
  }

  onClickHandler = async (): Promise<any> => {
    const url: string = 'https://securepay.tinkoff.ru/v2/Init'
    const headers = {
      'Content-Type': 'application/json',
    }

    const serviceName = 'Базовая тренировочная программа'
    const servicePrice = 900
    const serviceQuantity = 1

    // Items Массив позиций чека с информацией о товарах.
    const Items: Items[] = [
      {
        Amount: servicePrice * serviceQuantity,
        Name: serviceName,
        Price: servicePrice,
        Quantity: serviceQuantity,
        Tax: 'none',
      },
    ]

    // Receipt Массив данных чека.
    const Receipt: Receipt = {
      Email: 'bck-dkiselev@yandex.ru',
      Phone: '8-961-815-26-33',
      Taxation: 'usn_income',
      Items: Items,
    }

    // PaymentData
    const Payment: TinkoffPay = {
      TerminalKey: 'TinkoffBankTest',
      OrderId: new Date().valueOf().toString(),
      Amount: servicePrice * serviceQuantity,
      Description: 'Тестовый платеж',
      SuccessURL: '/successpay',
      FailURL: '/failpay',
      Receipt: Receipt,
    }

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers,
    //   body: JSON.stringify(Payment)
    // })

    // console.log(await res.json())
  }

  formButtonClick = (): void => {
    const formData = this.state.formData
    formData.inputEmailTouched = true
    formData.inputPhoneTouched = true
    formData.agreeTouched = true
    formData.emailValid = this.emailValidate(formData.email)
    formData.phoneValid = this.phoneValidate(formData.phone)
    formData.formValid = formData.emailValid && formData.phoneValid && formData.agree

    if (formData.formValid) {
      formData.loading = true
      this.payTinkoff()
    } else {
      formData.showFormErrorMessage = true
    }
    this.setState({ formData })
  }

  phoneValidate = (phone: string): boolean => {
    let filterPhone: string = ''
    filterPhone = filterPhone + phone.match(/\d/g)?.join('')
    if (filterPhone.length < this.state.formData.minPhoneNumbers) {
      return false
    } else {
      return true
    }
  }

  emailValidate = (email: string): boolean => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (!reg.test(email)) {
      return false
    } else {
      return true
    }
  }

  onEmailChange = (event: any): void => {
    const formData = this.state.formData
    formData.email = event.target.value
    !formData.inputEmailTouched && (formData.inputEmailTouched = true)
    formData.emailValid = this.emailValidate(formData.email)
    formData.showFormErrorMessage = false

    this.setState({ formData })
  }

  onPhoneChange = (event: any): void => {
    const formData = this.state.formData
    formData.phone = event.target.value
    !formData.inputPhoneTouched && (formData.inputPhoneTouched = true)
    formData.phoneValid = this.phoneValidate(formData.phone)
    formData.showFormErrorMessage = false

    this.setState({ formData })
  }

  checkboxHandler = (): void => {
    const formData = this.state.formData
    formData.agree = !formData.agree
    formData.agreeTouched = true
    formData.showFormErrorMessage = false
    this.setState({ formData })
  }

  render() {
    return (
      <Container fluid className="PayBlock m-0 p-0">
        <Row className="PayBlock__formHeader m-0 d-flex justify-content-center">
          <h1>{this.props.order.payment.Description}</h1>
        </Row>
        <Row className="PayBlock__descr m-0 d-flex justify-content-center">
          {this.props.order.payment.Receipt
            ? this.props.order.payment.Receipt.Items.map((item, index) => {
                if (this.props.order.payment.Description !== item.Name) {
                  return <div key={index}>{item.Name}</div>
                }
              })
            : null}
        </Row>
        <Row className="PayBlock__fieldsList m-0">
          <Col className="PayBlock__fieldsListCont">
            <div className="PayBlock__inputCont">
              <h3>Ваш E-mail</h3>
              <input
                type="email"
                className={`PayBlock__input ${
                  this.state.formData.inputEmailTouched
                    ? this.state.formData.emailValid
                      ? 'inputValid'
                      : 'inputInvalid'
                    : null
                } `}
                value={this.state.formData.email}
                placeholder="example@domain.com"
                name="email"
                onChange={(event) => this.onEmailChange(event)}
              />
              {this.state.formData.inputEmailTouched && !this.state.formData.emailValid ? (
                <small className="RequestFormModal__inputErrorMessage">Введите корректный email.</small>
              ) : null}
            </div>

            <div className="PayBlock__inputCont">
              <h3>Номер телефона</h3>
              <ReactInputMask
                mask="+7 (999) 999-99-99"
                className={`PayBlock__input ${
                  this.state.formData.inputPhoneTouched
                    ? this.state.formData.phoneValid
                      ? 'inputValid'
                      : 'inputInvalid'
                    : null
                } `}
                type="tel"
                name="phone"
                placeholder="+7 (___) ___-__-__"
                value={this.state.formData.phone}
                onChange={(event) => this.onPhoneChange(event)}
              />

              {this.state.formData.inputPhoneTouched && !this.state.formData.phoneValid ? (
                <small className="RequestFormModal__inputErrorMessage">Введите корректный телефонный номер.</small>
              ) : null}
            </div>
          </Col>
        </Row>
        <Row
          className={`PayBlock__checkboxRow m-0 ${
            this.state.formData.agreeTouched && !this.state.formData.agree ? 'checkBoxInvalid' : ''
          }`}
        >
          <Col
            xs={2}
            className="PayBlock__checkbox d-flex justify-content-center pt-2"
            onClick={() => this.checkboxHandler()}
          >
            <input
              key={this.state.formData.agree.toString()}
              className="PayBlock__check"
              type="checkbox"
              name="agree"
              checked={this.state.formData.agree}
              readOnly={true}
            />
          </Col>
          <Col xs={10} className="PayBlock__checkboxTitle">
            Я ознакомился с{' '}
            <a href="#" target="_blank">
              политикой использования персональных данных
            </a>{' '}
            и с{' '}
            <a href={`${Config.siteURL}/dogovor.pdf`} target="_blank">
              условиями договора на оказание услуг
            </a>
          </Col>
        </Row>
        <Row className="PayBlock__finalPriceCont d-flex justify-content-between align-items-center">
          <div className="PayBlock__finalPriceTitle">Стоимость</div>
          <div className="PayBlock__finalPrice">
            <span>{this.props.order.payment.Amount / 100}</span> Р
          </div>
        </Row>

        {this.state.formData.showFormErrorMessage ? (
          <Row className="PayBlock__formErrorMessage d-flex justify-content-center align-items-center">
            Заполните корректно все поля формы!
          </Row>
        ) : null}

        {this.state.formData.loading ? (
          <Row className="PayBlock__loading d-flex justify-content-center">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Row>
        ) : (
          <Row className="PayBlock__buttonCont" onClick={() => this.formButtonClick()}>
            <div
              className={`PayBlock__button w-100 d-flex justify-content-center align-items-center ${
                this.state.formData.agree ? 'active' : 'disabled'
              }`}
            >
              Купить сейчас
            </div>
          </Row>
        )}
      </Container>
    )
  }
}

const mapDispatchToProps = {
  setShowPaymentModal,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  const order = state.order
  return {
    modal,
    order,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PayBlock)
