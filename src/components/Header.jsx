import styled from "styled-components";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useContext } from "react";
import { LogOutContext } from "../contexts/MenuContext";
import MenuLogout from "./LogOutMenu";
import SearchBar from "./SearchBar/index.jsx";

export default function Header() {
    const { isMenuOpen, setIsMenuOpen } = useContext(LogOutContext);
    function handleOutsideClick() {
        if (isMenuOpen) setIsMenuOpen(false);
    }
    return (
        <>
            <HeaderComponent onClick={handleOutsideClick} >
                <h1>
                    linkr
                </h1>

                <div onClick={() => setIsMenuOpen(!isMenuOpen)} >
                    {isMenuOpen ? <ArrowUp /> : <ArrowDown />}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLZbvW_h9rxKib4hxDxnuMJARuMyi3dSDGhTi36mbNw&s" alt="profile" />
                </div>
            </HeaderComponent>
            <MenuLogout />
            <SearchBar />
        </>
    );

}

const HeaderComponent = styled.header`
    width: 100%;
    height: 4.5rem;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-family: 'Passion One', cursive;
        font-weight: 700;
        font-size: 3rem;
        color: #FFF;
        padding: 1.75rem;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 3.3rem;
        height: 3.3rem;
        border-radius: 50%;
        padding: 0.6rem;
    }
`;
const ArrowDown = styled(SlArrowDown)`
    width: 1.125rem;
    height: 0.75rem;
    color: #FFFFFF;   
`;
const ArrowUp = styled(SlArrowUp)`
    width: 1.125rem;
    height: 0.75rem;
    color: #FFFFFF;   
`;