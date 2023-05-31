import styled from "styled-components";
import { Container } from "./styled/Container.jsx";
import { UserImage } from "./styled/UserImage.jsx"

export default function FormCard() {
    return (
        <Container color="white">
            <UserImage/>
            <Form>
                <Title>What are you going to share today?</Title>
                <Input placeholder="http://" />
                <TextArea placeholder="Awesome article about #javascript" />
                <Button>Publish</Button>
            </Form>

        </Container>
    );
}

const Form = styled.form`
    width: 300px;
    margin-left: 15px;
`
const Title = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
`
const Input = styled.input`
    width: 503px;
    height: 30px;
    background: #EFEFEF;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    padding: 10px;
    ::placeholder{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
    }

    :focus{
        outline: #EFEFEF;
    }
`
const TextArea = styled.textarea`
    width: 502px;
    height: 66px;
    background: #EFEFEF;
    border-radius: 5px;
    border: none;
    margin: 5px 0px;
    box-sizing: border-box;
    padding: 10px;
    ::placeholder{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
    }
    :focus{
        outline: #EFEFEF;
    }
`
const Button = styled.button`
    width: 112px;
    height: 31px;
    margin-left: 394px;
    background: #1877F2;
    border-radius: 5px;
    border: none;
    

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
`