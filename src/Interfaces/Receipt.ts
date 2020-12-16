//https://oplata.tinkoff.ru/develop/api/payments/init-request/#Items

import { Items } from "./Items";

export interface Receipt {
  Email?: string
  Phone?: string
  EmailCompany?: string
  Taxation: 'osn' | 'usn_income' | 'usn_income_outcome' | 'patent' | 'envd' | 'esn'
  Items: Items[]  // Массив позиций чека с информацией о товарах.
}