import styled from "styled-components";

export const Title = styled.h1`
  height: 61px;
  width: 100%;
  border-radius: 16px 16px 0 0;
  font-family: 'Oswald';
  font-weight: 700;
  font-size: 2.6rem;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  padding:1rem;
  position: absolute;
  top: 8rem;
  left: 38rem; 
  margin-bottom: 2.5rem;
`;
export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;
export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;    
`;

export const ContentContainer = styled.div`
  margin-top: 14rem;
  width: 931px;
  display: flex;
  justify-content: space-between;
`;