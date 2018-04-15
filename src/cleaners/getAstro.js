/*eslint max-len: ["error", { "ignoreUrls": true }]*/
export const getAstro = async () => {
  try {
    const response = await fetch(`https://api.aerisapi.com/sunmoon/moonphases/?client_id=${clientId}&client_secret=${clientSecret}`);
    const today = await response.json();
    console.log(today);

    return today;
  } catch (error) {
    throw new Error(`Error found: ${error.message}`);
  }
};