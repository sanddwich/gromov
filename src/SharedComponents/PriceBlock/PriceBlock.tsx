import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './PriceBlock.scss'

interface PriceBlockProps {
  theme: 'dark' | 'light'
  price: string
}

interface PriceBlockState {}

class PriceBlock extends React.Component<PriceBlockProps, PriceBlockState> {
  render() {
    return (
      <div className="PriceBlock">
        <div className="PriceBlock__title">Стоимость</div>

        <div className="PriceBlock__price">{this.props.price}</div>
      </div>
    )
  }
}

export default PriceBlock
