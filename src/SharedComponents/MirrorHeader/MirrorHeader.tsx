import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './MirrorHeader.scss'

interface MirrorHeaderProps {
  headerLeft: string
  headerRight: string
  leftBlocks?: number
  rightBlocks?: number
}

interface MirrorHeaderState {}

class MirrorHeader extends React.Component<MirrorHeaderProps, MirrorHeaderState> {
  render() {
    return (
      <Container fluid className="MirrorHeader p-0">
        <Row className="m-0 p-2">
          <Col md={this.props.leftBlocks ? this.props.leftBlocks : 6} className="MirrorHeader__Left m-0 p-0 d-flex align-items-center justify-content-start">
            {this.props.headerLeft}
          </Col>
          <Col md={this.props.rightBlocks ? this.props.rightBlocks : 6} className="MirrorHeader__Right m-0 p-0 d-flex align-items-center justify-content-end">
            {this.props.headerRight}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MirrorHeader
