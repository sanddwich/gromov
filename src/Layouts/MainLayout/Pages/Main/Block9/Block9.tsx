import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import _ from 'lodash'
import './Block9.scss'
import { Element } from 'react-scroll'

// Import Swiper React components
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import ReactPlayer from 'react-player'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay])

interface review {
  id: number
  img: string
  title: string
}

interface Block9Props {}

interface Block9State {
  reviews: review[]
  reviewsOnSlide: number
}

class Block9 extends React.Component<Block9Props, Block9State> {
  constructor(props: Block9Props) {
    super(props)
    this.state = {
      reviews: [
        { id: 0, img: 'img/block9__slide1.png', title: 'Отзыв №1' },
        { id: 1, img: 'img/block9__slide2.png', title: 'Отзыв №2' },
        { id: 2, img: 'img/block9__slide3.png', title: 'Отзыв №3' },
        { id: 3, img: 'img/block9__slide4.png', title: 'Отзыв №4' },
        { id: 4, img: 'img/block9__slide5.png', title: 'Отзыв №5' },
      ],
      reviewsOnSlide: 2,
    }
  }

  slideGeneretor = (): any => {
    const slidesArray = _.chunk(this.state.reviews, this.state.reviewsOnSlide)
    return slidesArray.map((slide, index) => {
      return (
        <SwiperSlide key={index}>
          <Container fluid className="Block9__slide">
            <Row className="d-flex justify-content-center">
              {slide.map((slideItem, index2) => {
                return (
                  <Col md={6} xs={12} key={slideItem.id} className="p-2">
                    <div className="Block9__slideItem d-flex align-items-center justify-content-center">
                      <h1>{slideItem.title}</h1>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </SwiperSlide>
      )
    })
  }

  render() {
    return (
      <Element name="Block9">
        <Container className="Block9 p-0">
          <h1>
            <p>Отзывы моих</p>учеников
          </h1>

          <Row className="Block9__descr d-flex align-items-center m-0">
            <Col xs={10} className="d-flex justify-content-center align-items-center">
              Для того, чтобы посмотреть все отзывы нажмите на кнопку плейлиста
            </Col>
            <Col xs={2} className="p-0 d-flex justify-content-center">
              <img src="/img/playlist.svg" alt="" />
            </Col>
          </Row>

          <Row className="Block9__Row m-0">
            <Col className="Block9__Col">
              <ReactPlayer
                // url="https://www.youtube.com/playlist?list=PLffwSWpMkQis_QJONjZyIV9Qf_Nc9B4fg"
                url={[
                  'https://www.youtube.com/watch?v=dvao7MDUQGw',
                  'https://www.youtube.com/watch?v=pHi43If-qp0',
                  'https://www.youtube.com/watch?v=lHLCX5DGqHA',
                  'https://www.youtube.com/watch?v=2FWK2hprFKg',
                  'https://www.youtube.com/watch?v=rxBI-9B39V4',
                  'https://www.youtube.com/watch?v=AcJAZNaY5BQ',
                ]}
                width="100%"
                height="100%"
                controls={true}
              />
            </Col>
          </Row>

          {/* <Swiper
            loop={true}
            navigation={{
              nextEl: '#NextArrow',
              prevEl: '#PrewArrow',
            }}
            slidesPerView={1}
          >
            {this.slideGeneretor()}
          </Swiper> */}
        </Container>
      </Element>
    )
  }
}

export default Block9
