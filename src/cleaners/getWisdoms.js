/*eslint max-len: ["error", { "ignoreUrls": true }]*/
export const getWisdoms = async () => {
  try {
    const response = await fetch('http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=1000&skip=&page=');
    const wisdoms = await response.json();
   
    return wisdoms;
  } catch (error) {
    throw error;
  }
};