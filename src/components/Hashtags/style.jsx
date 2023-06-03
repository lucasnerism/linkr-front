import styled from "styled-components";

export const Container = styled.div`
  width: 301px;
  height: 406px;
  background: #171717;
  border-radius: 16px;
  position: absolute;
  top: 14.5rem;
  right: 16rem;
  &>div{
    width: 130px;
    height: 293px;
    margin: 22px 16px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Lato';    
    font-weight: 700;
    font-size: 19px;
    color:#FFFFFF
  }
`;

export const Title = styled.h1`
  height: 61px;
  width: 100%;
  border-radius: 16px 16px 0 0;
  border-bottom: 1px solid #484848;
  font-family: 'Oswald';
  font-weight: 700;
  font-size: 27px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  padding:16px;
`;