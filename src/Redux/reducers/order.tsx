import Config from "../../Config/Config"
import { Items } from "../../Interfaces/Items"
import { Receipt } from "../../Interfaces/Receipt"
import { TinkoffPay } from "../../Interfaces/TinkoffPay"
import { SET_ORDER_PAYMENT } from "../constants/ActionTypes"
import { OrderState } from "../interfaces/interfaces"
import { OrderActionType } from "../interfaces/order"

// Items Массив позиций чека с информацией о товарах.
const ItemsArray: Items[] = [
  {
    Amount: Config.defaultPrice * Config.defaultQuantity,
    Name: Config.defaultName,
    Price: Config.defaultPrice,
    Quantity: Config.defaultQuantity,
    Tax: Config.Tax,
  }
]

// Receipt Массив данных чека.
const ReceiptData: Receipt = {
  Email: Config.mailForMessages,
  Phone: Config.defaultPhone,
  Taxation: Config.Taxation,
  Items: ItemsArray,
}

// PaymentData
const Payment: TinkoffPay = {
  TerminalKey: Config.TerminalKey,
  OrderId: ((new Date()).valueOf()).toString(),
  Amount: Config.defaultPrice * Config.defaultQuantity,
  Description: Config.defaultDescription,
  SuccessURL: Config.SuccessURL,
  FailURL: Config.FailURL,
  Receipt: ReceiptData,
}

const initialState: OrderState = {
  payment: Payment,  
}

const order = (state: OrderState = initialState, action: OrderActionType) => {
  switch (action.type) {
    case SET_ORDER_PAYMENT:
      return {
        ...state,
        payment: action.payment,
      }

    default:
      return state
  }
}

export default order
