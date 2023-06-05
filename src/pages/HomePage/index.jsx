import styled from "styled-components";
import CardForm from "../../components/Cards/FormCard";
import PostCard from "../../components/Cards/PostCard";
import Header from "../../components/Header";
import React, { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { LogInContext } from "../../contexts/PersistenLogInContext";
import Hashtags from "../../components/Hashtags/index.jsx";

export default function Home() {
    const { localToken } = useContext(LogInContext);
    const [timelinePosts, setTimelinePosts] = React.useState([]);


    useEffect(() => {
        api.getPosts(localToken.token)
            .then(res => {
                setTimelinePosts(res.data);
            })
            .catch(err => console.log(err?.response?.data));
    }, []);



    return (
        <>
            <Header />
            <Container>
                <h1>timeline</h1>
                <ContentContainer>
                    <div>
                        <CardForm />
                        {timelinePosts.length !== 0 ? timelinePosts?.map((post) => {
                            return (
                                <PostCard
                                    key={post.id}
                                    id={post.id}
                                    userId={post.userId}
                                    userImage={post.userImage}
                                    userName={post.userName}
                                    comment={post.comment}
                                    link={post.link}
                                    title={post.title}
                                    description={post.description}
                                    image={post.image}
                                    hashtag={post.hashtags}
                                    likes={post.likes}
                                    commentText={post.commentText}
                                ></PostCard>
                            );
                        }) : <p data-test="message">There are no posts yet</p>}
                    </div>
                    <Hashtags />
                </ContentContainer>
            </Container>
        </>

    );
}

const Container = styled.div`
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
const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
