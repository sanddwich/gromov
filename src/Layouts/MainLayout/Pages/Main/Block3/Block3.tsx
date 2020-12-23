import React from 'react'
import { Container } from 'react-bootstrap'
import BeforeAfterBlock from '../../../../../SharedComponents/BeforeAfterBlock/BeforeAfterBlock'
import BottomShadowBlock from '../../../../../SharedComponents/BottomShadowBlock/BottomShadowBlock'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import IconButton from '../../../../../SharedComponents/IconButton/IconButton'
import MirrorHeader from '../../../../../SharedComponents/MirrorHeader/MirrorHeader'
import './Block3.scss'

interface Block3Props {}

interface Block3State {}

class Block3 extends React.Component<Block3Props, Block3State> {
  render() {
    return (
      <Container fluid className="Block3 p-0 d-flex align-items-center justify-content-center">
        {/* <BottomShadowBlock bgColor="#FF8585" shadowColor="#F45959" width="120px" image="img/defaultImg.png" /> */}
        {/* <DashedBorderBlock
          bgColor="#99CA35"
          border="none"
          color="#ffffff"
          padding="20px"
          borderRadius="15px"
          width="500px"
          height="300px"
          justifyContent="justify-content-center"
          boxShadow="0px 8px 10px #000000"
          // pluses={true}
        >
          Никаких диет, голоданий и ограни- чений провоцирующих срывы
          Никаких диет, голоданий и ограни- чений провоцирующих срывы
          Никаких диет, голоданий и ограни- чений провоцирующих срывы
          Никаких диет, голоданий и ограни- чений провоцирующих срывы
          Никаких диет, голоданий и ограни- чений провоцирующих срывы
          Никаких диет, голоданий и ограни- чений провоцирующих срывы
        </DashedBorderBlock> */}
        {/* <Container className="p-0">
          <MirrorHeader headerLeft="Каждый день одно и тоже" headerRight="вы находитесь в замкнутом кругу" />
        </Container> */}
        {/* <BeforeAfterBlock imgBefore="img/911.png" imgAfter="img/912.png" textVisible={true} /> */}
        <IconButton text="Whatsapp" textColor="#00B2FD" icon="img/whatsapp.png" width="300px" bold={true} borderRadius="8px" shadow="0px 8px 10px #000000" bgColor="#ffffff" />
      </Container>
    )
  }
}

export default Block3
