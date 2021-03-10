import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Config from '../../Config/Config'
import { TinkoffPay } from '../../Interfaces/TinkoffPay'
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

interface Link {
  name: string
  url: string
  pass: string
}

class SuccessPay extends React.Component<SuccessPayProps, SuccessPayState> {
  constructor(props: SuccessPayProps) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    const storage = localStorage.getItem('payment')

    if (storage) {
      const payment: TinkoffPay = JSON.parse(storage)

      this.orderRequest(payment)
    }
  }


  orderRequest = async (payment: TinkoffPay): Promise<any> => {
    const url: string = 'https://securepay.tinkoff.ru/v2/Init'
    const headers = {
      'Content-Type': 'application/json',
    }

    console.log(payment)

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(payment),
      })

      const requestResult = await res.json()

      // console.log(requestResult)

      if (!requestResult.Success && requestResult.ErrorCode === '8') {
        try {
          const formData = {
            email: payment.Receipt?.Email,
            phone: payment.Receipt?.Phone,
          }

          const link: Link = Config.links.map(link => link.name === payment.Receipt?.Items[0].Name)

          const mailUrl: string = '/api/index.php'

          const mailRes = await fetch(mailUrl, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': formData.toString().length.toString(),
            },
          })

          const mailRequestResult = await mailRes.json()

          if (mailRequestResult !== 'error') {
            console.log('SUCCESS')
          } else {
            console.log('ERROR')
          }

        } catch (e) {
          console.log(e)
        }
      } else {
        window.open(payment.FailURL, '_self')
      }

    } catch (e) {
      console.log(e)
    }
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
