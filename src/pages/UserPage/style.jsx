import styled from "styled-components";

export const Container = styled.section`
  padding-top: 72px;
  margin: 0 auto;
  width: 937px;
  @media (width <= 375px) {
    width: 94%;        
  }
`;

export const PostsContainer = styled.div`
  @media (width <= 937px) {
    margin: auto;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserTitle = styled.title`
  padding: 60px 0px 48px 18px;
  display: flex;
  align-items: center;
  width: 100%;
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 18px;
  }
  h1{
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #FFFFFF;    
  }
  @media (width <= 375px) {
    width: 100%;
    padding: 60px 0px 19px 5px;
    img{
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    h1{
      font-size: 31px;
      width: 300px;
      white-space: nowrap;
      display: flex;
    }
    span{
      display: inline-block;
      max-width: 170px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;