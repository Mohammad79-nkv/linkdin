const setLoading = "SET_LOADING";

const postLoading = (payload) => {
  return async (dispatch) => {
    await dispatch({ type: setLoading, payload });
  };
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case setLoading:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
export {postLoading}
