import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './BeforeAfterBlock.scss'

interface BeforeAfterBlockProps {
  imgBefore: string
  imgAfter: string
  textVisible?: boolean
  textBefore?: string
  textAfter?: string
  colorBefore?: string
  colorAfter?: string
  width?: string
}

interface BeforeAfterBlockState {}

class BeforeAfterBlock extends React.Component<BeforeAfterBlockProps, BeforeAfterBlockState> {
  render() {
    return (
      <Container fluid className="BeforeAfterBlock p-0 d-flex justify-content-center align-items-center">
        <div style={{width: this.props.width ? this.props.width : '100%'}}>
          <Row className="BeforeAfterBlock__images m-0 p-0">
            <Col xs={6} className="BeforeAfterBlock__imgBefore m-0 p-0">
              <img className="img-fluid hvr-grow-shadow" src={this.props.imgBefore} alt="" />
            </Col>
            <Col xs={6} className="BeforeAfterBlock__imgAfter m-0 p-0">
              <img className="img-fluid hvr-grow-shadow" src={this.props.imgAfter} alt="" />
            </Col>
          </Row>
          {this.props.textVisible ? (
            <Row className="BeforeAfterBlock__texts m-0 p-0">
              <Col
                xs={6}
                className="m-0 p-0 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: this.props.colorBefore ? this.props.colorBefore : '#FF8585',
                  borderRadius: '0 0 0 8px',
                }}
              >
                до
              </Col>
              <Col
                xs={6}
                className="m-0 p-0 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: this.props.colorBefore ? this.props.colorBefore : '#99CA35',
                  borderRadius: '0 0 8px 0',
                }}
              >
                после
              </Col>
            </Row>
          ) : null}
        </div>
      </Container>
    )
  }
}

export default BeforeAfterBlock
