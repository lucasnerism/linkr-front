import Header from "../../components/Header";
import Hashtags from "../../components/Hashtags";
import PostCard from "../../components/Cards/PostCard";
import { Container, PostContainer, Title } from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function HashtagsPage() {
    const [posts, setPosts] = useState([])

    return (
        <Container>
            <Header />
            <Title data-test="hashtag-title" >#react</Title>
            <Hashtags />
            <PostContainer>
                <PostCard data-test="post"/>
                <PostCard />
                <PostCard />
            </PostContainer>
        </Container>
    )
}