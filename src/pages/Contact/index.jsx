import styled, {keyframes} from "styled-components";
import colors from "../../utils/styles/style";

const DefultText = styled.div`
    color: white;
    margin-top: 150px;
    font-family: cursive;
    width: 100%;
    font-size: 20px;
    
`
const TitleStyled = styled.h1`
    text-decoration: underline;
    text-align: center;
    
`
const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 150px;
    
    margin-top: 150px;
`
const InverteRotate = keyframes`
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
    animation: ${InverteRotate} 10s linear infinite;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `
const StyledImageDiv = styled.div`
    text-align: center;
    border: 5px dashed ${colors.secondary};
    border-radius: 80px;   
    width: 100px;
    height: 100px;
    animation: ${rotate} 10s linear infinite;
`
const StyledMailP = styled.p`
    margin-left: -70px;
    margin-top: 40px;
    position: absolute;
    left: 37%;
    top: 65%;
`
const StyledPhoneP = styled.p`
    margin-left: -10px;
    margin-top: 40px;
    width: 130px;
    position: absolute;
    left: 56%;
    top: 65%;
`

function Contact(){
    return(
        <DefultText>
            <TitleStyled>CONTACT ME</TitleStyled>
            <Box>
                <StyledImageDiv>
                    <StyledImage src="src\assets\logo\mail2.png" alt="mail" />
                </StyledImageDiv>
                <StyledMailP>fokowilfried7@gmail.com</StyledMailP>
                <StyledImageDiv>
                    <StyledImage src="src\assets\logo\phone2.png" alt="phone" />
                </StyledImageDiv>
                <StyledPhoneP>683 41 52 30</StyledPhoneP>
            </Box>
        </DefultText>
    )
}

export default Contact;