# Таблица событий Google Analytics 4

| Событие | Где отправляется (файл) | Параметры (пример) | Что означает |
| :--- | :--- | :--- | :--- |
| `page_view` | Автосбор (все страницы) | `page_location: /index.html` | Открытие любой страницы |
| `scroll` | Автосбор | `percent_scrolled: 90` | Прокрутка страницы до 90% |
| `generate_lead` | `contacts.html` (при успехе) | `lead_category: b_manual, lead_source: instagram` | Успешная отправка заявки |
| `cta_click` | `index.html` (кнопки) | `button_name: hero_btn, page_section: main` | Клик по кнопке «Записаться» |
| `view_category` | `index.html` (карточки) | `category: b_auto` | Клик по карточке категории |
| `price_calc` | `prices.html` (калькулятор) | `category: b, gearbox: auto, total_price: 45000` | Расчет стоимости обучения |
| `installment_click` | `prices.html` (кнопки) | `months: 6` | Выбор срока рассрочки |
| `pdd_test_start` | `index.html`, `pdd-test.html` | `page_section: main` | Начало тренажера ПДД |
| `pdd_test_complete` | `pdd-test.html` (в конце) | `score: 8` | Завершение тренажера |
| `contact_click` | `contacts.html` (ссылки) | `contact_type: phone` | Клик по телефону или email |
| `messenger_click` | `contacts.html` (кнопки) | `messenger: telegram` | Клик по кнопке мессенджера |
| `form_error` | `contacts.html` (ошибка) | `field_name: phone, error_type: client` | Ошибка валидации формы |