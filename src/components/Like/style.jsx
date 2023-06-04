import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 45px;
  top: 86px;
  left: 17px;
  button{
    width: 21px;
    height: 21px;
    display: flex;
    padding: 0;
    border: none;
    background: none;
    justify-content: center;
    align-items: center;
  }
  .react-icon{
    font-size: 20px;
    color:#FFFFFF
  }
  .liked{
    color: #AC0000;
  }
  p{
    width: 45px;
    font-family: 'Lato';    
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 4px;
  }
`;