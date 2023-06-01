import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  width: 563px;
  background-color: #E7E7E7;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  &>div{
    background-color: #E7E7E7;
    overflow-x: scroll;
    padding: 14px 17px 23px;
    max-height: 300px;
    border-radius: 8px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media (width <= 375px) {
    top: 80px;
    width: 94%;
    padding: 0 15px;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  background: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 11px 17px;
  font-size: 19px;
  ::placeholder{
    color: #C6C6C6;
  }
`;

export const Button = styled.button`
  width: 45px;
  height: 41px;
  border: none;
  border-radius: 8px;
  position: absolute;
  top: 2px;
  right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #C6C6C6;
  background-color: #FFFFFF;
  .react-icon{
    width: 21px;
    height: 21px;
  }
`;

export const User = styled.div`
  a{
    width: 100%;
    display: flex;
    align-items: center;
  }
  img{
    width: 39px;
    height: 39px;
    border-radius: 50%;
    margin-right: 12px;
  }
  p{
    font-size: 19px;
    color: #515151;
  }
  &~&{
    margin-top: 17px;
  }
`;