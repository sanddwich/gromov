import React from 'react'
import { Container } from 'react-bootstrap'
import HelmetMetaTags from '../../../../SharedComponents/HelmetMetaTags/HelmetMetaTags'
import Achivements from './Achivements/Achivements'
import AdditionalServices from './AdditionalServices/AdditionalServices'
import Block1 from './Block1/Block1'
import Block10 from './Block10/Block10'
import Block11 from './Block11/Block11'
import Block2 from './Block2/Block2'
import Block3 from './Block3/Block3'
import Block4 from './Block4/Block4'
import Block5 from './Block5/Block5'
import Block6 from './Block6/Block6'
import Block7 from './Block7/Block7'
import Block8 from './Block8/Block8'
import Block9 from './Block9/Block9'
import Certificates from './Certificates/Certificates'
import ComplexBlock from './ComplexBlock/ComplexBlock'

import './Main.scss'

interface MainProps {}

interface MainState {}

class Main extends React.Component<MainProps, MainState> {
  render() {
    return (
      <Container fluid className="Main p-0">
        <HelmetMetaTags />

        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
        <Block7 />
        <Block8 />
        <Block9 />
        <Block10 />
        <Block11 />

        <Achivements />
        <Certificates />

        <ComplexBlock />

        <AdditionalServices />
      </Container>
    )
  }
}

export default Main
