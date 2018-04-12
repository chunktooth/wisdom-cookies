const jarReducer = (state = [], action) => {
  switch (action.type) {
  case 'KEEP_IN_JAR':
    return [...state, action.wisdom];
  case 'TAKE_OFF_JAR':
    return state.filter(wisdom => wisdom.id !== action.id);
  default:
    return state;
  }
};

export default jarReducer;