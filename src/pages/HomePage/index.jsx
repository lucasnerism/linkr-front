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
    const [reloadTimeline, setReloadTimeline] = useState(false);


    useEffect(() => {
        api.getPosts(localToken.token)
            .then(res => {
                setTimelinePosts(res.data);
            })
            .catch(err => console.log(err?.response?.data));
    }, [reloadTimeline]);



    return (
        <>
            <Header />
            <Container>
                <h1>timeline</h1>
                <ContentContainer>
                    <div>
                        <CardForm reloadTimeline={reloadTimeline} setReloadTimeline={setReloadTimeline} />
                        {timelinePosts.length !== 0 ? timelinePosts?.map((post, i) => {
                            return (
                                <PostCard
                                    key={i}
                                    id={post.id}
                                    userId={post.userId}
                                    userImage={post.userImage}
                                    userName={post.userName}
                                    comment={post.comment}
                                    link={post.link}
                                    title={post.title}
                                    description={post.description}
                                    image={post.image}
                                    hashtags={post.hashtags}
                                    likes={post.likes}
                                    commentText={post.commentText}
                                    repost={post.reposted_by}
                                ></PostCard>
                            );
                        }) : localToken.followSomeone ? <p data-test="message">No posts found from your friends</p> : <p data-test="message">You don't follow anyone yet. Search for new friends!</p>}
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
