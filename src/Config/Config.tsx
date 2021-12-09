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
  messages: string[]
}

interface Link {
  name: string
  url: string
  // pass: string
}

// const siteURL = 'http://localhost:3000'
const siteURL = 'https://gromov.fit'
const gromovPhone = '+79171874086'

const Config: ConfigParams = {
  messages: [
    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+У+меня+постоянная+слабость,+нет+сил+и+энергии.+Хочу+это+исправить!+Получить+хорошие+результаты,+сделать+свою+жизнь+лучше+и+качественнее!+Вы+можете+мне+в+этом+помочь?`,

    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+У+меня+есть+проблемы+со+здоровьем.+Я+хочу+их+максимально+нивелировать+или+решить,+тем+самым+улучшив+своё+качество+жизни+и+улучшить+внешний+вид!+Вы+можете+мне+в+этом+помочь?`,

    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+У+меня+есть+проблема+с+лишним+весом!+Я+хочу+это+исправить!+Иметь+подтянутую+фигуру,+сделать+свою+жизнь+лучше+и+качественнее!+Вы+можете+мне+в+этом+помочь?`,

    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+Я+хочу+измениться+внешне,+иметь+красивую+и+подтянутую+фигуру,+сделать+свою+жизнь+лучше+и+качественнее!+Вы+можете+мне+в+этом+помочь?`,

    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+Я+не+могу+наладить+своё+питание,+постоянно+срываюсь!+Хочу+это+исправить,+сделать+свою+жизнь+лучше+и+качественнее!+Вы+можете+мне+в+этом+помочь?`,

    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+Я+хочу+получить+хорошие+результаты,+сделать+свою+жизнь+лучше+и+качественнее!+Но+я+постоянно+срываюсь+и+сомневаюсь,+что+у+меня+получится.+Вы+можете+мне+помочь+в+решении+этой+задачи?`,

    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+У+меня+уже+был+опыт+похудения,+но+по+той+или+иной+причине+вес+возвращался.+Не+хочу+больше+тратить+время+впустую!+Я+хочу+получить+хорошие+результаты+на+долгие+годы,+сделать+свою+жизнь+лучше+и+качественнее!+Вы+можете+мне+в+этом+помочь?`,

    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+У+меня+нет+возможности+регулярно+посещать+залы.+Но,+я+хочу+иметь+подтянутую+фигуру,+сделать+свою+жизнь+лучше+и+качественнее!+При+этом+не+тратя+время+впустую+на+бесполезные+действия.+Вы+можете+мне+в+этом+помочь?`,

    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+Я+хочу+получить+хорошие+результаты+и+улучшить+своё+качество+жизни!+И+у+меня+совсем+нет+времени+заниматься+этим+самостоятельно.+Вы+можете+мне+помочь+в+решении+этой+задачи?`,

    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+Я+хочу+получить+хорошие+результаты,+сделать+свою+жизнь+лучше+и+качественнее!+Надоело+постоянно+откладывать+все+на+завтра!+Мне+нужен+человек+который+будет+меня+подталкивать+к+действию!+Вы+можете+мне+в+этом+помочь?`,

    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+Я+хочу+улучшить+своё+качество+жизни!+Но+мне+лень+этим+заниматься+самостоятельно.+Мне+нужен+человек+который+сможет+меня+мотивировать+к+действию+для+достижения+желанных+результатов!+Вы+можете+мне+в+этом+помочь?`,

    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+Я+хочу+получить+хорошие+результаты,+сделать+свою+жизнь+лучше+и+качественнее!+Решить+проблемы+со+здоровьем+и+улучшить+свой+внешний+вид.+Мне+нужен+человек+который+будет+меня+подталкивать+к+действию!`,

    `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте.+Я+хочу+получить+хорошие+результаты,+сделать+свою+жизнь+лучше+и+качественнее!+Надоело+постоянно+откладывать+все+на+завтра!+Я+хочу+начать+действовать+прямо+сейчас!+Мне+нужен+человек+который+будет+меня+подталкивать+к+действию!`,
  ],

  goToWhattsApp: () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${gromovPhone}&text=Здравствуйте
      +Я+хочу+получить+хорошие+результаты,+сделать+свою+жизнь+лучше+и+качественнее! 
      +Решить+проблемы+со+здоровьем+и+улучшить+свой+внешний+вид.
      +Мне+нужен+человек+который+будет+меня+подталкивать+к+действию!`
    )
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
      url: 'https://disk.yandex.ru/d/KMnoPft9g2Bljg',
    },
    {
      name: 'Мужская программа с акцентом на набор мышечной массы, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/hu35ALEZucqNDg',
    },
    {
      name: 'Мужская программа для дома & улицы с акцентом на похудение',
      url: 'https://disk.yandex.ru/d/odmAAqx_VnkKEg',
    },
    {
      name: 'Мужская программа для дома & улицы с акцентом на набор мышечной массы',
      url: 'https://disk.yandex.ru/d/52powf6XBdsftw',
    },
    {
      name: 'Женская программа с акцентом на похудение, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/ZvgWQRGSSj14gw',
    },
    {
      name: 'Женская программа с акцентом на набор мышечной массы, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/2i--0m0gE3_j5Q',
    },
    {
      name: 'Женская программа для дома & улицы с акцентом на похудение',
      url: 'https://disk.yandex.ru/d/1dNNO3MlRa_zNg',
    },
    {
      name: 'Женская программа для дома & улицы с акцентом на набор мышечной массы',
      url: 'https://disk.yandex.ru/d/Mvj32YZHR0a4sQ',
    },
    { name: 'Набор веса', url: 'https://disk.yandex.ru/d/qdvIVKZT4TppRg' },
    { name: 'Cнижения веса', url: 'https://disk.yandex.ru/d/svA8ElOwRhGYkA' },
    {
      name: 'Комплексная Мужская программа с акцентом на похудение, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/pqQI72bNQgySyA',
    },
    {
      name: 'Комплексная Мужская программа с акцентом на набор мышечной массы, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/lFmWL5lo-X0acw',
    },
    {
      name: 'Комплексная Мужская программа для дома & улицы с акцентом на похудение',
      url: 'https://disk.yandex.ru/d/LAc8xBAWjLP3FQ',
    },
    {
      name: 'Комплексная Мужская программа для дома & улицы с акцентом на набор мышечной массы',
      url: 'https://disk.yandex.ru/d/rE8jpCCfSotmyQ',
    },
    {
      name: 'Комплексная Женская программа с акцентом на похудение, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/IvjJBL7PNJVbxw',
    },
    {
      name: 'Комплексная Женская программа с акцентом на набор мышечной массы, для тренажерного зала',
      url: 'https://disk.yandex.ru/d/HBulEY0W0vVFmQ',
    },
    {
      name: 'Комплексная Женская программа для дома & улицы с акцентом на похудение',
      url: 'https://disk.yandex.ru/d/1kawngQCUNbbKA',
    },
    {
      name: 'Комплексная Женская программа для дома & улицы с акцентом на набор мышечной массы',
      url: 'https://disk.yandex.ru/d/BxGjLrGjCOvkqw',
    },
  ],

  // links: [
  //   {
  //     name: 'Мужская программа с акцентом на похудение, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/9b_xOpBS65Slew',
  //     pass: 'Lkjuio985',
  //   },
  //   {
  //     name: 'Мужская программа с акцентом на набор мышечной массы, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/rg5RS29npSBTUA',
  //     pass: 'Sdfgwwe76',
  //   },
  //   {
  //     name: 'Мужская программа для дома & улицы с акцентом на похудение',
  //     url: 'https://disk.yandex.ru/d/c0SVeQjmZWm6Vw',
  //     pass: 'Mnbhgyt78',
  //   },
  //   {
  //     name: 'Мужская программа для дома & улицы с акцентом на набор мышечной массы',
  //     url: 'https://disk.yandex.ru/d/W_m74JGL7gD9mg',
  //     pass: 'Dfghyt67',
  //   },
  //   {
  //     name: 'Женская программа с акцентом на похудение, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/9SEhmHCZYhRJsQ',
  //     pass: 'Lkjhui876',
  //   },
  //   {
  //     name: 'Женская программа с акцентом на набор мышечной массы, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/f1YYOv1o77QA6g',
  //     pass: 'Dfghytre345',
  //   },
  //   {
  //     name: 'Женская программа для дома & улицы с акцентом на похудение',
  //     url: 'https://disk.yandex.ru/d/ceZ6VGHG-5gurQ',
  //     pass: 'Asdfgtr65',
  //   },
  //   {
  //     name: 'Женская программа для дома & улицы с акцентом на набор мышечной массы',
  //     url: 'https://disk.yandex.ru/d/agc4Q3pN66r9FA',
  //     pass: 'Lkjuio98',
  //   },
  //   { name: 'Набор веса', url: 'https://disk.yandex.ru/d/LzbL_b3PxEQRAA', pass: 'Dfrtyhj765' },
  //   { name: 'Cнижения веса', url: 'https://disk.yandex.ru/d/dcqEHy5YUmKGbw', pass: 'Lkiuyhj987' },
  //   {
  //     name: 'Комплексная Мужская программа с акцентом на похудение, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/we4V22LfvlFE0g',
  //     pass: 'Jhgtyu765',
  //   },
  //   {
  //     name: 'Комплексная Мужская программа с акцентом на набор мышечной массы, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/GRyS5sVZHmALVg',
  //     pass: 'Jkloiu789',
  //   },
  //   {
  //     name: 'Комплексная Мужская программа для дома & улицы с акцентом на похудение',
  //     url: 'https://disk.yandex.ru/d/B19JQPNgz9eBKA',
  //     pass: 'Dfgtry765',
  //   },
  //   {
  //     name: 'Комплексная Мужская программа для дома & улицы с акцентом на набор мышечной массы',
  //     url: 'https://disk.yandex.ru/d/CuXdw49FhMy0kg',
  //     pass: 'Vbnmjh678',
  //   },
  //   {
  //     name: 'Комплексная Женская программа с акцентом на похудение, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/oSvjwlg4PtqMKw',
  //     pass: 'Jhgtyu765',
  //   },
  //   {
  //     name: 'Комплексная Женская программа с акцентом на набор мышечной массы, для тренажерного зала',
  //     url: 'https://disk.yandex.ru/d/gQz6eFvszJhA9Q',
  //     pass: 'Jkloiu789',
  //   },
  //   {
  //     name: 'Комплексная Женская программа для дома & улицы с акцентом на похудение',
  //     url: 'https://disk.yandex.ru/d/rDH_6cZRT28YkA',
  //     pass: 'Dfgtry765',
  //   },
  //   {
  //     name: 'Комплексная Женская программа для дома & улицы с акцентом на набор мышечной массы',
  //     url: 'https://disk.yandex.ru/d/RM8qOxVGo7B7Ig',
  //     pass: 'Vbnmjh678',
  //   },
  // ],

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
