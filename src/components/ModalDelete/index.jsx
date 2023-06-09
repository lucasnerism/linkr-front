import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import api from "../../services/api";
import { useContext } from 'react';
import { LogInContext } from "../../contexts/PersistenLogInContext.jsx";



export default function ModalPage({openedDeleteModal, setOpenedModal, setLoading, postId}) {
  const { localToken } = useContext(LogInContext);

  function closeModal() {
    setOpenedModal(false);
  }

  function deletePost () {
    setLoading(true);
    api.deletePost(postId, localToken.token)
    .then((response) => {
      console.log(response.data);
      setLoading(false);
      // recarregar os posts
      setOpenedModal(false);
      window.location.reload();
    })
    .catch((error) => {
      setLoading(false);
      alert("Não foi possível exlcluir o post!");
      setOpenedModal(false);
    });
  }

  return (
    <ModalContainer>
        <ModalDelete
          isOpen={openedDeleteModal}
          onRequestClose={closeModal}
          contentLabel="Are you sure you want to delete this post?"
          style={{
            overlay: {
              position: 'fixed',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              opacity: 1,
            },

            content: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              border: 'none',
              background: '#171717',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '30px',
              outline: 'none',
              padding: '20px'
            }
        }}
        >
          <ModalText>
            <h2>Are you sure you want to delete this?</h2>
            <ConfirmOptions>
              <No data-test="cancel" onClick={closeModal}>No, go back</No>
              <Yes data-test="confirm" onClick={deletePost}>Yes, delete it</Yes>
            </ConfirmOptions>
          </ModalText>
        </ModalDelete>
    </ModalContainer>
  );
}
const ModalContainer = styled.div`
  
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 4;
`
const ConfirmOptions = styled.div`
  
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-around;
`

const Yes = styled.button`
    width: 100px;
    height: 30px;
    background-color: blue;
    color: white;
    border-radius: 5px;
    border: none;
    font-weight: 700;

`

const No = styled.button`
    width: 100px;
    height: 30px;
    background-color: white;
    color: blue;
    border-radius: 5px;
    border: none;
    font-weight: 500;
`

const ModalText = styled.div`
  
  width: 70%;
  height: 90%;
  text-align: center;
  z-index: 4;

  h2 {
    font-size: 33px;
    font-weight: 700;
    color: white;
  }
`

const ModalDelete = styled(Modal)`
  width: 500px;
  height: 200px;
  transition: 5s ease-out;
  box-shadow: 4rem 4rem 4rem rgba(0, 0, 0, 0.4);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  background-color: #171717;
  display: flex;
  z-index: 4;

`