/*eslint max-len: ["error", { "ignoreUrls": true }]*/
export const getQuotes = async () => {
  try {
    const response = await fetch('http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=1000&skip=&page=');
    const quotes = await response.json();
    console.log(quotes)
    
    const wisdom = await getWisdom(quotes);
   
    return wisdom;
  } catch (error) {
    throw error;
  }
};

const getWisdom = async (quotes) => {
  const randomKey = Math.floor(Math.random() * quotes.length);
  const wisdom = quotes[randomKey];

  return wisdom;
}