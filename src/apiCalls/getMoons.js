/*eslint max-len: ["error", { "ignoreUrls": true, 
"ignoreTemplateLiterals": true }]*/

import { clientID, clientSecret } from '../apiKey.js';

export const getMoons = async () => {
  let root = 'https://api.aerisapi.com/';

  try {
    const response = await fetch(`${root}sunmoon/moonphases?limit=4&client_id=${clientID}&client_secret=${clientSecret}`);
    const moonphases = await response.json();
    const cleanedMoons = await cleanMoons(moonphases);
    
    return cleanedMoons;
  } catch (error) {
    throw new Error(`Caught error: ${error.message}`);
  }
};

export const cleanMoons = (moonphases) => {
  return moonphases.response.map(info => ({
    date: info.dateTimeISO.slice(0, 10),
    name: info.name.charAt(0).toUpperCase() + 
    info.name.slice(1),
    code: info.code
  }));
};