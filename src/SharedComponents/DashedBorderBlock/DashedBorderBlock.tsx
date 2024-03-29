import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './DashedBorderBlock.scss'

interface DashedBorderBlockProps {
  bgColor: string
  width?: string
  height?: string
  pluses?: boolean
  borderRadius?: string
  padding?: string
  border: string
  color: string
  boxShadow?: string
  justifyContent?: string
}

interface DashedBorderBlockState {}

class DashedBorderBlock extends React.Component<DashedBorderBlockProps, DashedBorderBlockState> {
  render() {
    return (
      <Container
        fluid
        className="DashedBorderBlock d-flex justify-content-center"
        style={{
          color: this.props.color,
          width: this.props.width ? this.props.width : '',
          padding: this.props.padding ? this.props.padding : '0',
        }}
      >
        <div style={{width: '100%',}}>
          {this.props.pluses ? (
            <Row className="DashedBorderBlock__pluseLeft p-0 m-0 d-flex justify-content-start">+</Row>
          ) : null}

          <Row
            className={`DashedBorderBlock__content m-0 d-flex align-items-center ${
              this.props.justifyContent ? this.props.justifyContent : 'justify-content-start'
            }`}
            style={{
              height: this.props.height ? this.props.height : '',
              overflow: this.props.height ? 'hidden' : '',
              borderRadius: this.props.borderRadius ? this.props.borderRadius : '',
              backgroundColor: this.props.bgColor,
              border: this.props.border,
              boxShadow: this.props.boxShadow ? this.props.boxShadow : '',
            }}
          >
            {this.props.children}
          </Row>

          {this.props.pluses ? (
            <Row className="DashedBorderBlock__pluseRight p-0 m-0 d-flex justify-content-end">+</Row>
          ) : null}
        </div>
      </Container>
    )
  }
}

export default DashedBorderBlock
