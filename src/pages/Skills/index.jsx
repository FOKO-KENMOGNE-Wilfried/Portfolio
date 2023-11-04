import styled from "styled-components";
import colors from "../../utils/styles/style"


const DefultText = styled.div`
    color: white;
    width: 100%;
    height: 100%;
    padding-left: 100px;
    padding-top: 80px;
    font-family: cursive;
    font-size: 20px;
    border: 1px solid red;
`
const TitleStyled = styled.h1`
    border-top: 4px solid ${colors.secondary};
    border-bottom: 4px solid ${colors.secondary};
    margin-left: -40px;
    margin-right: -5px;
    text-align: center;
    border: 1px solid red;
`
const Box = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    border: 1px solid red;
`
const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    margin-top: 25px;
    background: ${colors.secondary};
    border: 1px solid red;
`
const StyledImageContainer = styled.div`
    border: 2px solid ${colors.secondary};
    background: ${colors.secondary};
    border-radius: 50px;
    width: 100px;
    height: 100px;
    border: 1px solid red;
`

function Skills(){
    return(
        <DefultText>
            <TitleStyled>
                MY SKILLS
            </TitleStyled>
            <Box>
                <StyledImageContainer>
                    <StyledImage src="src\assets\logo\react.png" alt="react" />
                </StyledImageContainer>

                <StyledImageContainer>                  
                    <StyledImage src="src/assets/logo/es6.png" alt="ES6" />
                </StyledImageContainer>

                <StyledImageContainer>                   
                    <StyledImage src="src\assets\logo\typescript1.png" alt="typescript" />
                </StyledImageContainer>

                <StyledImageContainer>   
                    <StyledImage src="src\assets\logo\sass1.webp" alt="sass" />
                </StyledImageContainer>
            </Box>
            <TitleStyled>
                MY TOOLS
            </TitleStyled>
            <Box>
                <StyledImageContainer>
                    <StyledImage src="src\assets\logo\figma.png" alt="figma" />    
                </StyledImageContainer>

                <StyledImageContainer>
                    <StyledImage src="src\assets\logo\git.png" alt="git" />                 
                </StyledImageContainer>

                <StyledImageContainer>
                    <StyledImage src="src\assets\logo\github.png" alt="github" />               
                </StyledImageContainer>
            </Box>
        </DefultText>
    )
}

export default Skills;