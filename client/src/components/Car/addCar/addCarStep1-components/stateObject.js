import React from "react";

const stateObject = {
  displaySocialInputs: false,
  carBrands: [],
  carModels: [],
  additionalInfoCashe: [],
  additionalInfoSelectCashe: "",
  selectedAdditionalOption: "",
  safety: [
    {
      label: "GPS система за проследяване",
      value: "GPS система за проследяване",
      checked: false
    },
    {
      label: "Автоматичен контрол на стабилността",
      value: "Автоматичен контрол на стабилността",
      checked: false
    },
    {
      label: "Адаптивни предни светлини",
      value: "Адаптивни предни светлини",
      checked: false
    },
    {
      label: "Антиблокираща система",
      value: "Антиблокираща система",
      checked: false
    },
    {
      label: "Въздушни възглавници - Задни",
      value: "Въздушни възглавници - Задни",
      checked: false
    },
    {
      label: "Въздушни възглавници - Предни",
      value: "Въздушни възглавници - Предни",
      checked: false
    },
    {
      label: "Въздушни възглавници - Странични",
      value: "Въздушни възглавници - Странични",
      checked: false
    },
    {
      label: "Ел. разпределяне на спирачното усилие",
      value: "Ел. разпределяне на спирачното усилие",
      checked: false
    },
    {
      label: "Електронна програма за стабилизиране",
      value: "Електронна програма за стабилизиране",
      checked: false
    },
    {
      label: "Контрол на налягането на гумите",
      value: "Контрол на налягането на гумите",
      checked: false
    },
    { label: "Парктроник", value: "Парктроник", checked: false },
    { label: "Система ISOFIX", value: "Система ISOFIX", checked: false },
    {
      label: "Система за динамична устойчивост",
      value: "Система за динамична устойчивост",
      checked: false
    },
    {
      label: "Система за защита от пробуксуване",
      value: "Система за защита от пробуксуване",
      checked: false
    },
    {
      label: "Система за изсушаване на накладките",
      value: "Система за изсушаване на накладките",
      checked: false
    },
    {
      label: "Система за контрол на дистанцията",
      value: "Система за контрол на дистанцията",
      checked: false
    },
    {
      label: "Система за контрол на спускането",
      value: "Система за контрол на спускането",
      checked: false
    },
    {
      label: "Система за подпомагане на спирането",
      value: "Система за подпомагане на спирането",
      checked: false
    }
  ],
  comfort: [
    {
      label: "Auto Start Stop function",
      value: "Auto Start Stop function",
      checked: false
    },
    {
      label: "Bluetooth  handsfree система",
      value: "Bluetooth  handsfree система",
      checked: false
    },
    { label: "DVD, TV", value: "DVD, TV", checked: false },
    {
      label: "Steptronic, Tiptronic",
      value: "Steptronic, Tiptronic",
      checked: false
    },
    {
      label: "USB, audio\video, INAUX изводи",
      value: "USB, audio\video, INAUX изводи",
      checked: false
    },
    {
      label: "Адаптивно въздушно окачване",
      value: "Адаптивно въздушно окачване",
      checked: false
    },
    {
      label: "Безключово палене ",
      value: "Безключово палене",
      checked: false
    },
    {
      label: "Блокаж на диференциала",
      value: "Блокаж на диференциала",
      checked: false
    },
    { label: "Бордкомпютър", value: "Бордкомпютър", checked: false },
    {
      label: "Бързи  бавни скорости",
      value: "Бързи  бавни скорости",
      checked: false
    },
    {
      label: "Датчик за светлина",
      value: "Датчик за светлина",
      checked: false
    },
    { label: "Ел. Огледала", value: "Ел. Огледала", checked: false },
    { label: "Ел. Стъкла", value: "Ел. Стъкла", checked: false },
    {
      label: "Ел. регулиране на окачването",
      value: "Ел. регулиране на окачването",
      checked: false
    },
    {
      label: "Ел. регулиране на седалките",
      value: "Ел. регулиране на седалките",
      checked: false
    },
    {
      label: "Ел. усилвател на волана",
      value: "Ел. усилвател на волана",
      checked: false
    },
    { label: "Климатик", value: "Климатик", checked: false },
    { label: "Климатроник", value: "Климатроник", checked: false },
    {
      label: "Мултифункционален волан",
      value: "Мултифункционален волан",
      checked: false
    },
    { label: "Навигация", value: "Навигация", checked: false },
    {
      label: "Отопление на волана",
      value: "Отопление на волана",
      checked: false
    },
    { label: "Печка", value: "Печка", checked: false },
    {
      label: "Подгряване на предното стъкло",
      value: "Подгряване на предното стъкло",
      checked: false
    },
    {
      label: "Подгряване на седалките",
      value: "Подгряване на седалките",
      checked: false
    },
    {
      label: "Регулиране на волана",
      value: "Регулиране на волана",
      checked: false
    },
    { label: "Сензор за дъжд", value: "Сензор за дъжд", checked: false },
    {
      label: "Серво усилвател на волана",
      value: "Серво усилвател на волана",
      checked: false
    },
    {
      label: "Система за измиване на фаровете",
      value: "Система за измиване на фаровете",
      checked: false
    },
    {
      label: "Система за контрол на скоростта (автопилот)",
      value: "Система за контрол на скоростта (автопилот)",
      checked: false
    },
    { label: "Стерео уредба", value: "Стерео уредба", checked: false },
    {
      label: "Филтър за твърди частици",
      value: "Филтър за твърди частици",
      checked: false
    },
    { label: "Хладилна жабка", value: "Хладилна жабка", checked: false }
  ],
  another: [
    { label: "4x4", value: "4x4", checked: false },
    { label: "7 места", value: "7 места", checked: false },
    { label: "Buy back", value: "Buy back", checked: false },
    { label: "Бартер", value: "Бартер", checked: false },
    { label: "Газова уредба", value: "Газова уредба", checked: false },
    { label: "Дълга база", value: "Дълга база", checked: false },
    {
      label: "КапариранПродаден",
      value: "КапариранПродаден",
      checked: false
    },
    { label: "Катастрофирал", value: "Катастрофирал", checked: false },
    { label: "Къса база", value: "Къса база", checked: false },
    { label: "Лизинг", value: "Лизинг", checked: false },
    { label: "Метанова уредба", value: "Метанова уредба", checked: false },
    { label: "На части", value: "На части", checked: false },
    {
      label: "Напълно обслужен",
      value: "Напълно обслужен",
      checked: false
    },
    { label: "Нов внос", value: "Нов внос", checked: false },
    {
      label: "С право на дан.к-т",
      value: "С право на дан.к-т",
      checked: false
    },
    { label: "С регистрация", value: "С регистрация", checked: false },
    { label: "Сервизна книжка", value: "Сервизна книжка", checked: false },
    { label: "Тунинг", value: "Тунинг", checked: false }
  ],
  protection: [
    { label: "OFFROAD пакет", value: "OFFROAD пакет", checked: false },
    { label: "Аларма", value: "Аларма", checked: false },
    { label: "Брониран", value: "Брониран", checked: false },
    { label: "Имобилайзер", value: "Имобилайзер", checked: false },
    { label: "Каско", value: "Каско", checked: false },
    { label: "Лебедка", value: "Лебедка", checked: false },
    {
      label: "Подсилени стъкла",
      value: "Подсилени стъкла",
      checked: false
    },
    {
      label: "Централно заключване",
      value: "Централно заключване",
      checked: false
    },
    { label: "Парктроник", value: "Парктроник", checked: false }
  ],
  interior: [
    { label: "Велурен салон", value: "Велурен салон", checked: false },
    { label: "Десен волан", value: "Десен волан", checked: false },
    { label: "Кожен салон", value: "Кожен салон", checked: false }
  ],
  specialized: [
    { label: "TAXI", value: "TAXI", checked: false },
    {
      label: "За хора с увреждания",
      value: "За хора с увреждания",
      checked: false
    },
    { label: "Катафалка", value: "Катафалка", checked: false },
    { label: "Линейка", value: "Линейка", checked: false },
    { label: "Учебен", value: "Учебен", checked: false },
    { label: "Хладилен", value: "Хладилен", checked: false },
    { label: "Хомологация N1", value: "Хомологация N1", checked: false }
  ],
  exterior: [
    { label: "2(3) Врати", value: "2(3) Врати", checked: false },
    { label: "4(5) Врати", value: "4(5) Врати", checked: false },
    { label: "LED фарове", value: "LED фарове", checked: false },
    {
      label: "Ксенонови фарове",
      value: "Ксенонови фарове",
      checked: false
    },
    { label: "Лети джанти", value: "Лети джанти", checked: false },
    { label: "Металик", value: "Металик", checked: false },
    {
      label: "Отопляеми чистачки",
      value: "Отопляеми чистачки",
      checked: false
    },
    { label: "Панорамен люк", value: "Панорамен люк", checked: false },
    {
      label: "Рейлинг на покрива",
      value: "Рейлинг на покрива",
      checked: false
    },
    { label: "Ролбари", value: "Ролбари", checked: false },
    { label: "Спойлери", value: "Спойлери", checked: false },
    { label: "Теглич", value: "Теглич", checked: false },
    {
      label: "Халогенни фарове",
      value: "Халогенни фарове",
      checked: false
    },
    { label: "Шибедах", value: "Шибедах", checked: false }
  ],
  made: "",
  model: "",
  colours: "",
  modification: "",
  euroStandart: "",
  horsePower: "",
  typeOfEngine: "",
  condition: "",
  typeOfGear: "",
  price: "",
  category: "",
  currency: "",
  realeaseDateMonth: "",
  realeaseDateYear: "",
  runningKMH: "",
  region: "",
  populatedPlace: "",
  safetyArray: [],
  comfortArray: [],
  anotherArray: [],
  protectionArray: [],
  interiorArray: [],
  specializedArray: [],
  exteriorArray: [],
  additionalInfo: [],
  addictionalInfoItems: {
    safety: [],
    comfort: [],
    another: [],
    protection: [],
    interior: [],
    specialized: [],
    exterior: []
  },
  errors: {}
};

export default stateObject;
