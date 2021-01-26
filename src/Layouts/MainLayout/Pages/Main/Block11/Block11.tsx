import React from 'react'
import { Container } from 'react-bootstrap'
import './Block11.scss'

interface Block11Props {}

interface Block11State {}

class Block11 extends React.Component<Block11Props, Block11State> {
  render() {
    return (
      <Container className="Block11">
        <h1>Кто  я такой?</h1>
      </Container>
    )
  }
}

export default Block11