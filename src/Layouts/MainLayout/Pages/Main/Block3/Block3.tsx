import React from 'react'
import { Container } from 'react-bootstrap'
import BottomShadowBlock from '../../../../../SharedComponents/BottomShadowBlock/BottomShadowBlock'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import './Block3.scss'

interface Block3Props {}

interface Block3State {}

class Block3 extends React.Component<Block3Props, Block3State> {
  render() {
    return (
      <Container fluid className="Block3 p-0 d-flex align-items-center justify-content-center">
        {/* <BottomShadowBlock bgColor="#FF8585" shadowColor="#F45959" width="120px" image="img/defaultImg.png" /> */}
        <DashedBorderBlock
          bgColor="#99CA35"
          border="1px dashed #ffffff"
          color="#ffffff"
          padding="20px"
          // borderRadius="0 15px 0 15px"
          width="500px"
          pluses={true}
        >
          Никаких диет, голоданий и ограни- чений провоцирующих срывы
          Никаких диет, голоданий и ограни- чений провоцирующих срывы
          Никаких диет, голоданий и ограни- чений провоцирующих срывы
          Никаких диет, голоданий и ограни- чений провоцирующих срывы
          Никаких диет, голоданий и ограни- чений провоцирующих срывы
          Никаких диет, голоданий и ограни- чений провоцирующих срывы
        </DashedBorderBlock>
      </Container>
    )
  }
}

export default Block3
