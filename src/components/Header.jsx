import styled from "styled-components";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useContext } from "react";
import { LogOutContext } from "../contexts/MenuContext";
import MenuLogout from "./LogOutMenu";
import SearchBar from "./SearchBar/index.jsx";
import { Link } from "react-router-dom";
import { LogInContext } from "../contexts/PersistenLogInContext";
import { useNavigate } from "react-router-dom";


export default function Header() {

    const { localToken } = useContext(LogInContext);
    const { isMenuOpen, setIsMenuOpen } = useContext(LogOutContext);
    const navigate = useNavigate();

    function handleOutsideClick() {
        if (isMenuOpen) setIsMenuOpen(false);
    }

    function goToUserPage (){
        // navigate(`user/${localToken.id}`)
    }

    return (
        <>
            <HeaderComponent onClick={handleOutsideClick} >
                <LogoName to={'/timeline'}>
                    linkr
                </LogoName>

                <div onClick={() => setIsMenuOpen(!isMenuOpen)} >
                    {isMenuOpen ? <ArrowUp /> : <ArrowDown />}
                    <img data-test="avatar"  src={`${localToken.img}`} alt="profile" onClick={goToUserPage}/>

                </div>
            </HeaderComponent>
            <MenuLogout />
            <SearchBar />
        </>
    );

}
const LogoName = styled(Link)`
    font-size: 30px;
    margin-left: 30px;
    color: white;
    font-weight: 700;
`

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