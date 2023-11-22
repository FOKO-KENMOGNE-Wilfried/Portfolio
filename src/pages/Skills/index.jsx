import styled,{keyframes} from "styled-components";
import colors, { font } from "../../utils/styles/style"
import react from "../../assets/logo/react.png";
import es6 from "../../assets/logo/es6.png";
import typescript from "../../assets/logo/typescript.svg";
import sass from "../../assets/logo/sass1.webp";
import figma from "../../assets/logo/figma.png";
import git from "../../assets/logo/git.png";
import github from "../../assets/logo/github.ico";
import firebase from "../../assets/logo/firebase.png";

const TitleEffect = keyframes`
    100%{
        opacity: 1;
        transform: none;
    }
`

const DefultText = styled.div`
    color: white;
    width: 100%;
    height: 100%;
    padding-left: 120px;
    padding-top: 80px;
    font-family: cursive;
    font-size: 20px;
    
`
const TitleStyled = styled.h1`
    margin-left: -40px;
    text-align: center;
    font-family: ${font.primary};
    
`
const BoxContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Box = styled.div`
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
    grid-template-rows: 150px 150px 150px;
    column-gap: 50px;
    row-gap: 20px;
    margin-top: 8%;
    margin-left: -780px;
    width: 0;
`
const StyledImage = styled.img`
    width: 60px;
    height: 60px;
    margin: 30px;
`

const StyledImage1 = styled.img`
    width: 60px;
    height: 60px;
    margin: 30px;
    transition: 
            background-color 1s,
            transform 1s;
    &:hover{
        transform: rotate(360deg);
    }
`

const StyledImageContainer1 = styled.div`
    opacity: 0;
    transform: translateY(-90px);
    animation: ${TitleEffect} 0.8s 0.2s ease-out forwards;
    border: 4px solid ${colors.secondary};
    border-radius: 80px;
    width: 120px;
    height: 120px;
    background: white;
    &:hover{
        transition:
        background 0.4s,
        transform 2s;
    }
`
const StyledImageContainer2 = styled.div`
    opacity: 0;
    transform: translateY(-110px);
    animation: ${TitleEffect} 0.8s 0.3s ease-out forwards;
    border: 4px solid ${colors.secondary};
    border-radius: 80px;
    width: 120px;
    height: 120px;
    background: white;
    &:hover{
        transition:
        background 0.4s,
        transform 2s;
    }
`
const StyledImageContainer3 = styled.div`
    opacity: 0;
    transform: translateY(-130px);
    animation: ${TitleEffect} 0.8s 0.4s ease-out forwards;
    border: 4px solid ${colors.secondary};
    border-radius: 80px;
    width: 120px;
    height: 120px;
    background: white;
    &:hover{
        transition:
        background 0.4s,
        transform 2s;
    }
`
const StyledImageContainer4 = styled.div`
    opacity: 0;
    transform: translateY(-150px);
    animation: ${TitleEffect} 0.8s 0.5s ease-out forwards;
    border: 4px solid ${colors.secondary};
    border-radius: 80px;
    width: 120px;
    height: 120px;
    background: white;
    &:hover{
        transition:
        background 0.4s,
        transform 2s;
    }
`
const StyledImageContainer5 = styled.div`
    opacity: 0;
    transform: translateY(90px);
    animation: ${TitleEffect} 0.8s 0.6s ease-out forwards;
    border: 4px solid ${colors.secondary};
    border-radius: 80px;
    width: 120px;
    height: 120px;
    background: white;
    &:hover{
        transition:
        background 0.4s,
        transform 2s;
    }
`
const StyledImageContainer6 = styled.div`
    opacity: 0;
    transform: translateY(110px);
    animation: ${TitleEffect} 0.8s 0.7s ease-out forwards;
    border: 4px solid ${colors.secondary};
    border-radius: 80px;
    width: 120px;
    height: 120px;
    background: white;
    &:hover{
        transition:
        background 0.4s,
        transform 2s;
    }
`
const StyledImageContainer7 = styled.div`
    opacity: 0;
    transform: translateY(130px);
    animation: ${TitleEffect} 0.8s 0.8s ease-out forwards;
    border: 4px solid ${colors.secondary};
    border-radius: 80px;
    width: 120px;
    height: 120px;
    background: white;
    &:hover{
        transition:
        background 0.4s,
        transform 2s;
    }
`
const StyledImageContainer8 = styled.div`
    opacity: 0;
    transform: translateY(150px);
    animation: ${TitleEffect} 0.8s 0.9s ease-out forwards;
    border: 4px solid ${colors.secondary};
    border-radius: 80px;
    width: 120px;
    height: 120px;
    background: white;
    &:hover{
        transition:
        background 0.4s,
        transform 2s;
    }
`

function Skills(){

    return(
        <DefultText>
            <TitleStyled>
                SKILLS
            </TitleStyled>
            <BoxContainer>
                <Box>    
                    <StyledImageContainer1>
                        <StyledImage1 src={react} alt="react" />
                    </StyledImageContainer1>

                    <StyledImageContainer2>                  
                        <StyledImage src={es6} alt="ES6" />
                    </StyledImageContainer2>

                    <StyledImageContainer3>                   
                        <StyledImage src={typescript} alt="typescript" />
                    </StyledImageContainer3>

                    <StyledImageContainer4>   
                        <StyledImage src={sass} alt="sass" />
                    </StyledImageContainer4>

                    <StyledImageContainer5>
                        <StyledImage src={figma} alt="figma" />
                    </StyledImageContainer5>

                    <StyledImageContainer6>
                        <StyledImage src={git} alt="git" />
                    </StyledImageContainer6>

                    <StyledImageContainer7>
                        <StyledImage src={github} alt="github" />
                    </StyledImageContainer7>

                    <StyledImageContainer8>
                        <StyledImage src={firebase} alt="firebase" />
                    </StyledImageContainer8>
                </Box>
            </BoxContainer>
        </DefultText>
    )
}

export default Skills;