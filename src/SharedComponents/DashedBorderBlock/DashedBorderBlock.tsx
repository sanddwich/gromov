import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
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
          padding: this.props.padding ? this.props.padding : '0',
        }}
      >
        <div>
          {this.props.pluses ? <Row className="DashedBorderBlock__pluseLeft p-0 m-0 d-flex justify-content-start">+</Row> : null}

          <Row
            className="DashedBorderBlock__content m-0 d-flex align-items-center"
            style={{
              width: this.props.width ? this.props.width : '',
              height: this.props.height ? this.props.height : '',
              overflow: this.props.height ? 'hidden' : '',
              borderRadius: this.props.borderRadius ? this.props.borderRadius : '',
              backgroundColor: this.props.bgColor,
              border: this.props.border,
            }}
          >
            {this.props.children}
          </Row>

          {this.props.pluses ? <Row className="DashedBorderBlock__pluseRight p-0 m-0 d-flex justify-content-end">+</Row> : null}
        </div>
      </Container>
    )
  }
}

export default DashedBorderBlock
