import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'John',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.png',
  paragraphOne: 'My name is John Wirihana Aupouri and I am a full-stack web developer.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kiwi-roadtrip.png',
    title: 'Kiwi Roadtrip',
    info: 'A roadtrip app designed to give users the kiwi experience.',
    info2: 'This app was a collaborative effort.',
    url: 'https://kiwiroadtrip.herokuapp.com/',
    repo: 'https://github.com/kotare-2019/roadtrip', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fakify-live.png',
    title: 'Crown Clothing',
    info: 'An e-commerce app built using React for the UI, Redux Sagas for state management, and Firebase to handle user authentication and data storage.',
    info2:
      'I am using styled-components and the Stripe API will take care of mock payments made via an Express server also am using react lazy to break code into chunks for performance optimization.',
    url: 'https://fakify-live.herokuapp.com/',
    repo: 'https://github.com/john-w-aupouri/fakify-live', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'devPlace.png',
    title: 'DevPlace',
    info: 'A social media app built using the MERN-Stack.',
    info2: 'A place for developers.',
    url: 'https://dev-place.herokuapp.com/',
    repo: 'https://github.com/john-w-aupouri/devPlace', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'johnaupouri963@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/john-aupouri-963669198/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/john-w-aupouri',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
