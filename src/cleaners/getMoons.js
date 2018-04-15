/*eslint max-len: ["error", { "ignoreUrls": true }]*/
export const getMoons = async () => {
  let unixTime = Date.now();

  try {
    const response = await fetch(`http://farmsense-prod.apigee.net/v1/moonphases/?d=${unixTime}`);
    const moonphases = await response.json();
  
    return moonphases;
  } catch (error) {
    throw new Error(`Caught error: ${error.message}`);
  }
};