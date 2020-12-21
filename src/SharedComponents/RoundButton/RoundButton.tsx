import React from 'react'
import { Container } from 'react-bootstrap'
import './RoundButton.scss'

interface RoundButtonProps {
  width: string
  icon: string
  buttonHandler: () => void
}

interface RoundButtonState {}

class RoundButton extends React.Component<RoundButtonProps, RoundButtonState> {
  render() {
    return (
      <Container fluid className="RoundButton p-0 d-flex justify-content-center align-items-center">
        <div
          className="RoundButton__cont"
          onClick={() => this.props.buttonHandler()}
          style={{
            width: `${this.props.width}`,
          }}
        >
          <img className="img-fluid" src={`${this.props.icon}`} alt="" />
        </div>
      </Container>
    )
  }
}

export default RoundButton
