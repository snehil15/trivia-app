const myReducers = (state = {}, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default myReducers;
