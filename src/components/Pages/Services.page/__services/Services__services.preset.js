export const servicesArr = [
    {
        service_title: 'Налоговая Консультация',
        service_direction: 'Налог',
        service_actuality_date: new Date().toUTCString(),
        service_slug: 'tax',
        service_description: 'Налоги – обязательные безвозмездные платежи населения (физлиц и организаций) в бюджеты различных уровней.',
        service_can_buy_file: true,
        service_can_consult: true
    },
    {
        service_title: 'Юридическая Защита',
        service_direction: 'Защита',
        service_actuality_date: new Date().toUTCString(),
        service_slug: 'defence',
        service_description: 'Грамотная правовая защита позволяет восстановить справедливость и добиться соблюдения нарушенных прав..',
        service_can_buy_file: false,
        service_can_consult: true
    },
    {
        service_title: 'Бухгалтер',
        service_direction: 'Право',
        service_actuality_date: new Date().toUTCString(),
        service_slug: 'law',
        service_description: 'При помощи бухгалтерского учета не только фиксирует доходы и расходы компании, занимается оплатой налогов и подсчитывает прибыль.',
        service_can_buy_file: false,
        service_can_consult: true
    },
]