import React from 'react'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Element } from 'react-scroll'

import 'swiper/swiper.scss'

import './Certificates.scss'
import { Container, Row } from 'react-bootstrap'

interface CertificatesProps {}

interface CertificatesState {
  certificates: string[]
}

class Certificates extends React.Component<CertificatesProps, CertificatesState> {
  constructor(props: CertificatesProps) {
    super(props)
    this.state = {
      certificates: [
        '2.jpeg',
        '3.jpeg',
        '4.jpeg',
        '5.jpeg',
        '6.jpeg',
        '7.jpeg',
        '8.jpeg',
        '9.jpeg',
        '10.jpeg',
        '11.jpeg',
        '12.jpeg',
        '13.jpeg',
        '14.jpeg',
        '15.jpeg',
        '16.jpeg',
        '17.jpeg',
      ],
    }
  }

  render() {
    return (
      <Element name="Certificates">
        <Container fluid className="Certificates d-none d-md-block p-0">
          <Swiper
            slidesPerView={2}
            // centeredSlides={true}
            // spaceBetween={20}
            pagination={{ el: '.swiper-pagination', clickable: true }}
          >
            {this.state.certificates.map((cert, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="Certificates__slide d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src={`/img/cert/${cert}`} alt="" />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Row className="Certificates__pagination m-0 d-flex justify-content-center pt-5">          
            <div className="swiper-pagination"></div>  
          </Row>
        </Container>

        <Container fluid className="Certificates__Mobile d-block d-md-none p-0">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={10}
            pagination={{ el: '.swiper-paginationMobile', clickable: true }}
          >
            {this.state.certificates.map((cert, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="Certificates__slide d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src={`/img/cert/${cert}`} alt="" />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Row className="Certificates__pagination d-flex justify-content-center pt-5">          
            <div className="swiper-paginationMobile"></div>  
          </Row>
        </Container>

      </Element>
    )
  }
}

export default Certificates
