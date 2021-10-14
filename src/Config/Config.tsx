import { Program } from '../Interfaces/Program'
import PromoCodes from '../Interfaces/PromoCodes'

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
  promoCodes: PromoCodes[]
  quizLink: string
  goToWhattsApp: () => void
}

interface Link {
  name: string
  url: string
  pass: string
}

// const siteURL = 'http://localhost:3000'
const siteURL = 'https://gromov.fit'

const Config: ConfigParams = {
  goToWhattsApp: () => {
    window.open('https://api.whatsapp.com/send?phone=+79171874086')
  },
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
  defaultPrice: 950,
  defaultName: 'Базовая тренировочная программа',
  defaultPhone: '',
  defaultDescription: 'Тестовый платеж',
  siteURL: siteURL,
  gromovMail: 'victor.ifbb@gmail.com',
  quizLink: 'https://docs.google.com/forms/d/1A-IyDPCBUEGMrJfNdFxo3q-RbKlut3xStdqMLoIjwMo/edit',
  promoCodes: [
    {
      discount: 10,
      codeList: ['VIC24', '1111'],
    },
  ],
  // gromovMail: 'bck-dkiselev@yandex.ru',
  programs: [
    {
      name: '«Базовая тренировочная программа»',
      price: 950,
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
      price: 2700,
    },
    {
      name: '«Базовое питание»',
      price: 950,
      properties: ['Cнижения веса', 'Набор веса'],
      propertiesSelectActive: false,
      activeProperty: 0,
    },
    {
      name: 'Культура питания «персонально»',
      price: 2900,
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
    {
      name: '«Базовая программа: тренировки и питание»',
      price: 1590,
      oldPrice: 1900,
      male: true,
      properties: [
        'программа с акцентом на похудение, для тренажерного зала',
        'программа с акцентом на набор мышечной массы, для тренажерного зала',
        'программа для дома & улицы с акцентом на похудение',
        'программа для дома & улицы с акцентом на набор мышечной массы',
      ],
      properties2: ['Cнижения веса', 'Набор веса'],
      propertiesSelectActive: false,
      propertiesSelectActive2: false,
      activeProperty: 0,
      activeProperty2: 0,
    },
    {
      name: '«Персональная программа: тренировки и питание»',
      price: 4950,
      oldPrice: 5600,
      male: true,
    },
  ],
  links: [
    {
      name: 'Мужская программа с акцентом на похудение, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/9b_xOpBS65Slew',
      pass: 'Lkjuio985',
    },
    {
      name: 'Мужская программа с акцентом на набор мышечной массы, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/rg5RS29npSBTUA',
      pass: 'Sdfgwwe76',
    },
    {
      name: 'Мужская программа для дома & улицы с акцентом на похудение',
      url: 'https://disk.yandex.ru/d/c0SVeQjmZWm6Vw',
      pass: 'Mnbhgyt78',
    },
    {
      name: 'Мужская программа для дома & улицы с акцентом на набор мышечной массы',
      url: 'https://disk.yandex.ru/d/W_m74JGL7gD9mg',
      pass: 'Dfghyt67',
    },
    {
      name: 'Женская программа с акцентом на похудение, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/9SEhmHCZYhRJsQ',
      pass: 'Lkjhui876',
    },
    {
      name: 'Женская программа с акцентом на набор мышечной массы, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/f1YYOv1o77QA6g',
      pass: 'Dfghytre345',
    },
    {
      name: 'Женская программа для дома & улицы с акцентом на похудение',
      url: 'https://disk.yandex.ru/d/ceZ6VGHG-5gurQ',
      pass: 'Asdfgtr65',
    },
    {
      name: 'Женская программа для дома & улицы с акцентом на набор мышечной массы',
      url: 'https://disk.yandex.ru/d/agc4Q3pN66r9FA',
      pass: 'Lkjuio98',
    },
    { name: 'Набор веса', url: 'https://disk.yandex.ru/d/LzbL_b3PxEQRAA', pass: 'Dfrtyhj765' },
    { name: 'Cнижения веса', url: 'https://disk.yandex.ru/d/dcqEHy5YUmKGbw', pass: 'Lkiuyhj987' },
    {
      name: 'Комплексная Мужская программа с акцентом на похудение, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/we4V22LfvlFE0g',
      pass: 'Jhgtyu765',
    },
    {
      name: 'Комплексная Мужская программа с акцентом на набор мышечной массы, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/GRyS5sVZHmALVg',
      pass: 'Jkloiu789',
    },
    {
      name: 'Комплексная Мужская программа для дома & улицы с акцентом на похудение',
      url: 'https://disk.yandex.ru/d/B19JQPNgz9eBKA',
      pass: 'Dfgtry765',
    },
    {
      name: 'Комплексная Мужская программа для дома & улицы с акцентом на набор мышечной массы',
      url: 'https://disk.yandex.ru/d/CuXdw49FhMy0kg',
      pass: 'Vbnmjh678',
    },
    {
      name: 'Комплексная Женская программа с акцентом на похудение, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/oSvjwlg4PtqMKw',
      pass: 'Jhgtyu765',
    },
    {
      name: 'Комплексная Женская программа с акцентом на набор мышечной массы, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/gQz6eFvszJhA9Q',
      pass: 'Jkloiu789',
    },
    {
      name: 'Комплексная Женская программа для дома & улицы с акцентом на похудение',
      url: 'https://disk.yandex.ru/d/rDH_6cZRT28YkA',
      pass: 'Dfgtry765',
    },
    {
      name: 'Комплексная Женская программа для дома & улицы с акцентом на набор мышечной массы',
      url: 'https://disk.yandex.ru/d/RM8qOxVGo7B7Ig',
      pass: 'Vbnmjh678',
    },
  ],
  // links: [
  //   {
  //     name: 'Мужская программа с акцентом на похудение, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/r7rDYUQQi4oQ8Q',
  //     pass: 'Lkjuio985',
  //   },
  //   {
  //     name: 'Мужская программа с акцентом на набор мышечной массы, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/RwGMnBFgqm8pKg',
  //     pass: 'Sdfgwwe76',
  //   },
  //   {
  //     name: 'Мужская программа для дома & улицы с акцентом на похудение',
  //     url: 'https://disk.yandex.ru/d/MP7FvFMkQ7OsBw',
  //     pass: 'Mnbhgyt78',
  //   },
  //   {
  //     name: 'Мужская программа для дома & улицы с акцентом на набор мышечной массы',
  //     url: 'https://disk.yandex.ru/d/XZdZKIHFOrMIeg',
  //     pass: 'Dfghyt67',
  //   },
  //   {
  //     name: 'Женская программа с акцентом на похудение, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/crfKYzbkIeH4gg',
  //     pass: 'Lkjhui876',
  //   },
  //   {
  //     name: 'Женская программа с акцентом на набор мышечной массы, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/n4CTi__AIGHenw',
  //     pass: 'Dfghytre345',
  //   },
  //   {
  //     name: 'Женская программа для дома & улицы с акцентом на похудение',
  //     url: 'https://disk.yandex.ru/d/5pcc4AstZEYj0w',
  //     pass: 'Asdfgtr65',
  //   },
  //   {
  //     name: 'Женская программа для дома & улицы с акцентом на набор мышечной массы',
  //     url: 'https://disk.yandex.ru/d/krmcOh9Zf-HtEw',
  //     pass: 'Lkjuio98',
  //   },
  //   { name: 'Набор веса', url: 'https://disk.yandex.ru/d/eL6EP_INIIpzOg', pass: 'Dfrtyhj765' },
  //   { name: 'Cнижения веса', url: 'https://disk.yandex.ru/d/xknTPJo5H9eF2A', pass: 'Lkiuyhj987' },
  // ],
}

export default Config
