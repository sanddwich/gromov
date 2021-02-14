//https://oplata.tinkoff.ru/develop/api/payments/init-request/#Items

import { Receipt } from "./Receipt";

export interface TinkoffPay {
  TerminalKey: string
  Amount: number
  OrderId: string
  IP?: string
  Description: string   // Описание заказа
  Token?: string
  Language?: string    //ru - русский, en - английский
  Recurrent?: string   //Идентификатор родительского платежа     Передается со значением Y
  CustomerKey?: string   //Идентификатор покупателя в системе продавца. Передается вместе с параметром CardId. См. метод GetGardList обязателен, если передан параметр Recurrent
  RedirectDueDate?: string  //Cрок жизни ссылки (не более 90 дней) Cрок жизни ссылки (не более 90 дней) Если не передан, принимает значение 24 часа для платежа и 30 дней для счета
  NotificationURL?: string  //Адрес для получения http нотификаций  Если не передан, принимает значение, указанное в настройках терминала
  SuccessURL?: string // Страница успеха
  FailURL?: string   //Страница ошибки
  PayType?: 'O' | 'T'  //Тип оплаты: O — одностадийная, T — двухстадийная
  Receipt?: Receipt  // Массив данных чека.
}