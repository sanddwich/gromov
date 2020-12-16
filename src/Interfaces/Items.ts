//https://oplata.tinkoff.ru/develop/api/payments/init-request/#Items

export interface Items {
  Name: string
  Quantity: number //Кол-во товара или вес
  Amount: number //Стоимость товара в копейка
  Price: number //Цена за единицу товара в копейках
  PaymentMethod?:
    | 'full_payment'
    | 'full_prepayment'
    | 'prepayment'
    | 'advance'
    | 'partial_payment'
    | 'credit'
    | 'credit_payment'
  PaymentObject?:
    | 'commodity'
    | 'excise'
    | 'job'
    | 'service'
    | 'gambling_bet'
    | 'gambling_prize'
    | 'lottery'
    | 'lottery_prize'
    | 'intellectual_activity'
    | 'payment'
    | 'agent_commission'
    | 'composite'
    | 'another'
  Tax: 
    | 'none'
    | 'vat0'
    | 'vat10'
    | 'vat20'
    | 'vat110'
    | 'vat120'
  Ean13?: string    //Маркировка товара
}
