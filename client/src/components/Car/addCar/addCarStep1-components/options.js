let days = [{ label: "* Избери ден.", value: 0 }];
for (let i = 1; i <= 31; i++) {
  days.push({ label: i, value: i });
}

let years = [{ label: "* Избери година.", value: 0 }];
for (let i = new Date().getFullYear(); i >= 1940; i--) {
  years.push({ label: i, value: i });
}

const options = {
  months: [
    { label: "* Месец", value: 0 },
    { label: "Януари", value: "Януари" },
    { label: "Февруари", value: "Февруари" },
    { label: "Март", value: "Март" },
    { label: "Април", value: "Април" },
    { label: "Май", value: "Май" },
    { label: "Юни", value: "Юни" },
    { label: "Юли", value: "Юли" },
    { label: "Август", value: "Август" },
    { label: "Септември", value: "Септември" },
    { label: "Октомври", value: "Октомври" },
    { label: "Ноември", value: "Ноември" },
    { label: "Декември", value: "Декември" }
  ],
  typeOfEngine: [
    { label: "* Тип двигател", value: 0 },
    { label: "Бензинов", value: "Бензинов" },
    { label: "Дизелов", value: "Дизелов" },
    { label: "Електрически", value: "Електрически" },
    { label: "Хибриден", value: "Хибриден" }
  ],
  condition: [
    { label: "* Състояние", value: 0 },
    { label: "Нов", value: "Нов" },
    { label: "Употребяван", value: "Употребяван" },
    { label: "За части", value: "За части" }
  ],
  currency: [
    { label: "* Валута", value: 0 },
    { label: "ЛВ", value: "ЛВ" },
    { label: "USD", value: "USD" },
    { label: "EURO", value: "EURO" }
  ],
  typeOfGear: [
    { label: "* Скоростна кутия", value: 0 },
    { label: "Ръчна", value: "Ръчна" },
    { label: "Автоматияна", value: "Автоматияна" },
    { label: "Полуавтоматиячна", value: "Полуавтоматиячна" }
  ],
  category: [
    { label: "* Категория", value: 0 },
    { label: "Ван", value: "Ван" },
    { label: "Джип", value: "Джип" },
    { label: "Кабрио", value: "Кабрио" },
    { label: "Комби", value: "Комби" },
    { label: "Купе", value: "Купе" },
    { label: "Миниван", value: "Миниван" },
    { label: "Пикап", value: "Пикап" },
    { label: "Седан", value: "Седан" },
    { label: "Стреч лимузина", value: "Стреч лимузина" },
    { label: "Хечбек", value: "Хечбек" }
  ],
  euroStandart: [
    { label: "* Евро стандарт", value: 0 },
    { label: "Евро 1", value: "Евро 1" },
    { label: "Евро 2", value: "Евро 2" },
    { label: "Евро 3", value: "Евро 3" },
    { label: "Евро 4", value: "Евро 4" },
    { label: "Евро 5", value: "Евро 5" },
    { label: "Евро 6", value: "Евро 6" }
  ],
  region: [
    { label: "* Регион", value: 0 },
    { label: "Благоевград", value: "Благоевград" },
    { label: "Бургас", value: "Бургас" },
    { label: "Варна", value: "Варна" },
    { label: "Велико Търново", value: "Велико Търново" },
    { label: "Видин", value: "Видин" },
    { label: "Враца", value: "Враца" },
    { label: "Габрово", value: "Габрово" },
    { label: "Добрич", value: "Добрич" },
    { label: "Дупница", value: "Дупница" },
    { label: "Кърджали", value: "Кърджали" },
    { label: "Кюстендил", value: "Кюстендил" },
    { label: "Ловеч", value: "Ловеч" },
    { label: "Монтана", value: "Монтана" },
    { label: "Пазарджик", value: "Пазарджик" },
    { label: "Перник", value: "Перник" },
    { label: "Плевен", value: "Плевен" },
    { label: "Пловдив", value: "Пловдив" },
    { label: "Разград", value: "Разград" },
    { label: "Русе", value: "Русе" },
    { label: "Силистра", value: "Силистра" },
    { label: "Сливен", value: "Сливен" },
    { label: "Смолян", value: "Смолян" },
    { label: "София", value: "София" },
    { label: "Стара Загора", value: "Стара Загора" },
    { label: "Търговище", value: "Търговище" },
    { label: "Хасково", value: "Хасково" },
    { label: "Шумен", value: "Шумен" },
    { label: "Ямбол", value: "Ямбол" },
    { label: "Извън страната", value: "Извън страната" }
  ],
  colours: [
    { label: "* Цвят", value: 0 },
    { label: "Tъмно син", value: "Tъмно син" },
    { label: "Банан", value: "Банан" },
    { label: "Беата", value: "Беата" },
    { label: "Бежов", value: "Бежов" },
    { label: "Бордо", value: "Бордо" },
    { label: "Бронз", value: "Бронз" },
    { label: "Бял", value: "Бял" },
    { label: "Винен", value: "Винен" },
    { label: "Виолетов", value: "Виолетов" },
    { label: "Вишнев", value: "Вишнев" },
    { label: "Графит", value: "Графит" },
    { label: "Жълт", value: "Жълт" },
    { label: "Зелен", value: "Зелен" },
    { label: "Златист", value: "Златист" },
    { label: "Кафяв", value: "Кафяв" },
    { label: "Керемиден", value: "Керемиден" },
    { label: "Кремав", value: "Кремав" },
    { label: "Лилав", value: "Лилав" },
    { label: "Металик", value: "Металик" },
    { label: "Оранжев", value: "Оранжев" },
    { label: "Охра", value: "Охра" },
    { label: "Пепеляв", value: "Пепеляв" },
    { label: "Перла", value: "Перла" },
    { label: "Пясъчен", value: "Пясъчен" },
    { label: "Резидав", value: "Резидав" },
    { label: "Розов", value: "Розов" },
    { label: "Сахара", value: "Сахара" },
    { label: "Светло сив", value: "Светло сив" },
    { label: "Светло син", value: "Светло син" },
    { label: "Сив", value: "Сив" },
    { label: "Син", value: "Син" },
    { label: "Слонова кост", value: "Слонова кост" },
    { label: "Сребърен", value: "Сребърен" },
    { label: "Т.зелен", value: "Т.зелен" },
    { label: "Тъмно сив", value: "Тъмно сив" },
    { label: "Тъмно син мет.", value: "Тъмно син мет." },
    { label: "Тъмно червен", value: "Тъмно червен" },
    { label: "Тютюн", value: "Тютюн" },
    { label: "Хамелеон", value: "Хамелеон" },
    { label: "Червен", value: "Червен" },
    { label: "Черен", value: "Черен" }
  ],
  additionalInfo: [
    { label: "----", value: "" },
    { label: "Безопасност", value: "safety" },
    { label: "Комфорт", value: "comfort" },
    { label: "Други", value: "another" },
    { label: "Защита", value: "protection" },
    { label: "Интериор", value: "interior" },
    { label: "Специализирани", value: "specialized" },
    { label: "Екстериор", value: "exterior" }
  ],
  days,
  years
};

export default options;
