import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { signUpUser } from "../../store/user";

const SignOut = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSignOut = () => {
        dispatch(signUpUser())
        history.replace('/')
    }
  return (
    <Container onClick={handleSignOut}>
      <button href="#">Sign out</button>
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  top:45px;
  background-color: skyblue;
  border-radius: 5px;
  display: none;
  cursor: pointer;
  margin-left: 12px;
  margin-top:1px;
  button {
    color : black;
    background : white;
    font-size:14px;
    padding:4px 2px;
    border:1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;
export default SignOut;
