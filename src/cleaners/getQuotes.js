export const getQuotes = async () => {

  try {
    const response = await fetch('http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=&skip=&page=');
    const quotes = await response.json();

    console.log(quotes);
    return quotes;
  } catch (error) {
    return error;
  }

};