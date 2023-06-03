import { Container, Title } from "./style.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hashtags() {
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    //requisição pra api aqui
    //   .then(res => {
    //   setHashtags(res.data);
    // })
    //     .catch(err => console.log(err?.response?.data));
  }, []);

  return (
    <Container data-test="trending">
      <Title>
        trending
      </Title>
      <div>
        {hashtags?.map((tag, i) => <Link to={`/hashtags/${tag}`} key={i} data-test="hashtag">{`# ${tag}`}</Link>)}
        <p># grupo11</p>
        <p># o</p>
        <p># melhor</p>
        <p># de</p>
        <p># todos</p>
        <p># javascript</p>
        <p># react</p>
        <p># node</p>
        <p># front-end</p>
        <p># back-end</p>
      </div>
    </Container>
  );
}