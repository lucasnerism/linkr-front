import styled from "styled-components";
import { Container } from "./styled/Container.jsx";
import { UserImage } from "./styled/UserImage.jsx";
import { Link } from "react-router-dom";

export default function PostCard() {
    return (
        <Container >
            <UserImage />
            <Form>
                <Link to={`/user/-inserirIdAqui-`}><UserName>Juvenal Juvêncio </UserName></Link>

                <Comment>
                    Muito maneiro esse tutorial de Material UI com React, deem uma olhada!
                </Comment>

                <PostContainer>
                    <div>
                        <PostTitle>
                            Como aplicar o Material UI em um
                            projeto React
                        </PostTitle>

                        <PostComment>
                            Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.
                        </PostComment>

                        <LinkPost>
                            https://medium.com/@pshrmn/a-simple-react-router
                        </LinkPost>
                    </div>

                    <ImagePost />

                </PostContainer>
            </Form>

        </Container>
    );
}

const Form = styled.form`
    width: 300px;
    margin-left: 15px;
`;
const UserName = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    /* identical to box height */
    color: #FFFFFF;
`;
const Comment = styled.p`
    width: 502px;
    height: 52px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #B7B7B7;
    
`;
const PostContainer = styled.div`
    box-sizing: border-box;
    width: 503px;
    height: 155px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    display: flex;
    justify-content: space-between;

    div{
        box-sizing: border-box;
        padding-left: 15px;
    }
`;
const PostTitle = styled.p`

    width: 249.98px;
    height: 38px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #CECECE;
`;
const PostComment = styled.p`
    width: 302.82px;
    height: 39px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9B9595;
`;
const LinkPost = styled.p`
    width: 263.19px;
    height: 13px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #CECECE;
`;
const ImagePost = styled.img`
    width: 153.44px;
    height: 153.4px;
    background: url(image.png);
    background-color: blue;
    border-radius: 0px 12px 13px 0px;
`;