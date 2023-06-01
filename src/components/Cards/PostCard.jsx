import styled from "styled-components";
import { Container } from "./styled/Container.jsx";
import { UserImage } from "./styled/UserImage.jsx"
import { editPostComment } from "../../services/api.js";
import React, { useEffect, useRef } from "react";
import { HiPencil } from "react-icons/hi";

export default function PostCard({commentText}) {

    const textRef = useRef("");
    const [edition, setEdition] = React.useState(false)
    const [comment, setComment] = React.useState("Apenas um texto comum de teste")
    const [editedText, setEditedText] = React.useState("");

    const handleEdition = (event) => {
        if ( editedText !== "" && edition && event.keyCode == 27) {
            setEdition(false)
            editedText.textContent=comment
            textRef.current.blur();
            return 
        }

        if (event.key === 'Enter'){
            // Faça uma requisicao axios
            setEdition(false)
            console.log("EDICAO SALVA")
        }
    }

    const focusEdition = (event) => {
        // console.log(textRef.current.value)
        textRef.current.focus();

    
        if(editedText !== "" && edition){
            setEdition(false)
            editedText.textContent=comment
            textRef.current.blur();
        }else {
            setEdition(true);
            textRef.current.focus();
        }
    }

    return (
        <Container >
            <UserImage />
            <Form>
                <UserName>Juvenal Juvêncio 
                    <EditionButton onClick={(event) => focusEdition(event)}/>
                </UserName>

                <Comment ref={textRef} 
                    contentEditable={edition} 
                    onInput={(e) => setEditedText(e.currentTarget)}
                    isEditing={edition}
                    onKeyDown={(event) => handleEdition(event)}
                >
                    {comment}
                </Comment>


                <PostContainer>
                   <div>
                   <PostTitle>
                        Como aplicar o Material UI em um
                        projeto React
                    </PostTitle>

                    <PostComment>
                        Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.
                    </PostComment>

                    <LinkPost>
                        https://medium.com/@pshrmn/a-simple-react-router
                    </LinkPost>
                   </div>

                    <ImagePost/>

                </PostContainer>
            </Form>

        </Container>
    );
}

const EditionButton = styled(HiPencil)`
    width: 20px;
    height: 20px;
    position: absolute;
    color: white;
    top: 0;
    right: 0;
    bottom: 1000px;
`

const Form = styled.form`
    width: 300px;
    margin-left: 15px;
`
const UserName = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    /* identical to box height */
    position: relative;
    width: 502px;
    color: #FFFFFF;
`
const Comment = styled.p`
    width: 502px;
    height: 52px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    background-color: ${(props) => props.isEditing ? "#FFFAFA" : "#171717"};
    /* opacity: ${(props) => props.isEditing ? "#FFFAFA" : "black"}; */
    border: ${(props) => props.isEditing ? "1px solid grey" : "none"};
    border-radius: 10px;
    margin: 10px 0px;
    color: #B7B7B7;
    
`
const PostContainer = styled.div`
    box-sizing: border-box;
    width: 503px;
    height: 155px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    display: flex;
    justify-content: space-between;

    div{
        box-sizing: border-box;
        padding-left: 15px;
    }
`
const PostTitle = styled.p`

    width: 249.98px;
    height: 38px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #CECECE;
`
const PostComment = styled.p`
    width: 302.82px;
    height: 39px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9B9595;
`
const LinkPost = styled.p`
    width: 263.19px;
    height: 13px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #CECECE;
`
const ImagePost = styled.img`
    width: 153.44px;
    height: 153.4px;
    background: url(image.png);
    background-color: blue;
    border-radius: 0px 12px 13px 0px;
`