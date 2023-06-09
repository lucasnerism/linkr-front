import styled from "styled-components";

export const Container = styled.div`
    width: 611px;
    display: flex;
    flex-direction: column;
    padding: ${props => props.color == 'white' ? "15px" : "0"};
    background: ${props => props.color == 'white' ? '#FFFFFF' : '#171717'};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    position: relative;
    margin-bottom: 30px;
`;