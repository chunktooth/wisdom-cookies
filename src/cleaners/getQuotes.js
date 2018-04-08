export const getQuotes = async () => {

  try {
    const response = await fetch('http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=10&skip=&page=');
    const quotes = await response.json();
    const cleanedQuotes = await cleanQuotes(quotes);

    console.log(cleanedQuotes);
    return cleanedQuotes;
  } catch (error) {
    throw error;
  }

};

export const cleanQuotes = (quotes) => {
  return quotes.map(quote => ({
    quote: quote.message,
    quote_id: quote.id
 }));
}