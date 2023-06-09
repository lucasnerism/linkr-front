import styled from "styled-components";
import React, { useEffect } from "react";
import api from "../../services/api";
import { func } from "prop-types";

export default function FollowingButton({ id, localToken, otherUser, checkFollow, setCheckFollow, requestBack, setRequestBack }) {


    function handleFollow() {
        setRequestBack(true);
        if (!checkFollow) {
            api.createFollow(id, localToken.token)
                .then((res) => {
                    setCheckFollow(true);
                    setRequestBack(false);
                })
                .catch((err) => {
                    alert(err?.response?.data)
                    setRequestBack(false)
                })
        } else {
            api.deleteFollow(id, localToken.token)
                .then((res) => {
                    setCheckFollow(false);
                    setRequestBack(false);
                })
                .catch((err) => {
                    alert(err?.response?.data);
                    setRequestBack(false);
                });
        }

    }

    return (
        <FollowingContainer
            data-test="follow-btn"
            follow={checkFollow}
            otherUser={otherUser}
            onClick={handleFollow}
            disabled={requestBack}
        >
            {checkFollow ? "unfollow" : "follow"}
        </FollowingContainer>
    );
}

const FollowingContainer = styled.button`
  
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  position: absolute;
  font-size: 18px;
  font-weight: 500;

  
  right: 0;
  opacity: ${(props) => props.otherUser ? "0" : "1"};
  color: ${(props) => props.follow ? "#0d77e8" : "white"};
  background-color: ${(props) => props.follow ? "white" : "#0d77e8"};

`;