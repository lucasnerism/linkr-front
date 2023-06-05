import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import api from "../../services/api.js";
import { LogInContext } from "../../contexts/PersistenLogInContext.jsx";
import Header from "../../components/Header.jsx";
import PostCard from "../../components/Cards/PostCard.jsx";
import { Container, ContentContainer, PostsContainer, UserTitle } from "./style.jsx";
import Hashtags from "../../components/Hashtags/index.jsx";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const { localToken } = useContext(LogInContext);


  useEffect(() => {
    api.getUserById(id, localToken.token)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err?.response?.data));
  }, []);

  return (
    <>
      <Header />
      <Container>
        {user ? <UserTitle>
          <img src={user.image} alt="" />
          <h1><span>{user.name}</span>`s posts</h1>
        </UserTitle> : ""}
        <ContentContainer>
          <PostsContainer>
            {user.posts?.map(post => {
              if(post.userId===localToken.id) {
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
                )
              }
              
          })}
          </PostsContainer>
          <Hashtags />
        </ContentContainer>
      </Container>
    </>
  );
}