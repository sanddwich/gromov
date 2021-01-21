import React from 'react'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.scss'

import './Certificates.scss'

interface CertificatesProps {}

interface CertificatesState {}

class Certificates extends React.Component<CertificatesProps, CertificatesState> {
  render() {
    return (
      <div className="Certificates container-lg">
        <Swiper spaceBetween={40} slidesPerView={3}>
          <SwiperSlide>
            <div className="Certificates__slide"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Certificates__slide"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Certificates__slide"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Certificates__slide"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    )
  }
}

export default Certificates
