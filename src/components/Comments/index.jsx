import {AiOutlineComment} from "react-icons/ai";
import styled from "styled-components";
import { useContext, useState } from "react";



export default function Comments(){
    const [display, setDisplay] = useState("none")
    return(
        <>
            <Container>
                <button onClick={() => setDisplay("flex")}><AiOutlineComment className="react-icon"/></button>
                <p>Contador</p>
            </Container>
            <CommentsContainer display={display}>
                <Comment>
                    <img />
                    <div>
                        <h1>Nome <span>• following</span></h1>
                        <h2>Comentário</h2>
                    </div>

                </Comment>

                <AddComment>
                    <img/>
                    <input placeholder="write a comment..."></input>
                </AddComment>

            </CommentsContainer>
</>

    )
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 45px;
  top: 135px;
  left: 17px;
  z-index: 2;
  button{
    width: 21px;
    height: 21px;
    display: flex;
    padding: 0;
    border: none;
    background: none;
    justify-content: center;
    align-items: center;
  }
  .react-icon{
    font-size: 20px;
    color:#FFFFFF
  }
  p{
    width: 45px;
    font-family: 'Lato';    
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 4px;
  }
`;

export const CommentsContainer = styled.div`
    display: ${props => props.display};
    flex-direction: column ;
    width: 611px;
    min-height: 100px;
    box-sizing: border-box;
    padding: 15px;
    background: #1E1E1E;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    margin-top: 0;
    margin-left: 0;
`;

export const Comment = styled.div`
display: flex;
align-items: center;
margin-bottom: 16px;
img{
    width: 39px;
    height: 39px;
    margin-top: 5px;
    border: 1px solid black;
    background-color: blue;
    /* background: url(image.png); */
    border-radius: 26.5px;
}
div{
    margin-left: 18px;
}
h1{
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #F3F3F3;
}
h2{
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #ACACAC;
}
span{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #565656;


}`;

export const AddComment = styled.div`
display: flex;
align-items: center;
img{
    width: 39px;
    height: 39px;
    margin-top: 5px;
    border: 1px solid black;
    background-color: blue;
    /* background: url(image.png); */
    border-radius: 26.5px;
};
input{
width: 510px;
height: 39px;
background: #252525;
border-radius: 8px;
border: none;
padding: 5px;
margin-left: 14px;

font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.05em;
color: #575757;
}`

