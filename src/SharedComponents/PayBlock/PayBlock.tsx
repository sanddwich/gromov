import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ReactInputMask from 'react-input-mask'
import { Items } from '../../Interfaces/Items'
import { Receipt } from '../../Interfaces/Receipt'
import { TinkoffPay } from '../../Interfaces/TinkoffPay'

import './PayBlock.scss'

interface PayBlockProps {}

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
  }
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
      },
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
    formData.formValid = this.phoneValidate(formData.phone)
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

    this.setState({ formData })
  }

  onPhoneChange = (event: any): void => {
    const formData = this.state.formData
    formData.phone = event.target.value
    !formData.inputPhoneTouched && (formData.inputPhoneTouched = true)
    formData.phoneValid = this.phoneValidate(formData.phone)

    this.setState({ formData })
  }

  render() {
    return (
      <Container fluid className="PayBlock m-0 p-0">
        <h1>Заполните поля формы:</h1>
        <div className="PayBlock__inputCont">
          <ReactInputMask
            mask="+7 (999) 999-99-99"
            className={`PayBlock__input ${
              this.state.formData.inputPhoneTouched ? (this.state.formData.phoneValid ? 'inputValid' : 'inputInvalid') : null
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

        <div className="PayBlock__inputCont">
          <input
            type="email"
            className={`PayBlock__input ${
              this.state.formData.inputEmailTouched ? (this.state.formData.emailValid ? 'inputValid' : 'inputInvalid') : null
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
      </Container>
    )
  }
}

export default PayBlock
