import todoListGif from '../assets/projects/todolist.gif';
import portfolioGif from '../assets/projects/portfolio.gif';
import snakeGif from '../assets/projects/snake.gif';
import todoListVueGif from '../assets/projects/todolist-vue.gif';
import othelloGif from '../assets/projects/othello.gif';

export const links = [
    {
        name: 'Home',
        route: '',
    }, {
        name: 'Projects',
        route: 'projects',
    }, {
        name: 'Contact',
        route: 'contact',
    }
];

export const headingText = ['Hello,', 'I\'m', 'Tsubasa.'];

export const selfIntroduction = {
    subHeading: 'Self-motivated developer who enjoys challenges',
    body: [
        'I worked in the hospitality industry for almost 10 years where I developed strong communication skills and problem-solving skills. Currently I\'m studying frontend programming in Stockholm, Sweden.',
        'I develop webpages using mainly React and JavaScript. I\'m familiar with Node.js and have experience with packages such as Express, Socket.IO and SQL databases.',
        'I\'m a person who loves challenges and have a large curiosity. When I\'m not coding, you\'ll find me in nature.',
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
        title: 'My portfolio',
        github: 'https://github.com/TsubasaFujii/portfolio',
        production: 'https://tsubasafujii.com',
        thumbnail: portfolioGif,
        description: 'This portfolio. I designed from scratch. I used framer-motion for animation. Further details on GitHub.',
        tools: ['react', 'css', 'javaScript'],
        starred: true,
        createdAt: new Date(2022, 9),  // month in index: actual month - 1
    },{
        title: 'Othello (Reversi)',
        github: 'https://github.com/TsubasaFujii/othello-server',
        production: 'https://othello-client.netlify.app/',
        thumbnail: othelloGif,
        description: 'The board game "Othello (Reversi)". This project was started to practice Node.js and Socket.IO after I found backend programming was also fun. Communication between the server and the client is handled by socket.io.',
        tools: ['react', 'css', 'javaScript', 'node'],
        starred: true,
        createdAt: new Date(2022, 9),
    },{
        title: 'To do list (React)',
        github: 'https://github.com/TsubasaFujii/todo-list',
        production: 'https://magical-brioche-a230d9.netlify.app/',
        thumbnail: todoListGif,
        description: 'Classic to-do list that you can add and remove tasks. This is a very first react application that I build. I have vue version in the exact same design.',
        tools: ['react', 'css', 'javaScript'],
        starred: false,
        createdAt: new Date(2022, 1),
    }, {
        title: 'Funky Snake',
        github: 'https://github.com/TsubasaFujii/snake',
        production: 'https://boisterous-dolphin-30f178.netlify.app',
        thumbnail: snakeGif,
        description: 'Snake game. Built in vanilla JavaScript and html. It allows to play up to 2 players. Snakes are controlled by keyboard.',
        tools: ['html', 'css', 'javaScript'],
        starred: true,
        createdAt: new Date(2021, 10),
    }, {
        title: 'To do list (Vue)',
        github: 'https://github.com/TsubasaFujii/todo-list-vue',
        production: 'https://bright-dasik-b436d3.netlify.app/',
        thumbnail: todoListVueGif,
        description: 'Classic to-do list. I have react version in the exact same design.',
        tools: ['vue', 'javaScript', 'css'],
        starred: false,
        createdAt: new Date(2022, 1),
    }
];

export const socialMedia = [
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/tsubasa-fujii/'
    },{
        name: 'github',
        url: 'https://github.com/TsubasaFujii/'
    },{
        name: 'mail',
        url: 'mailto:tsubasa.fujii@cmeducations.se?subject=Contact'
    },
];