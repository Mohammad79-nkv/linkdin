import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";


const LoginGoogleModal = ({closeModal}) => {
    return ( 
        <Container>
            <Content>
            <h5>Login with your own Google account to share post </h5>
            <div>
                <button onClick={closeModal}>Close</button>
            </div>
            </Content>
        </Container>
     );
}
const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Content = styled.div`
    width: 300px;
    background: white;
    padding:12px;
    border-radius: 5px;
    div {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    button {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        transition: all 0.1s ease-in-out;
        padding: 5px;
        margin: 12px 5px 0 0;
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
    h5 {
        margin: 0 auto;
        text-align: center;
    }
`;
 
export default LoginGoogleModal;