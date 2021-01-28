import { HIDE_REQUESTFORM_MODAL, SET_MOBILEMENU_MODAL, SET_SHOWPAYMENT_MODAL, SHOW_REQUESTFORM_MODAL } from "../constants/ActionTypes"

export const showRequestModal = () => ({
  type: SHOW_REQUESTFORM_MODAL
})

export const hideRequestModal = () => ({
  type: HIDE_REQUESTFORM_MODAL
})

export const setShowPaymentModal = (isActive: boolean) => ({
  type: SET_SHOWPAYMENT_MODAL,
  isActive
})

export const setMobileMenuModal = (isActive: boolean) => ({
  type: SET_MOBILEMENU_MODAL,
  isActive
})