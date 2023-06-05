import styled from "styled-components";
import { Container } from "./styled/Container.jsx";
import { UserImage } from "./styled/UserImage.jsx";
import { useContext } from "react";
import React from "react";
import api from "../../services/api.js";
import { LogInContext } from "../../contexts/PersistenLogInContext";
import ModalLoadingPage from "../LoadingModal/index.jsx";

export default function FormCard({ reloadTimeline, setReloadTimeline }) {

    const [link, setLink] = React.useState("");
    const [comment, setComment] = React.useState("");
    const { localToken, setLocalToken } = useContext(LogInContext);
    const [loading, setLoading] = React.useState(false);

    function createNewPost(e) {
        e.preventDefault();
        const arr = [...timelinePosts];

        setLoading(true);
        const body = { link, comment };
        api.createPost(body, localToken.token)
            .then((response) => {
                setLoading(false);
                setReloadTimeline(!reloadTimeline);
            })
            .catch((error) => {
                setLoading(false);
                alert("There was an error publishing your link");
            });
    }

    return (
        <Container color="white" data-test="publish-box">
            <UserImage src={localToken.profile_picture} />
            <Form onSubmit={createNewPost}>
                <Title>What are you going to share today?</Title>
                <Input onChange={(e) => setLink(e.target.value)} placeholder="http://" data-test="link" required />
                <TextArea onInput={(e) => setComment(e.target.value)} placeholder="Awesome article about #javascript" data-test="description" />
                <Button type="submit" data-test="publish-btn" disabled={loading}>Publish</Button>

            </Form>
            <ModalLoadingPage loading={loading}></ModalLoadingPage>
        </Container>
    );
}

const Form = styled.form`
    width: 300px;
    margin-left: 15px;
`;
const Title = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
`;
const Input = styled.input`
    width: 503px;
    height: 30px;
    background: #EFEFEF;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    padding: 10px;
    ::placeholder{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
    }

    :focus{
        outline: #EFEFEF;
    }
`;
const TextArea = styled.textarea`
    width: 502px;
    height: 66px;
    background: #EFEFEF;
    border-radius: 5px;
    border: none;
    margin: 5px 0px;
    box-sizing: border-box;
    padding: 10px;
    ::placeholder{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
    }
    :focus{
        outline: #EFEFEF;
    }
`;
const Button = styled.button`
    width: 112px;
    height: 31px;
    margin-left: 394px;
    background: #1877F2;
    border-radius: 5px;
    border: none;
    

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
`;