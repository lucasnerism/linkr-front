import styled from "styled-components";
import { Link } from "react-router-dom";


export const PageContainer = styled.section`
background-color: #333333;
width: 100vw;
height: 100vh;
align-items: flex-start;
margin: 0;
display: flex;
`
export const Left = styled.div`
margin-top: 0;
width: 60%;
height: 100vh;
display: flex;
flex-direction: column;
background-color:#151515;
h1{
font-family: 'Passion One';
font-style: normal;
font-weight: 700;
font-size: 106px;
line-height: 117px;
letter-spacing: 0.05em;
color: #FFFFFF;
margin-bottom: 0px;
margin-left: 144px;
margin-top: 33%;
}
h2{
font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 43px;
line-height: 64px;
color: #FFFFFF;
width: 442px;
margin-top: 0px;
margin-left: 144px;
}
`
export const Rigth = styled.div`
width: 40%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
input{
box-sizing: border-box;
width: 429px;
height: 65px;
margin-bottom: 13px;
padding-left: 17px;
background: #FFFFFF;
border-radius: 6px;
border: none;

font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 27px;
line-height: 40px;
color: #9F9F9F;
}
button{
box-sizing: border-box;
width: 429px;
height: 65px;
background: #1877F2;
border-radius: 6px;
border: none;

font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 27px;
line-height: 40px;
color: #FFFFFF;
}
`
export const CustomLink = styled(Link)`
margin-top: 14px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
text-decoration-line: underline;
color: #FFFFFF;
`