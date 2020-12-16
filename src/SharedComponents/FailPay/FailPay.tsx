import React from 'react'
import { Container } from 'react-bootstrap'
import './FailPay.scss'

interface FailPayProps {}

interface FailPayState {}

class FailPay extends React.Component<FailPayProps, FailPayState> {
  render() {
    return (
      <Container fluid className="FailPay p-0">
        <h1 className="text-danger">FailPay</h1>
      </Container>
    )
  }
}

export default FailPay