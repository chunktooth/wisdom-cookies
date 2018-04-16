/*eslint max-len: ["error", { "ignoreUrls": true, 
"ignoreTemplateLiterals": true }]*/

import { clientID, clientSecret } from '../apiKey.js';

export const getMoons = async () => {
  let root = 'https://api.aerisapi.com/';

  try {
    const response = await fetch(`${root}sunmoon/moonphases?limit=4&client_id=${clientID}&client_secret=${clientSecret}`);
    const moonphases = await response.json();
    
    return moonphases;
  } catch (error) {
    throw new Error(`Caught error: ${error.message}`);
  }
};


