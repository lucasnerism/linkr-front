import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Oval } from 'react-loader-spinner'


export default function ModalLoadingPage({ loading }) {

  return (
    <ModalContainer loading={loading}>
        <ModalLoading
          isOpen={loading}
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
              background: 'none',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '30px',
              outline: 'none',
              padding: '20px'
            }
        }}
        >
          <Oval
            height={80}
            width={80}
            color="white"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="white"
            strokeWidth={2}
            strokeWidthSecondary={2}
        />
        </ModalLoading>
    </ModalContainer>
  );
}
const ModalContainer = styled.div`
  
    width: 100%;
    height: 100%;
    display: ${(props) => props.loading ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    text-align: center;
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

const ModalLoading = styled(Modal)`
  width: 500px;
  height: 200px;
  transition: 5s ease-out;
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  background-color: #171717;
  display: flex;

`