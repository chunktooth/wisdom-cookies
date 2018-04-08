const quoteReducer = (state = [], action) => {
  switch (action.type) {
  case 'LOAD_QUOTES':
    return [...action.quotes];
  default:
    return state;
  }
};

export default quoteReducer;