import styled from "styled-components";
import { Container } from "./styled/Container.jsx";
import { Link } from "react-router-dom";
import { UserImage } from "./styled/UserImage.jsx";
import { editPostComment } from "../../services/api.js";
import React, { useEffect, useRef, useState } from "react";
import { HiPencil } from "react-icons/hi";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import ModalPage from "../ModalDelete/index.jsx";
import api from "../../services/api.js";
import { LogInContext } from "../../contexts/PersistenLogInContext.jsx";
import { useContext } from "react";
import ModalLoadingPage from "../LoadingModal/index.jsx";
import Like from "../Like/index.jsx";

export default function PostCard(props) {
    const { id, userId, userImage, userName, comment: originalComment, link, title, description, image, hashtags, likes, commentText } = props;
    const textRef = useRef("");
    const [edition, setEdition] = React.useState(false);
    const [comment, setComment] = React.useState(originalComment);
    const [editedText, setEditedText] = React.useState("");
    const [openedDeleteModal, setOpenedModal] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [postId, setPostId] = React.useState(id);
    const { localToken } = useContext(LogInContext);
    const [imageUserId, setImageUserId] = useState(userId);

    const handleEdition = (event) => {
        if (editedText !== "" && edition && event.keyCode == 27) {
            setEdition(false);
            editedText.textContent = comment;
            textRef.current.blur();
            return;
        }

        if (event.key === 'Enter') {
            // Faça uma requisicao axios
            setEdition(false);
            setLoading(true);

            const body = { newComment: editedText.textContent };

            api.editPostComment(body, postId, localToken.token)
                .then((response) => {
                    console.log(response.data);
                    setLoading(false);
                    setEdition(false);
                    textRef.current.blur();

                    // recarregar os posts
                    setComment(editedText.textContent);
                })
                .catch((error) => {
                    setLoading(false);
                    alert("Não foi possível editar o post!");
                    setEdition(false);
                    editedText.textContent = comment;
                    textRef.current.blur();
                });
        }
    };

    const focusEdition = (event) => {
        // console.log(textRef.current.value)
        textRef.current.focus();


        if (editedText !== "" && edition) {
            setEdition(false);
            editedText.textContent = comment;
            textRef.current.blur();
        } else {
            setEdition(true);
            textRef.current.focus();
        }
    };

    function openModal() {
        setOpenedModal(true);
    }



    return (
        <Container data-test="post" >
            <UserImage src={userImage} />
            <Form>
                <UserName data-test="username"><Link to={`/user/${userId}`}>{userName} </Link>
                    <EditionButton data-test="edit-btn" canEdit={imageUserId === localToken.id} onClick={(event) => focusEdition(event)} />
                    <DeleteButton data-test="delete-btn" canDelete={imageUserId === localToken.id} onClick={openModal}></DeleteButton>
                    <ModalPage
                        openedDeleteModal={openedDeleteModal}
                        setOpenedModal={setOpenedModal}
                        setLoading={setLoading}
                        postId={postId}
                    ></ModalPage>
                    <ModalLoadingPage loading={loading}></ModalLoadingPage>
                </UserName>

                <Comment ref={textRef}
                    contentEditable={edition}
                    onInput={(e) => setEditedText(e.currentTarget)}
                    isEditing={edition}
                    onKeyDown={(event) => handleEdition(event)}
                    data-test={edition ? "edit-input" : "description"}
                >
                    {`${comment} `}<span>{hashtags?.map(tag => <Link to={`/hashtag/${tag}`}>{` #${tag}`}</Link>)}</span>
                </Comment>


                <PostContainer>
                    <a href={link} target="_blank" data-test="link">
                        <div>
                            <PostTitle>
                                {title}
                            </PostTitle>

                            <PostComment>
                                {description}
                            </PostComment>

                            <LinkPost>
                                {link}
                            </LinkPost>
                        </div>

                        <ImagePost src={image} />
                    </a>
                </PostContainer>
            </Form>
            <Like post_id={id} likes={likes} />
        </Container>
    );
}

const EditionButton = styled(HiPencil)`
    width: 20px;
    height: 20px;
    position: absolute;
    color: white;
    top: 0;
    right: 35px;
    bottom: 1000px;
    opacity: ${(props) => props.canEdit ? "1" : "0"};

`;

const DeleteButton = styled(HiArchiveBoxXMark)`
    width: 20px;
    height: 20px;
    position: absolute;
    color: white;
    top: 0;
    right: 5px;
    bottom: 1000px;
    opacity: ${(props) => props.canDelete ? "1" : "0"};

`;

const Form = styled.form`
    width: 300px;
    margin-left: 15px;
`;
const UserName = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    position: relative;
    width: 502px;
    color: #FFFFFF;
`;
const Comment = styled.p`
    width: 502px;
    height: 52px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    background-color: ${(props) => props.isEditing ? "#FFFAFA" : "#171717"};
    border: ${(props) => props.isEditing ? "1px solid grey" : "none"};
    border-radius: 10px;
    margin: 10px 0px;
    color: #B7B7B7;
    span{
        font-weight: 700;
        color:#FFFFFF
    }
`;
const PostContainer = styled.div`
    box-sizing: border-box;
    width: 503px;
    height: 155px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    display: flex;
    justify-content: space-between;
    a{
        width: 503px;
        height: 155px;
        display: flex;
        justify-content: space-between;

        div{
        box-sizing: border-box;
        padding:24px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    }


`;
const PostTitle = styled.p`

    width: 249.98px;
    max-height: 38px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #CECECE;
    overflow: hidden;
`;
const PostComment = styled.p`
    width: 302.82px;
    max-height: 39px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9B9595;
    overflow: hidden;
`;
const LinkPost = styled.p`
    width: 263.19px;
    max-height: 13px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #CECECE;
    overflow: hidden;
`;
const ImagePost = styled.img`
    width: 153.44px;
    height: 153.4px;
    background: url(image.png);
    background-color: blue;
    border-radius: 0px 12px 13px 0px;
`;