import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Config from '../../Config/Config'
import { TinkoffPay } from '../../Interfaces/TinkoffPay'
import './SuccessPay.scss'

interface SuccessPayProps {}

interface SuccessPayState {
  loading: boolean
  defaultLink: Link
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
      defaultLink: {
        name: '',
        pass: '',
        url: '',
      },
    }
  }

  componentDidMount() {
    const storage = localStorage.getItem('payment')

    if (storage) {
      const payment: TinkoffPay = JSON.parse(storage)

      this.orderRequest(payment)
    } else {
      // alert(Config.FailURL)
      window.open(Config.FailURL, '_self')
    }
  }

  orderRequest = async (payment: TinkoffPay): Promise<any> => {
    const url: string = 'https://securepay.tinkoff.ru/v2/Init'
    const headers = {
      'Content-Type': 'application/json',
    }

    // console.log(payment)

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(payment),
      })

      const requestResult = await res.json()

      // console.log(requestResult)

      localStorage.removeItem('payment')

      if (!requestResult.Success && requestResult.ErrorCode === '8') {
        try {
          const link: Link =
            Config.links.find((link) => link.name === (payment.Receipt ? payment.Receipt.Items[0].Name : '')) ||
            this.state.defaultLink

          const formData = {
            email: payment.Receipt?.Email,
            phone: payment.Receipt?.Phone,
            name: payment.Description,
            gromovMail: Config.gromovMail,
            pass: link.pass,
            url: link.url,
            siteURL: Config.siteURL,
          }

          // console.log(formData)

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

          console.log(mailRequestResult)

          if (mailRequestResult !== 'error') {
            console.log('SUCCESS')
          } else {
            console.log('ERROR')
            window.open(Config.FailURL, '_self')
          }

          this.setState({ loading: false })
        } catch (e) {
          console.log(e)
        }
      } else {
        window.open(Config.FailURL, '_self')
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
            <Row className="SuccessPay__text m-0 pt-5 d-flex justify-content-center">
              <h3 className="text-success text-center">
                Оплата прошла успешно! Благодарю за покупку! На указанный вами E-mail придет информационное письмо по
                приобретаемому продукту.
              </h3>
              <h3 className="text-danger text-center">Если письмо не попало в почтовый ящик, проверьте папку "СПАМ"</h3>
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
