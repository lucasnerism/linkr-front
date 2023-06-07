import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import api from "../../services/api.js";
import { LogInContext } from "../../contexts/PersistenLogInContext.jsx";
import Header from "../../components/Header.jsx";
import PostCard from "../../components/Cards/PostCard.jsx";
import { Container, ContentContainer, PostsContainer, UserTitle } from "./style.jsx";
import Hashtags from "../../components/Hashtags/index.jsx";
import React from "react";
import FollowingButton from "../../components/FollowingButton/index.jsx";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const { localToken } = useContext(LogInContext);
  const [otherUser, setOtherUser] = React.useState(false)
  const [checkFollow, setCheckFollow] = React.useState();

  useEffect(() => {
    api.getUserById(id, localToken.token)
      .then(res => {
        setOtherUser(res.data.id === localToken.id)
        setUser(res.data);
        setCheckFollow(res.data.following)
      })
      .catch(err => console.log(err?.response?.data));

  }, []);

  console.log(user)

  return (
    <>
      <Header />
      <Container>
        {user ? <UserTitle>
          <img src={user.image} alt="" />
          <h1><span>{user.name}</span>`s posts</h1>
          <FollowingButton 
            id={id}
            otherUser={otherUser}
            localToken={localToken}
            checkFollow={checkFollow}
            setCheckFollow={setCheckFollow}
            >
              {checkFollow ? "unfollow" : "follow"}
          </FollowingButton>
        </UserTitle> : ""}
        <ContentContainer>
          <PostsContainer>
            {user.posts?.map(post => {

              return (
                <PostCard
                  key={post.id}
                  id={post.id}
                  userId={user.id}
                  userName={user.name}
                  userImage={user.image}
                  image={post.image}
                  title={post.title}
                  comment={post.comment}
                  link={post.link}
                  likes={post.likes}
                  description={post.description}
                  hashtags={post.hashtags}
                />
              );
            })}
          </PostsContainer>
          <Hashtags />
        </ContentContainer>
      </Container>
    </>
  );
}
