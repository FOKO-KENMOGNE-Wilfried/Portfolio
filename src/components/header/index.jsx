import { NavLink } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/styles/style"
import "./style.css"

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 200px;
    width: 60px;
    height: 98vh;
    position: absolute;
    text-align: center;
    padding-top: 123px;
    box-sizing: border-box;
    border-radius: 6px;
    background: ${colors.primary};
`;
const SocialStyled = styled.a`
    background-color: ${colors.primary};
    background: ${colors.primary};
    margin-bottom: 50px;
`;
const PagesStyled = styled.div`
background: ${colors.primary};
    display: flex;
    flex-direction: column;
    gap: 23px;
    background-color: ${colors.primary};
`;
const ImageStyled = styled.img`
height: 23px;
    width: 23px;
    background: ${colors.primary};
    filter: grayscale(1);
`;
const SocialImageStyled = styled.img`
    background: ${colors.primary};
    filter: grayscale(1);
    height: 23px;
    width: 23px;
`;

const ImageLinkStyled = styled(NavLink)`
    background-color: ${colors.primary};
    background: ${colors.primary};
`;




function Header(){


    return(
        
            <StyledNav>
                <PagesStyled>
                            <ImageLinkStyled to={"/"} className="active-link" ><ImageStyled src="src\assets\logo\home.svg" alt="home" /></ImageLinkStyled>
                            <ImageLinkStyled to={"/about"} className="active-link"><ImageStyled src="src\assets\logo\about1.svg" alt="about" /></ImageLinkStyled>
                            <ImageLinkStyled to={"/skills"} className="active-link"><ImageStyled src="src\assets\logo\skills.svg" alt="skills" /></ImageLinkStyled>
                            <ImageLinkStyled to={"/portfolio"} className="active-link"><ImageStyled src="src\assets\logo\portfolio1.svg" alt="portfolio" /></ImageLinkStyled>
                            <ImageLinkStyled to={"/contact"} className="active-link"><ImageStyled src="src\assets\logo\contact.svg" alt="contact" /></ImageLinkStyled>
                </PagesStyled>
                <SocialStyled href="https://www.linkedin.com/in/foko-kenmogne-wilfried-0283a825b" target="_blank" rel="noopener">
                    <ImageLinkStyled><SocialImageStyled src="src\assets\logo\linkedin.svg" alt="linkedin"  /></ImageLinkStyled>
                </SocialStyled>
            </StyledNav>
    )
}

export default Header;