import project1 from '../assets/projects/webShop.JPG';

export const links = [
    {
        name: 'Home',
        route: '/',
    }, {
        name: 'Projects',
        route: '/projects',
    }, {
        name: 'Contact',
        route: '#contactForm',
    }
];

export const selfIntroduction = {
    subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    body: [
        'I wrote my first HTML 20 years ago when my father gave me an HTML book for beginners. Since then, I have always had an interest in programming but never had a chance to study.',
        'I develop webpages and apps using React and JavaScript. I learned the basic usage of Node.js and built servers with Express, Socket.IO and SQL databases.',
        'I\'m a person who loves challenges and always has a big curiosity. When I\'m not coding, you\'ll find me in nature.',
    ],
    keywords: [
        'foodie',
        'cat-lover',
        'a good cook',
        'traveller',
        'a gardener',
    ],
}

export const projectsData = [
    {
        title: 'Project title1',
        github: 'https://github.com/TsubasaFujii/',
        production: 'https://github.com/TsubasaFujii/',
        thumbnail: project1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.',
        tools: ['react', 'vue', 'node'],
        starred: true,
    }, {
        title: 'Project title2',
        github: 'https://github.com/TsubasaFujii/',
        production: 'https://github.com/TsubasaFujii/',
        thumbnail: project1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.',
        tools: ['react', 'node', 'javaScript'],
        starred: true,
    }, {
        title: 'Project title3',
        github: 'https://github.com/TsubasaFujii/',
        production: 'https://github.com/TsubasaFujii/',
        thumbnail: project1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.',
        tools: ['react', 'vue', 'node'],
        starred: true,
    }, {
        title: 'Project title4',
        github: 'https://github.com/TsubasaFujii/',
        production: 'https://github.com/TsubasaFujii/',
        thumbnail: project1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.',
        tools: ['vue'],
        starred: false,
    }, {
        title: 'Project title5',
        github: 'https://github.com/TsubasaFujii/',
        production: 'https://github.com/TsubasaFujii/',
        thumbnail: project1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.',
        tools: ['node'],
        starred: false,
    }
]