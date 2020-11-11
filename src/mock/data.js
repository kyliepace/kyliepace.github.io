import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kylie Pace', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Full-stack developer specializing in MongoDB, geospatial analysis, and cloud architecture', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kylie Pace',
  subtitle: `I\'m that "backend guy" you wish you had on your team`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi I\'m Kylie',
  paragraphTwo: `I deploy a lot of typescript to the cloud. I enjoy a good bought of React, but
  am most interested in building fast, dependable backend processes. `,
  paragraphThree: `In a past life I was an environmental
  scientist, and as a result I have opinions about GIS options.`,
  resume: 'https://github.com/kyliepace/kyliepace.github.io/tree/master/src/images/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'crossfitHomes.png',
    title: 'Places near Crossfits UK',
    info: `Well, we can\'t always get what we want.
    This started out as a turf.js vue-leaflet app to show houses for sale
    within a set radius of crossfit gym locations. I scraped the gym locations and
    have them stored as a geojson hosted on github.
    `,
    info2: `I actually used this app when I moved to
    England, but unfortunately the real-estate API that powered the housing source has put up a
    paywall (I mean, good for them I guess) so I pivoted to using the foursquare API. Finding bookshops
    and smoothie bars near gyms is still a useful application of the turf.js library!
    The backend is just separate typescript cloud functions and the front-end is static written in vue.js.`,
    url: 'https://kyliepace.github.io/cfHomes/front-end/dist/',
    repo: 'https://kyliepace.github.io/cfHomes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Geospatial Queries in MongoDB',
    info: `Building off of my curiosity using PostGIS to perform basic geospatial analysis, this
    was my sandbox demo-ing some of the geospatial queries available in MongoDB.`,
    info2: `I found them to be very basic but useful, and turf.js can handle more complicated operations.

    I wish I could have used this when I was an environmental scientist!`,
    // url: '',
    repo: 'https://github.com/kyliepace/geospatial-server', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'twitter.com/kylie_the_first',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'linkedin.com/in/kyliepace',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'github.com/kyliepace',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
