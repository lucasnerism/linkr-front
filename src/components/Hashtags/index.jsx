import { Container, Title } from "./style.jsx";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api.js";
import { LogInContext } from "../../contexts/PersistenLogInContext.jsx";

export default function Hashtags() {
  const [hashtags, setHashtags] = useState([]);
  const { localToken } = useContext(LogInContext);

  useEffect(() => {
    api.getTrending(localToken.token)
      .then(res => {
        setHashtags(res.data);
      })
      .catch(err => console.log(err?.response?.data));
  }, []);

  return (
    <Container data-test="trending">
      <Title>
        trending
      </Title>
      <div>
        {hashtags?.map((tag, i) => <Link to={`/hashtags/${tag.name}`} key={i} data-test="hashtag">{`# ${tag.name}`}</Link>)}
      </div>
    </Container>
  );
}