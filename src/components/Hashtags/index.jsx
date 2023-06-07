import { Container, Title } from "./style.jsx";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api.js";
import { LogInContext } from "../../contexts/PersistenLogInContext.jsx";

export default function Hashtags() {
  const [hashtags, setHashtags] = useState([]);
  const { localToken } = useContext(LogInContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getTrending(localToken.token)
      .then(res => {
        setHashtags(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err?.response?.data);
        setLoading(false);
      });
  }, []);
  if (loading) return <></>;
  return (
    <Container data-test="trending">
      <Title>
        trending
      </Title>
      <div>
        {hashtags?.map((tag, i) => <Link to={`/hashtag/${tag.name}`} key={i} data-test="hashtag">{`#${tag.name}`}</Link>)}
      </div>
    </Container>
  );
}