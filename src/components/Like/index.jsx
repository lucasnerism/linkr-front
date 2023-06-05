import { useContext, useState } from "react";
import { Container } from "./style.jsx";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { LogInContext } from "../../contexts/PersistenLogInContext.jsx";
import api from "../../services/api.js";
import { Tooltip } from "react-tooltip";
import { useEffect } from "react";

export default function Like(props) {
  const { localToken: user } = useContext(LogInContext);
  const [likes, setLikes] = useState(props.likes);
  const [disabled, setDisabled] = useState(false);

  const handleLikes = (dislike) => {
    setDisabled(true);
    if (dislike) {
      api.dislikePost(props.post_id, user.token)
        .then(res => {
          setLikes(res.data);
          setDisabled(false);
        })
        .catch(err => {
          console.log(err?.response?.data.message);
          setDisabled(false);
        });
    } else {
      api.likePost(props.post_id, user.token)
        .then(res => {
          setLikes(res.data);
          setDisabled(false);
        })
        .catch(err => {
          console.log(err?.response?.data.message);
          setDisabled(false);
        });
    }
  };

  const getTooltip = () => {
    const userLiked = likes.users.find(el => el.id === Number(user.id));
    const filterLikes = userLiked ? likes.users.filter(el => el.id !== Number(user.id)) : "";
    if (Number(likes.total) === 0) return 'Nenhuma curtida';
    if (Number(likes.total) === 1) return `${userLiked ? "Você" : likes.users[0].name} curtiu`;
    if (Number(likes.total) === 2) return `${userLiked ? `Você e ${filterLikes[0].name}` : `${likes.users[0].name} e ${likes.users[1].name}`} curtiram`;
    if (Number(likes.total) === 3) return `${userLiked ? `Você, ${filterLikes[0].name}` : `${likes.users[0].name}, ${likes.users[1].name}`} e outra 1 pessoa curtiram`;
    return `${userLiked ? `Você, ${filterLikes[0].name}` : `${likes.users[0].name}, ${likes.users[1].name}`} e outras ${likes.total - 2} pessoas curtiram`;
  };

  return (
    <Container>
      {likes.users?.find(el => el.id === Number(user.id)) ?
        <button onClick={() => handleLikes('dislike')} disabled={disabled}><IoHeart className="react-icon liked" /></button>
        :
        <button onClick={() => handleLikes()} disabled={disabled}><IoHeartOutline className="react-icon" /></button>}
      <p
        data-tooltip-id="like-tooltip"
        data-tooltip-content={getTooltip()}
      >{`${likes.total} likes`}</p>
      <Tooltip id="like-tooltip" place="bottom" />
    </Container>
  );
}