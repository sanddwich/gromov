import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './BottomShadowBlock.scss'

interface BottomShadowBlockProps {
  image?: string
  imgAlt?: string
  bgColor: string
  shadowColor: string
  width?: string
  height?: string
  callWhatsapp?: () => void
}

interface BottomShadowBlockState {}

class BottomShadowBlock extends React.Component<BottomShadowBlockProps, BottomShadowBlockState> {
  render() {
    return (
      <Container
        fluid
        className="BottomShadowBlock p-0"
        style={{
          width: this.props.width ? this.props.width : '',
        }}
        onClick={() => this.props.callWhatsapp ? this.props.callWhatsapp() : null}
      >
        <Row
          className={`BottomShadowBlock__Button m-0 p-0 d-flex align-items-center ${
            this.props.image ? 'justify-content-start' : 'justify-content-center'
          }`}
          style={{
            backgroundColor: this.props.bgColor,
            height: this.props.height ? this.props.height : '',
          }}
        >
          {this.props.image ? (
            <Col xs={this.props.children ? 4 : 12} className="BottomShadowBlock__img p-0 h-100">
              <img
                // className="img-fluid"
                src={`${this.props.image ? this.props.image : 'img/defaultImg.png'}`}
                alt={`${this.props.imgAlt ? this.props.imgAlt : ''}`}
              />
            </Col>
          ) : null}

          {this.props.children ? (
            <Col
              xs={this.props.image ? 8 : 12}
              className={`BottomShadowBlock__text d-flex align-items-center h-100 ${
                !this.props.image ? 'justify-content-center' : ''
              }`}
              style={{
                padding: '10px',
              }}
            >
              {this.props.children}
            </Col>
          ) : null}
        </Row>
        <Row className="m-0 p-0 pl-2 pr-2 d-flex justify-content-center">
          <div className="BottomShadowBlock__Shadow m-0 p-0" style={{ backgroundColor: this.props.shadowColor }}></div>
        </Row>
      </Container>
    )
  }
}

export default BottomShadowBlock
