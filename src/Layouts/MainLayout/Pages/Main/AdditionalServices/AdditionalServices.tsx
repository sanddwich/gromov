import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../../../../../SharedComponents/Button/Button'
import DashedBorderBlock from '../../../../../SharedComponents/DashedBorderBlock/DashedBorderBlock'
import PriceBlock from '../../../../../SharedComponents/PriceBlock/PriceBlock'
import RoundButton from '../../../../../SharedComponents/RoundButton/RoundButton'
import './AdditionalServices.scss'

interface AdditionalServicesProps {}

interface AdditionalServicesState {}

class AdditionalServices extends React.Component<AdditionalServicesProps, AdditionalServicesState> {
  render() {
    return (
      <div className="AdditionalServices container-lg p-0 m-md-auto m-0">
        <h1>Дополнительные услуги</h1>

        <div className="row m-0 p-0">
          <div className="col-lg-6 m-0 p-0">
            <div className="AdditionalServices__card gray">
              <h2>Онлайн-Консультация</h2>
              <DashedBorderBlock
                bgColor="#ffffff"
                border="1px dashed #058DC7"
                color="#313131"
                width="100%"
                pluses={false}
              >
                Ответы на интересующие вопросы, выявление потребностей, сопоставление желаемого результата с реалиями
                жизнедеятельности
              </DashedBorderBlock>
              <PriceBlock theme="light" price={'1 500 р/час'} />
              <Button text="Купить сейчас" buttonHandler={() => console.log(111)} />
            </div>
          </div>
          <div className="col-lg-6 m-0 p-0">
            <div className="AdditionalServices__card gray">
              <h2>Подбор бадов</h2>
              <DashedBorderBlock
                bgColor="#ffffff"
                border="1px dashed #058DC7"
                color="#313131"
                width="100%"
                pluses={false}
              >
                Подбор бадов и способ их применения, учитывая ваши потребности и задачи
              </DashedBorderBlock>
              <PriceBlock theme="light" price={'900 р'} />
              <Button text="Купить сейчас" buttonHandler={() => console.log(111)} />
            </div>
          </div>
        </div>
        <div className="row m-0 p-0">
          <div className="col-lg-6 m-0 p-0">
            <div className="AdditionalServices__card gray">
              <h2>Диагностика</h2>
              <DashedBorderBlock
                bgColor="#ffffff"
                border="1px dashed #058DC7"
                color="#313131"
                width="100%"
                pluses={false}
              >
                Диагностика по анализам крови и рекомендации на основе полученного результата
              </DashedBorderBlock>
              <PriceBlock theme="light" price={'900 р'} />
              <Button text="Купить сейчас" buttonHandler={() => console.log(111)} />
            </div>
          </div>
          <div className="col-lg-6 m-0 p-0">
            <div style={{ backgroundImage: 'url(/img/contacts_photo.png)' }} className="AdditionalServices__card green">
              <div className="AdditionalServices__card__text">
                <h2 style={{ color: '#ffffff' }}>Напишите мне</h2>
                <p>Напишите мне на один из предложенных каналов связи и я отвечу на любые вопросы</p>

                <div className="AdditionalServices__iconButton">
                  <img src="/img/whatsapp_blue.svg" alt="whatsapp" />
                  Whatsapp
                </div>

                <div className="AdditionalServices__iconButton">
                  <img src="/img/insta_blue.svg" alt="instagram" />
                  Instagram
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdditionalServices
