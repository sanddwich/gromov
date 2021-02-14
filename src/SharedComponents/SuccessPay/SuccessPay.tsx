import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Config from '../../Config/Config'
import './SuccessPay.scss'

interface SuccessPayProps {}

interface SuccessPayState {
  loading: boolean
}

interface RequestData {
  TerminalKey: string
  PaymentId: string
  Token: string
}

interface OrderData {
  email: string
  phone: string
  PaymentId: string
  Token: string
}

class SuccessPay extends React.Component<SuccessPayProps, SuccessPayState> {
  constructor(props: SuccessPayProps) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    const storage = localStorage.getItem('orderData')    

    if (storage) {
      const orderData = JSON.parse(storage)
      console.log(orderData)
      this.orderRequest(orderData)
    }
  }

  orderRequest = async (orderData: OrderData): Promise<any> => {
    const url: string = 'https://securepay.tinkoff.ru/v2/GetState'
    const headers = {
      'Content-Type': 'application/json',
    }

    const requestData: RequestData = {
      TerminalKey: Config.TerminalKey,
      PaymentId: orderData.PaymentId,
      Token: orderData.Token,
    }

    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestData),
    })

    const requestResult = await res.json()

    console.log(requestResult)
  }

  render() {
    return (
      <Container fluid className="SuccessPay p-5 d-flex justify-content-center align-items-center">
        {this.state.loading ? (
          <div className="SuccessPay__loading">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="SuccessPay__content">
            <Row className="SuccessPay__img m-0 d-flex justify-content-center">
              <img className="img-fluid" src="/img/success.png" alt="" />
            </Row>
            <Row className="SuccessPay__text m-0 pt-5">
              <h3 className="text-success text-center">
                Оплата прошла успешно! Благодарю за покупку! На указанный вами e-mail отправлена ссылка для доступа к
                продукту
              </h3>
            </Row>
            <Row className="SuccessPay__siteLink d-flex justify-content-center pt-3">
              <a href={`${Config.siteURL}`}>Перейти на сайт</a>
            </Row>
          </div>
        )}
      </Container>
    )
  }
}

export default SuccessPay
