const cookieReducer = (state = {}, action) => {
  switch (action.type) {
  case 'KEEP_WISDOM':
    return { message: action.message, id: action.id };
  default:
    return state;
  }
};

export default cookieReducer;