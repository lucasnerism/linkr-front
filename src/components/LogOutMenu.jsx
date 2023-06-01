import styled from "styled-components";
import { useContext } from "react";
import { LogOutContext } from "../contexts/MenuContext";

export default function MenuLogout() {
    const { isMenuOpen } = useContext(LogOutContext)

    function handleLogOut(){
        console.log("O backend ainda será implementado :D")
    }
    return (
        <>
            <ul>
                <Option open={isMenuOpen} onClick={handleLogOut} >Logout</Option>
            </ul>
        </>
    )
}

const Option = styled.li`
    width: 10rem;
    height: 3rem;
    display: ${props => props.open ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    margin-top: 4.5rem;
    border-radius: 0 0 0 1.5rem;
    position: fixed;
    right: 0;
    background-color: #171717;
    color: #FFF;
    font-family: 'Lato';
    font-weight: 700;
    font-size: 1rem;
`