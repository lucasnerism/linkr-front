import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import api from "../../services/api.js";
import { LogInContext } from "../../contexts/PersistenLogInContext.jsx";
import Header from "../../components/Header.jsx";
import PostCard from "../../components/Cards/PostCard.jsx";
import { Container, UserTitle } from "./style.jsx";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
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
        <UserTitle>
          <img src={user.image} alt="" />
          <h1><span>{user.name}</span>`s posts</h1>
        </UserTitle>
        <div>
          <div>
            {user.posts?.map(post =>
              <PostCard
                key={post.id}
                userId={user.id}
                userName={user.name}
                userImage={user.image}
                comment={post.description}
                link={post.link}
                like={post.likes}
                hashtags={post.hashtags}
              />
            )}
          </div>
        </div>
      </Container>
    </>
  );
}