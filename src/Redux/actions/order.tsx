import { TinkoffPay } from "../../Interfaces/TinkoffPay";
import { SET_ORDER_PAYMENT } from "../constants/ActionTypes";

export const setOrderPayment = (payment: TinkoffPay) => ({
  type: SET_ORDER_PAYMENT,
  payment,
})