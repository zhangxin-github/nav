module.exports = {
    base:'/nav/',
    title: 'WEB导航',
    description: 'Welcome to Wizard site',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
        ],
        sidebar: { '/guide/': genSidebarConfig('指南') }
    }
}

function genSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'getting-started',
            ]
        }
    ]
}