const quoteReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SAVE_WISDOM':
    return { message: action.message, id: action.id };
  default:
    return state;
  }
};

export default quoteReducer;