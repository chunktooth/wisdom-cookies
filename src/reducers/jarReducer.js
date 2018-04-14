const jarReducer = (state = [], action) => {
  switch (action.type) {
    case 'KEEP_WISDOM':
      return [...state, action.wisdom];
    case 'TRASH_WISDOM':
      return state.filter(wisdom => wisdom.id !== action.id);
    default:
      return state; 
  }
}

export default jarReducer;