import { Program } from '../Interfaces/Program'

interface ConfigParams {
  TerminalKey: string
  TerminalPassword: string
  SuccessURL: string
  FailURL: string
  Taxation: 'osn' | 'usn_income' | 'usn_income_outcome' | 'patent' | 'envd' | 'esn'
  Tax: 'none' | 'vat0' | 'vat10' | 'vat20' | 'vat110' | 'vat120'
  mailForMessages: string
  defaultQuantity: number
  defaultPrice: number
  defaultName: string
  defaultPhone: string
  defaultDescription: string
  siteURL: string
  programs: Program[]
  links: Link[]
  gromovMail: string
}

interface Link {
  name: string
  url: string
  pass: string
}

// const siteURL = 'http://localhost:3000'
const siteURL = 'https://gromov.fit'

const Config: ConfigParams = {
  TerminalKey: '1613847439636DEMO',
  TerminalPassword: 'v1lv7nwkouwdrj23',
  // TerminalKey: '1613847439636',
  // TerminalPassword: 'f81d6srhltwgdfwb',
  SuccessURL: `${siteURL}/successpay`,
  FailURL: `${siteURL}/failedpay`,
  Taxation: 'usn_income',
  Tax: 'none',
  mailForMessages: '',
  defaultQuantity: 1,
  defaultPrice: 90000,
  defaultName: 'Базовая тренировочная программа',
  defaultPhone: '',
  defaultDescription: 'Тестовый платеж',
  siteURL: siteURL,
  gromovMail: 'victor.ifbb@gmail.com',
  // gromovMail: 'bck-dkiselev@yandex.ru',
  programs: [
    {
      name: '«Базовая тренировочная программа»',
      price: 900,
      male: true,
      properties: [
        'программа с акцентом на похудение, для тренажерного зала',
        'программа с акцентом на набор мышечной массы, для тренажерного зала',
        'программа для дома & улицы с акцентом на похудение',
        'программа для дома & улицы с акцентом на набор мышечной массы',
      ],
      propertiesSelectActive: false,
      activeProperty: 0,
    },
    {
      name: '«Персональная тренировочная программа»',
      price: 2500,
    },
    {
      name: '«Базовое питание»',
      price: 900,
      properties: ['Cнижения веса', 'Набор веса'],
      propertiesSelectActive: false,
      activeProperty: 0,
    },
    {
      name: 'Культура питания «персонально»',
      price: 2700,
    },
    {
      name: 'Онлайн-Консультация',
      price: 1500,
    },
    {
      name: 'Подбор бадов',
      price: 2000,
    },
    {
      name: 'Диагностика',
      price: 7500,
    },
  ],
  links: [
    {
      name: 'Мужская программа с акцентом на похудение, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/r7rDYUQQi4oQ8Q',
      pass: 'Lkjuio985',
    },
    {
      name: 'Мужская программа с акцентом на набор мышечной массы, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/RwGMnBFgqm8pKg',
      pass: 'Sdfgwwe76',
    },
    {
      name: 'Мужская программа для дома & улицы  с акцентом на похудение',
      url: 'https://disk.yandex.ru/d/MP7FvFMkQ7OsBw',
      pass: 'Mnbhgyt78',
    },
    {
      name: 'Мужская программа для дома & улицы с акцентом на набор мышечной массы',
      url: 'https://disk.yandex.ru/d/XZdZKIHFOrMIeg',
      pass: 'Dfghyt67',
    },
    {
      name: 'Женская программа с акцентом на похудение, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/crfKYzbkIeH4gg',
      pass: 'Lkjhui876',
    },
    {
      name: 'Женская программа с акцентом на набор мышечной массы, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/n4CTi__AIGHenw',
      pass: 'Dfghytre345',
    },
    {
      name: 'Женская программа для дома & улицы с акцентом на похудение',
      url: 'https://disk.yandex.ru/d/5pcc4AstZEYj0w',
      pass: 'Asdfgtr65',
    },
    {
      name: 'Женская программа для дома & улицы с акцентом на набор мышечной массы',
      url: 'https://disk.yandex.ru/d/krmcOh9Zf-HtEw',
      pass: 'Lkjuio98',
    },
    { name: 'Набор веса', url: 'https://disk.yandex.ru/d/eL6EP_INIIpzOg', pass: 'Dfrtyhj765' },
    { name: 'Cнижения веса', url: 'https://disk.yandex.ru/d/xknTPJo5H9eF2A', pass: 'Lkiuyhj987' },
  ],
  // links: [
  //   {
  //     name: 'Мужская программа с акцентом на похудение, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/2QMcmT6UJWQWNQ',
  //     pass: 'Lkjuio985',
  //   },
  //   {
  //     name: 'Мужская программа с акцентом на набор мышечной массы, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/8xqS6WarMr09RQ',
  //     pass: 'Sdfgwwe76',
  //   },
  //   {
  //     name: 'Мужская программа для дома & улицы  с акцентом на похудение',
  //     url: 'https://disk.yandex.ru/d/Xu4cIy3qP8WJWg',
  //     pass: 'Mnbhgyt78',
  //   },
  //   {
  //     name: 'Мужская программа для дома & улицы с акцентом на набор мышечной массы',
  //     url: 'https://disk.yandex.ru/d/ob1iYNoQyc5w4Q',
  //     pass: 'Dfghyt67',
  //   },
  //   {
  //     name: 'Женская программа с акцентом на похудение, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/4D3J1kFeOkxjoQ',
  //     pass: 'Lkjhui876',
  //   },
  //   {
  //     name: 'Женская программа с акцентом на набор мышечной массы, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/Zgg37qBk7pOx2w',
  //     pass: 'Dfghytre345',
  //   },
  //   {
  //     name: 'Женская программа для дома & улицы с акцентом на похудение',
  //     url: 'https://disk.yandex.ru/d/jltDBDksR5foEQ',
  //     pass: 'Asdfgtr65',
  //   },
  //   {
  //     name: 'Женская программа для дома & улицы с акцентом на набор мышечной массы',
  //     url: 'https://disk.yandex.ru/d/MDvCKIcdrfOKAg',
  //     pass: 'Lkjuio98',
  //   },
  //   { name: 'Набор веса', url: 'https://disk.yandex.ru/d/eL6EP_INIIpzOg', pass: 'Dfrtyhj765' },
  //   { name: 'Cнижения веса', url: 'https://disk.yandex.ru/d/xknTPJo5H9eF2A', pass: 'Lkiuyhj987' },
  // ],
}

export default Config
