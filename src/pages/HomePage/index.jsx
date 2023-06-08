import styled from "styled-components";
import CardForm from "../../components/Cards/FormCard";
import PostCard from "../../components/Cards/PostCard";
import Header from "../../components/Header";
import React, { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { LogInContext } from "../../contexts/PersistenLogInContext";
import Hashtags from "../../components/Hashtags/index.jsx";
import { BiRefresh } from "react-icons/bi";
import useInterval from "use-interval";

export default function Home() {
    const { localToken } = useContext(LogInContext);
    const [timelinePosts, setTimelinePosts] = React.useState([]);
    const [reloadTimeline, setReloadTimeline] = useState(false);
    const [allPosts, setAllPosts] = useState([]);
    const [displayButton, setDisplayButton] = useState(false)
    const [postQuantity, setPostQuantity] = useState(0)


    useEffect(() => {
        api.getPosts(localToken.token)
            .then(res => {
                setTimelinePosts(res.data);
            })
            .catch(err => console.log(err?.response?.data));
    }, [reloadTimeline]);

    function updatePosts() {
        const newPosts = allPosts.filter(post => !timelinePosts.some(p => p.id === post.id));
        if(newPosts.length > 0){
            setDisplayButton(true);
            setPostQuantity(newPosts.length);
        }
    }

    useInterval(() => api.getPosts(localToken.token)
        .then(res => {
            setAllPosts(...res.data)
            updatePosts();
        })
        .catch(err => console.log(err?.response?.data)), 15000);

    return (
        <>
            <Header />
            <Container>
                <h1>timeline</h1>
                <ContentContainer>
                    <div>
                        <CardForm reloadTimeline={reloadTimeline} setReloadTimeline={setReloadTimeline} />
                        <NewPostsButton 
                        onClick={() => setReloadTimeline(!reloadTimeline)}
                        data-test="load-btn" 
                        displayButton={displayButton} >
                            <p>{postQuantity} new posts, load more!</p>
                            <Refresh />
                        </NewPostsButton>
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
const NewPostsButton = styled.button`
    width: 38rem;
    height: 4rem;
    background-color: #1877F2;
    color: #FFF;
    border-radius: 1rem;
    box-shadow: 0 4px 4px rgba(0 0 0 .25);
    font-family: 'Lato';
    font-weight: 400;
    font-size: 1rem;
    display: ${props => props.displayButton ?"flex" : none};
    justify-content: center;
    align-items: center;
`;
const Refresh = styled(BiRefresh)`
    width: 22px;
    height: 1rem;
`