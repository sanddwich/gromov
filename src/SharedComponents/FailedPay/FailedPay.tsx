import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Config from '../../Config/Config'
import './FailedPay.scss'

interface FailedPayProps {}

interface FailedPayState {}

class FailedPay extends React.Component<FailedPayProps, FailedPayState> {
  render() {
    return (
      <Container fluid className="FailedPay p-5 d-flex justify-content-center align-items-center">
        <div className="FailedPay__content">
          <Row className="FailedPay__img d-flex justify-content-center">
            <img className="img-fluid" src="/img/error.png" alt="" />
          </Row>
          <Row className="FailedPay__text pt-5">
            <h3 className="text-danger text-center">Оплата не прошла!</h3>
          </Row>          
          <Row className="FailedPay__siteLink d-flex justify-content-center pt-3">
            <a href={`${Config.siteURL}`}>Перейти на сайт</a>
          </Row>
        </div>
      </Container>
    )
  }
}

export default FailedPay
