import { toast } from "react-toastify";
import { auth, provider } from "../firebase";
// action type
const addUser = "ADD_USER";
const removeUser = "REMOVE_USER"
// action creater
const signInUser = (values) => {
  return async(dispatch) => {
    const { email:formEmail, password } = values;
    try{
      const {user} = await auth.signInWithEmailAndPassword(formEmail, password);
      const { email, photoURL, displayName } =user;
      const userDitails = {
        email,
        photoURL,
        displayName,
      };
      await dispatch({type: addUser, payload: userDitails})
    }catch(err){
      console.log(err.message);
      toast.error(`${err.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }
}
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

export {signInGoogle, signUpUser, signInUser}

export default userReducer;
