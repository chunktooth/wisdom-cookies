const moonReducer = (state = [], action) => {
  switch (action.type) {
  case 'LOAD_MOONS':
    return [...action.moonphases];
  default:
    return state; 
  }
};

export default moonReducer;