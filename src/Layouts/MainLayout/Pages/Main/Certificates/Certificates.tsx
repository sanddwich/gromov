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
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
        '11.jpg',
        '12.jpg',
        '13.jpg',
        '14.jpg',
        '15.jpg',
        '16.jpg',
      ],
    }
  }

  render() {
    return (
      <Element name="Certificates">
        <Container className="Certificates d-block p-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            breakpoints={{
              992: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 10,
              }
            }}
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

        {/* <Container fluid className="Certificates__Mobile d-block d-md-none p-0">
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
          <Row className="Certificates__pagination m-0 d-flex justify-content-center pt-5">          
            <div className="swiper-paginationMobile"></div>  
          </Row>
        </Container> */}
      </Element>
    )
  }
}

export default Certificates
