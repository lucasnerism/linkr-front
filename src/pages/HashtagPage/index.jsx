import Header from "../../components/Header";
import Hashtags from "../../components/Hashtags";
import PostCard from "../../components/Cards/PostCard";
import { Container, ContentContainer, PostContainer, Title } from "./style";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { useContext } from "react";
import { LogInContext } from "../../contexts/PersistenLogInContext";
export default function HashtagsPage() {
    const { localToken } = useContext(LogInContext);
    const { hashtag } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.getPostsByHashtag(hashtag, localToken.token)
            .then(res => setPosts(res.data))
            .catch(err => console.log(err.response.data));
    }, []);
    return (
        <Container>
            <Header />
            <Title data-test="hashtag-title" > # {hashtag} </Title>
            <ContentContainer>
                <PostContainer>
                    {posts?.map((post, i) => <PostCard id={post.id}
                        data-test="post"
                        userId={post.userId}
                        userImage={post.userImage}
                        userName={post.userName}
                        comment={post.comment}
                        link={post.link}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                        hashtag={post.hashtag}
                        likes={post.likes}
                        commentText={post.commentText} />)}
                </PostContainer>
                <Hashtags />
            </ContentContainer>
        </Container>
    );
}