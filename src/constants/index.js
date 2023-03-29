import {
  mobile,
  backend,
  certificate,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  threejs,
  ivora,
  algebra,
  filip,
  xiphias,
  nba,
  speedType,
  nextjs
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Android Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Certificated developer',
    icon: certificate,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'NextJS',
    icon: nextjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Web App Developer',
    company_name: 'Ivora (Varazdin, Croatia)',
    icon: ivora,
    iconBg: '#383E56',
    date: '12 Nov, 2010 - 14 May, 2011',
    points: [
      'Detailed knowledge of databases (SQL)',
      'Working with database management tools. (SQL)',
      'Development of software application with VB.NET development environment',
      'Complete web app development',
    ],
  },
  {
    title: 'Mobile application developer',
    company_name: 'Algebra (Split, Croatia)',
    icon: algebra,
    iconBg: '#E6DEDD',
    date: '5 Jan, 2016 - 11 Jun, 2022',
    points: [
      'Basic characteristics of object-oriented programming and programming language',
      'Development of a mobile application on the Android platform',
      'Using modern libraries and programming samples when developing a mobile application',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Filip Informatika',
    icon: filip,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: ['Work on web store development in ReactJS (eCommerce app)'],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Xiphias',
    icon: xiphias,
    iconBg: '#E6DEDD',
    date: '13 Sep, 2021 - Present',
    points: [
      'Maintaining the eCommerce application on the already existing symphony php platform',
      '- PHP',
      '- Typescript',
      '- CSS',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows to add car, edit car, and manage car on list',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase, MobX',
        color: 'green-text-gradient',
      },
      {
        name: 'MaterialUI',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/mrIvancicIvica/MobXCars',
  },
  {
    name: 'NBA',
    description:
      'The web application where I used the tools is json-server, axios, react-router-dom... The access to the application is by entering the email that is stored in the cookie and after that you are in the application where you can see all the details of the players and your favorite teams. ..',
    tags: [
      {
        name: 'react, axios, react-router-dom',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi, json-server',
        color: 'green-text-gradient',
      },
      {
        name: 'MaterialUI',
        color: 'pink-text-gradient',
      },
    ],
    image: nba,
    source_code_link: 'https://github.com/mrIvancicIvica/NBA-App',
  },
  {
    name: 'Speed Typing Game',
    description:
      'maybe my first application with react-hooks where I used the then new react-hooks technology and a lot of es6 vanilla javascript',
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: speedType,
    source_code_link:
      'https://github.com/mrIvancicIvica/Speed-typing-game-withCustom-hooks--React',
  },
];

export { services, technologies, experiences, testimonials, projects };
