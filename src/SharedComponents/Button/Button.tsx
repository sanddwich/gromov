import React from 'react'
import { Container } from 'react-bootstrap'
import './Button.scss'

interface ButtonProps {
  text: string
  buttonHandler: () => void
}

interface ButtonState {}

class Button extends React.Component<ButtonProps, ButtonState> {
  render() {
    return (
      <div onClick={this.props.buttonHandler} className="Button">
        {this.props.text}
      </div>
    )
  }
}

export default Button
