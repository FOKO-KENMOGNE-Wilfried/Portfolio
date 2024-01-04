import { NavLink } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/styles/style"
import "./style.css"
import home from "../../assets/logo/home.svg";
import about from "../../assets/logo/about1.svg"
import skills from "../../assets/logo/skills.svg"
import portfolio from "../../assets/logo/portfolio1.svg"
import contact from "../../assets/logo/contact.svg"
import linkedin from "../../assets/logo/linkedin.svg"

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 200px;
    width: 60px;
    height: 98%;
    position: fixed;
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
                            <ImageLinkStyled to={"/"} className="active-link" ><ImageStyled src={home} alt="home" /></ImageLinkStyled>
                            <ImageLinkStyled to={"/about"} className="active-link"><ImageStyled src={about} alt="about" /></ImageLinkStyled>
                            <ImageLinkStyled to={"/skills"} className="active-link"><ImageStyled src={skills} alt="skills" /></ImageLinkStyled>
                            <ImageLinkStyled to={"/portfolio"} className="active-link"><ImageStyled src={portfolio} alt="portfolio" /></ImageLinkStyled>
                            <ImageLinkStyled to={"/contact"} className="active-link"><ImageStyled src={contact} alt="contact" /></ImageLinkStyled>
                </PagesStyled>
                <SocialStyled href="https://www.linkedin.com/in/foko-kenmogne-wilfried-0283a825b" target="_blank" rel="noopener">
                    <SocialImageStyled src={linkedin} alt="linkedin"  />
                </SocialStyled>
            </StyledNav>
    )
}

export default Header;