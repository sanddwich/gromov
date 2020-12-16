import { TinkoffPay } from "../../Interfaces/TinkoffPay";
import { SET_ORDER_PAYMENT } from "../constants/ActionTypes";

interface setOrderPayment {
  type: typeof SET_ORDER_PAYMENT
  payment: TinkoffPay
}

export type OrderActionType =
  | setOrderPayment