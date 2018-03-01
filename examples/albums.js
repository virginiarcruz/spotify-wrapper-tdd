/* to run: babel-node albums.js */

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQCyq1gp1-UeJOc-ftERQmljymYXh_og3rKtBOcK8527JQJXoxGKvl1wA5Jfmv9eTJ9KW4coOub8oI6_GdDrNky7Yk1ZBsnzToBi31FVRA0MtXbzPPrhpXmqVgXP864wV410NnCiUIOBFMI'
});


const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
