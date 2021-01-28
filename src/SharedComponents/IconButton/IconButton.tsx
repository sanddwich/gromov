import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './IconButton.scss'

interface IconButtonProps {
  width?: string
  height?: string
  icon: string
  textColor: string
  text: string
  bgColor?: string
  shadow?: string
  bold?: any
  borderRadius?: string
}

interface IconButtonState {}

class IconButton extends React.Component<IconButtonProps, IconButtonState> {
  render() {
    return (
      <Container
        fluid
        className="IconButton p-0 d-flex justify-content-center align-items-center"
        style={{
          width: this.props.width ? this.props.width : '',
          height: this.props.height ? this.props.height : '',
          backgroundColor: this.props.bgColor ? this.props.bgColor : '#ffffff',
          boxShadow: this.props.shadow ? this.props.shadow : 'none',
          borderRadius: this.props.borderRadius ? this.props.borderRadius : '0px',
        }}
      >
          <div className="p-4 m-0 d-flex align-items-center justify-content-center">
            <div className="m-0 p-0 pr-2 d-flex align-items-center justify-content-center">
              <img className="img-fluid" src={this.props.icon} alt="" />
            </div>
            <div
              className="IconButton__text m-0 p-0 d-flex align-items-center justify-content-start"
              style={{
                color: this.props.textColor,
                fontWeight: this.props.bold ? 'bold' : 'normal',
              }}
            >
              {this.props.text}
            </div>
          </div>
      </Container>
    )
  }
}

export default IconButton
