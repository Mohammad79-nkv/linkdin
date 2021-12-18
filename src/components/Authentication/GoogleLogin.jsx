import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import  styled  from "styled-components";
import { signInGoogle } from "../../store/user";

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSignInWithGoogle = async () => {
    await dispatch(signInGoogle());
    history.replace("/home");
  };
  return (
    <Form>
      <Google onClick={handleSignInWithGoogle}>
        <img src="/images/google.svg" alt="signIn-google" />
        Sign in whit Google
      </Google>
    </Form>
  );
};

const Form = styled.div`
  /* margin-top: 100px; */
  /* width: 408px; */
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Google = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: center;
  height: 56px;
  width: 100%;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default GoogleLogin;
