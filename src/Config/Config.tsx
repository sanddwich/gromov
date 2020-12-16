interface ConfigParams {
  TerminalKey: string
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
}

const Config: ConfigParams =  {
  TerminalKey: 'TerminalKey',
  SuccessURL: '/successpay',
  FailURL: '/failpay',
  Taxation: 'usn_income',
  Tax: 'none',
  mailForMessages: 'bck-dkiselev@yandex.ru',
  defaultQuantity: 1,
  defaultPrice: 90000,
  defaultName: 'Базовая тренировочная программа',
  defaultPhone: '89618152633',
  defaultDescription: 'Тестовый платеж',
}

export default Config