// TODO: Add a comment explaining role of the index.js file and import statements
// Importing the functions from the other JS files and using them on event listeners

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
