export const getAstro = async () => {
  try {
  const response = await fetch ('https://aztro.sameerkumar.website/?sign=&day=today', {
      method: 'POST'
  });
  const today = await response.json();
  console.log(today);

  return today;
  } catch (error) {
    throw error;
  }
};