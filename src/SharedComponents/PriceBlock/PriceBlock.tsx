import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './PriceBlock.scss'

interface PriceBlockProps {
  theme: 'dark' | 'light'
  price: string
  oldPrice?: string
}

interface PriceBlockState {}

class PriceBlock extends React.Component<PriceBlockProps, PriceBlockState> {
  render() {
    return (
      <div className={`PriceBlock ${this.props.theme === 'dark' ? 'dark' : ''}`}>
        <div className="PriceBlock__title">Стоимость</div>

        <div className="PriceBlock_prices d-flex">
          {this.props.oldPrice && (
            <div className="PriceBlock__oldPrice" style={{color: this.props.theme === "dark" ? '#DCDCDC' : '#9d9e9e'}}>
              <div>{this.props.oldPrice}</div>
              <div className="PriceBlock__oldPriceLine"></div>
            </div>
          )}

          <div className="PriceBlock__price">{this.props.price}</div>
        </div>
      </div>
    )
  }
}

export default PriceBlock
