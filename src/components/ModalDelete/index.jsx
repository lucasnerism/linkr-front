import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

export default function ModalPage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  return (
    <ModalContainer>
      <button onClick={abrirModal}>Abrir modal</button>
        <ModalDelete
          isOpen={modalIsOpen}
          onRequestClose={fecharModal}
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
              background: '#707070',
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
              <Yes onClick={fecharModal}>No, go back</Yes>
              <No onClick={fecharModal}>Yes, delet it</No>
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
    background-color: white;
    color: blue;
    border-radius: 5px;
    border: none;
    font-weight: 700;

`

const No = styled.button`
    width: 100px;
    height: 30px;
    background-color: blue;
    color: white;
    border-radius: 5px;
    border: none;
    font-weight: 500;
`

const ModalText = styled.div`
  
  width: 70%;
  height: 90%;
  text-align: center;

  h2 {
    font-size: 33px;
    font-weight: 700;
    color: white;
  }
`

const ModalDelete = styled(Modal)`
  width: 500px;
  height: 200px;
  border: 1px solid black;
  transition: 5s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  background-color: #171717;
  display: flex;

`