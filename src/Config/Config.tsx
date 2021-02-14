interface ConfigParams {
  TerminalKey: string
  TerminalPassword: string
  SuccessURL: string
  FailURL: string
  Taxation: "osn" | "usn_income" | "usn_income_outcome" | "patent" | "envd" | "esn"
  Tax: "none" | "vat0" | "vat10" | "vat20" | "vat110" | "vat120"
  mailForMessages: string
  defaultQuantity: number
  defaultPrice: number
  defaultName: string
  defaultPhone: string
  defaultDescription: string
  siteURL: string
}

const siteURL = 'http://localhost:3000'

const Config: ConfigParams =  {
  TerminalKey: 'TinkoffBankTest',
  TerminalPassword: 'TinkoffBankTest',
  SuccessURL: `${siteURL}/successpay`,
  FailURL: `${siteURL}/failpay`,
  Taxation: 'usn_income',
  Tax: 'none',
  mailForMessages: '',
  defaultQuantity: 1,
  defaultPrice: 90000,
  defaultName: 'Базовая тренировочная программа',
  defaultPhone: '',
  defaultDescription: 'Тестовый платеж',
  siteURL: siteURL,
}

export default Config