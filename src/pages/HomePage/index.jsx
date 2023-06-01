import styled from "styled-components"
import CardForm from "../../components/Cards/FormCard"
import Card from "../../components/Cards/PostCard"

export default function Home() {

    return (
       <Container>
            <h1>timeline</h1>
            <CardForm/>
            <Card/>
            <Card/>
       </Container>
    )
}

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
    
    width: 145px;
    height: 64px;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    /* identical to box height */
    color: #FFFFFF;
    margin: 78px 470px 43px 0px;
    }
`

