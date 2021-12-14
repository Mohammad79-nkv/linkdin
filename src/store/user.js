import { auth, provider } from "../firebase";
// action type
const addUser = "ADD_USER";
const removeUser = "REMOVE_USER"
// action creater
const signInGoogle = () => {
  return async (dispatch) => {
    try{
        const user = await auth.signInWithPopup(provider)
        await dispatch({type: addUser, payload: user.additionalUserInfo.profile})
    }catch(err) {console.log(err);}
  };
};
const signUpUser = () => {
    return async (dispatch) => {
        await dispatch({type : removeUser, payload: {}})
    }
}
// reducer

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case addUser:
        return action.payload;
    case removeUser:
        return action.payload;
    default:
      return state;
  }
};

export {signInGoogle, signUpUser}

export default userReducer;
