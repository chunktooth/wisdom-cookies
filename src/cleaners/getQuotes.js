export const getQuotes = async () => {

  try {
    const response = await fetch('http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=10&skip=&page=');
    const quotes = await response.json();
    console.log(quotes)

    const cleanedQuotes = await cleanQuotes(quotes);

    console.log(cleanedQuotes);
    return cleanedQuotes;
  } catch (error) {
    return error;
  }

};

const cleanQuotes = (quotes) => {
  const quoteMessage = quotes.map(quote => quote.message);
  return quoteMessage;
}