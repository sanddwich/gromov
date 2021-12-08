import React from 'react'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Element } from 'react-scroll'

import 'swiper/swiper.scss'

import './Certificates.scss'
import { Container, Row } from 'react-bootstrap'

interface CertificatesProps {}

interface CertificatesState {
  certificatesHorizontal: string[]
  certificatesVertical: string[]
}

class Certificates extends React.Component<CertificatesProps, CertificatesState> {
  constructor(props: CertificatesProps) {
    super(props)
    this.state = {
      certificatesHorizontal: [
        '17.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '11.jpg',
        '12.jpg',
        '13.jpg',
        '14.jpg',
        '15.jpg',
        '16.jpg',
      ],
      certificatesVertical: [
        '1.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
        '1.jpg',
        '2.jpg',
        '10.jpg',
      ],
    }
  }

  render() {
    return (
      <Element name="Certificates">
        <Container className="Certificates d-block p-0">
          <Swiper
            // spaceBetween={10}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            slidesPerView={1}
            breakpoints={{
              992: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          >
            {this.state.certificatesHorizontal.map((cert, index) => {
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

        <Container className="Certificates__two d-block p-0">
          <Swiper
            // spaceBetween={10}
            pagination={{ el: '.swiper-pagination2', clickable: true }}
            slidesPerView={1}
            breakpoints={{
              992: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          >
            {this.state.certificatesVertical.map((cert, index) => {
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
            <div className="swiper-pagination2"></div>
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
