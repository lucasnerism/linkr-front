import styled from "styled-components";
import CardForm from "../../components/Cards/FormCard";
import PostCard from "../../components/Cards/PostCard";
import Header from "../../components/Header";
import React, { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { LogInContext } from "../../contexts/PersistenLogInContext";

export default function Home() {
    const { localToken } = useContext(LogInContext);
    const [timelinePosts, setTimelinePosts] = React.useState([]);


    useEffect(() => {
        api.getPosts(localToken.token)
            .then(res => {
                console.log(res.data);
                setTimelinePosts(res.data);
            })
            .catch(err => console.log(err?.response?.data));
    }, []);

    console.log(localToken);

    return (
        <>
            <Header />
            <Container>
                <h1>timeline</h1>
                <CardForm />
                {timelinePosts?.map((post) => {
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
                })}
            </Container>
        </>

    );
}

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
    
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
`

