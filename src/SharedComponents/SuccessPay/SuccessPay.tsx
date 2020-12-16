import React from 'react'
import { Container } from 'react-bootstrap'
import './SuccessPay.scss'

interface SuccessPayProps {}

interface SuccessPayState {}

class SuccessPay extends React.Component<SuccessPayProps, SuccessPayState> {
  render() {
    return (
      <Container fluid className="SuccessPay p-0">
        <h1 className="text-success">SuccessPay</h1>
      </Container>
    )
  }
}

export default SuccessPay