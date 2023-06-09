import CardForm from "../../components/Cards/FormCard";
import PostCard from "../../components/Cards/PostCard";
import Header from "../../components/Header";
import React, { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { LogInContext } from "../../contexts/PersistenLogInContext";
import Hashtags from "../../components/Hashtags/index.jsx";
import { Container, ContentContainer, Refresh, NewPostsButton } from "./style";
import useInterval from "use-interval";

export default function Home() {
    const { localToken } = useContext(LogInContext);
    const [timelinePosts, setTimelinePosts] = React.useState([]);
    const [reloadTimeline, setReloadTimeline] = useState(false);
    const [allPosts, setAllPosts] = useState([]);
    const [displayButton, setDisplayButton] = useState(false);
    const [postQuantity, setPostQuantity] = useState(0);


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
        };
    };
    function handleClick(){
        setReloadTimeline(!reloadTimeline);
        setDisplayButton(false);
        setPostQuantity(0);
    }

    useInterval(() => api.getPosts(localToken.token)
        .then(res => {
            setAllPosts(res.data);
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
                        onClick={handleClick}
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
};