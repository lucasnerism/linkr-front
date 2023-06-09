import styled from "styled-components";
import { BiRefresh } from "react-icons/bi";

export const Container = styled.div`
width: 937px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;

&>h1{

width: 145px;
height: 64px;
font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 43px;
line-height: 64px;
/* identical to box height */
color: #FFFFFF;
margin: 78px 470px 43px 0px;
}
`;
export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const NewPostsButton = styled.button`
width: 38rem;
height: 4rem;
background-color: #1877F2;
color: #FFF;
border-radius: 1rem;
box-shadow: 0 4px 4px rgba(0 0 0 .25);
font-family: 'Lato';
font-weight: 400;
font-size: 1rem;
display: ${props => props.displayButton ?"flex" : "none"};
justify-content: center;
align-items: center;
margin-bottom: 2rem;
`;
export const Refresh = styled(BiRefresh)`
width: 22px;
height: 1rem;
`