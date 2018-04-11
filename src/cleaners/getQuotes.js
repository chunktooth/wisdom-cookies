/*eslint max-len: ["error", { "ignoreUrls": true }]*/
export const getQuotes = async () => {
  try {
    const response = await fetch('http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=10&skip=&page=');
    const quotes = await response.json();
    const wisdom = await getWisdom(quotes);
    console.log(wisdom);
   
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