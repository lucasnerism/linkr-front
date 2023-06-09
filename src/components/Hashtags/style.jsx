import styled from "styled-components";

export const Container = styled.div`
  width: 301px;
  height: 406px;
  background: #171717;
  border-radius: 16px;
  &>div{
    width: 130px;
    height: 293px;
    margin: 22px 16px 30px;
    display: flex;
    flex-direction: column;
    font-family: 'Lato';
    font-weight: 700;
    font-size: 19px;
    color:#FFFFFF;
    a~a{
      margin-top: 11px;
    }
  }
  @media (width <= 937px) {
    display: none;
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