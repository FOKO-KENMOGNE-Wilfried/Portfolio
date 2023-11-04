import styled, {keyframes} from "styled-components";
import colors from "../../utils/styles/style"


const DefultText = styled.div`
    color: white;
    width: 100%;
    height: 100%;
    padding-left: 100px;
    padding-top: 80px;
    font-family: cursive;
    font-size: 20px;
    
`
const TitleStyled = styled.h1`
    border-bottom: 4px solid ${colors.secondary};
    margin-left: -40px;
    text-align: center;
    
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
    
`
const InvertRotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`
const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    margin-top: 25px;
    position: relative;
    animation: ${InvertRotate} 10s linear infinite;
    
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const StyledImageContainer = styled.div`
    border: 5px dashed ${colors.secondary};
    border-radius: 60px;
    width: 100px;
    height: 100px;
    animation: ${rotate} 10s linear infinite;
    &:hover{
        background: #abbaab;
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
                TOOLS AND APPLICATION
            </TitleStyled>
            <Box>
                <StyledImageContainer>
                    <StyledImage src="src\assets\logo\figma.png" alt="figma" />    
                </StyledImageContainer>

                <StyledImageContainer>
                    <StyledImage src="src\assets\logo\git.png" alt="git" />                 
                </StyledImageContainer>

                <StyledImageContainer>
                    <StyledImage src="src\assets\logo\github.ico" alt="github" />               
                </StyledImageContainer>
                <StyledImageContainer>
                    <StyledImage src="src\assets\logo\firebase.png" alt="github" />               
                </StyledImageContainer>
                <StyledImageContainer>
                    <StyledImage src="src\assets\logo\vscode.png" alt="vscode" />               
                </StyledImageContainer>
            </Box>
        </DefultText>
    )
}

export default Skills;