import styled from "styled-components";

const RightBar = () => {
    return ( 
        <Container className="col col-12 col-md-4 col-lg-3">
            <Content className="">
            RighBar
            </Content>
        </Container>
     );
}
const Container = styled.div`
        
`;
const Content = styled.div`
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
        text-align: center;
        margin-bottom: 8px;
        transition: all 83ms;
        position: relative;
        border: none;
        box-shadow:0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%) ;
`;
export default RightBar;