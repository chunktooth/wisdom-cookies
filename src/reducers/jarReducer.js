const jarReducer = (state = [], action) => {
  switch (action.type) {
  case 'KEEP_IN_JAR':
    return [action.wisdom, ...state];
  case 'TRASH_FROM_JAR':
    return state.filter(wisdom => wisdom.id !== action.id);
  default:
    return state; 
  }
};

export default jarReducer;