const wisdomPaperReducer = (state = [], action) => {
  switch (action.type) {
  case 'LOAD_WISDOMS':
    return [...action.wisdoms];
  default:
    return state;
  }
};

export default wisdomPaperReducer;