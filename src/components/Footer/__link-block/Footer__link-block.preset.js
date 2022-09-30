import {APP_ROUTER_PATH_REVIEWS, APP_ROUTER_PATH_SERVICES} from "components/AppRouter/AppRouter.paths";

export const linkBlocksArray = [
    {
        linkTitleUri: '#about-us',
        linkTitleText: 'О нас',
        subLinks: [
            {
                subLinkTitleUri: '#contacts',
                subLinkTitleText: 'Связь'
            },
            {
                subLinkTitleUri: '#contacts',
                subLinkTitleText: 'Предложения'
            },
            {
                subLinkTitleUri: '#contacts',
                subLinkTitleText: 'Ссылки'
            }
        ]
    },
    {
        linkTitleUri: APP_ROUTER_PATH_SERVICES,
        linkTitleText: 'Услуги',
        subLinks: [
            {
                subLinkTitleUri: `${APP_ROUTER_PATH_SERVICES}?service_type=taxes`,
                subLinkTitleText: 'Связь'
            },
            {
                subLinkTitleUri: `${APP_ROUTER_PATH_SERVICES}?service_type=accounting`,
                subLinkTitleText: 'Бухгалтерия'
            },
            {
                subLinkTitleUri: `${APP_ROUTER_PATH_SERVICES}?service_type=defence`,
                subLinkTitleText: 'Защита'
            }
        ]
    },
    {
        linkTitleUri: APP_ROUTER_PATH_REVIEWS,
        linkTitleText: 'Отзывы',
        subLinks: [
            {
                subLinkTitleUri: APP_ROUTER_PATH_REVIEWS,
                subLinkTitleText: 'Подробнее'
            },
        ]
    },
    {
        linkTitleUri: '#contacts',
        linkTitleText: 'Контакты',
        subLinks: [
            {
                subLinkTitleUri: '#contacts',
                subLinkTitleText: 'E-mail'
            },
            {
                subLinkTitleUri: '#contacts',
                subLinkTitleText: 'Адрес'
            },
            {
                subLinkTitleUri: '#contacts',
                subLinkTitleText: 'Телефон'
            },
        ]
    },
]
