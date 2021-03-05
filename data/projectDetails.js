module.exports = {
  'micaela-designs': {
    name: 'Micaela Designs',
    details: 'Worked collaboratively with a graphic designer to revamp their portfolio site. I was given the basic layout and style and I had a lot of fun ensuring the site fit her vision. I built the project as a single page app with React, Node.js, and Express. ',
    images: ['micaela1', 'micaela2', 'micaela3'],
    tech: 'React, Node.js, Express, SASS',
    next: 'swell-tracker',
    prev: 'relax',
    git: 'https://github.com/henryfradley/micaelaCreates',
    live: 'http://micaelarobinson.com/'
  },
  'swell-tracker': {
    name: 'SwellTracker',
    details: 'Built a site that tracked oceanic weather data. The client is able to search for any location in the world utilizing a geocoding API. Then using these coordinates the closest location  is found from the Stormglass API. Then the current wave height, cloud cover, and tides are displayed. I had a lot of fun making this app because I love the ocean and living in Hawaii knowing the ocean conditions is crucial for both leisure and for safety. ',
    images: ['swell-tracker'],
    tech: 'React, Node.js, SASS',
    next: 'relax',
    prev: 'micaela-designs',
    git: 'https://github.com/henryfradley/SwellTracker'

  },
  'relax': {
    name: 'Relax Camping',
    details: 'Collaborated with a remote team to build a booking application for reserving campsites. I was tasked with the description and details component and  designed a RESTful API with Express and Node.js to populate the client with data. I then created modular responsive modals with React Hooks and CSS transitions. At the end of the project we deployed the app on  AWS EC2 and pieced the components together on a proxy server.',
    images: ['relax2'],
    tech: 'React, Node.js, SASS',
    next: 'micaela-designs',
    prev: 'swell-tracker',
    git: 'https://github.com/hrr49-greyjoy/Henry-service'
  }

};