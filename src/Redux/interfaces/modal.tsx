import { HIDE_REQUESTFORM_MODAL, SET_SHOWPAYMENT_MODAL, SHOW_REQUESTFORM_MODAL } from "../constants/ActionTypes";

interface showRequestModal {
  type: typeof SHOW_REQUESTFORM_MODAL
}

interface hideRequestModal {
  type: typeof HIDE_REQUESTFORM_MODAL
}

interface setShowPaymentModal {
  type: typeof SET_SHOWPAYMENT_MODAL,
  isActive: boolean
}

export type ModalActionType = 
  | showRequestModal
  | hideRequestModal
  | setShowPaymentModal