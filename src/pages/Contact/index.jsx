import styled from "styled-components";
import colors from "../../utils/styles/style";

const DefultText = styled.div`
    color: white;
    margin-top: 150px;
    font-family: cursive;
    width: 100%;
    font-size: 20px;
    border: 1px solid red;
`
const TitleStyled = styled.h1`
    text-decoration: underline;
    text-align: center;
    border: 1px solid red;
`
const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 150px;
    border: 1px solid red;
    margin-top: 150px;
`
const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    margin-top: 25px;
    background: ${colors.secondary};
`
const StyledImageDiv = styled.div`
    background: ${colors.secondary};
    text-align: center;
    border-radius:50px;
    border: 1px solid red;
    width: 100px;
    height: 100px;
`
const StyledMailP = styled.p`
    margin-left: -70px;
    margin-top: 40px;
`
const StyledPhoneP = styled.p`
    margin-left: -10px;
    margin-top: 40px;
    width: 130px;
`

function Contact(){
    return(
        <DefultText>
            <TitleStyled>CONTACT ME</TitleStyled>
            <Box>
                <StyledImageDiv>
                    <StyledImage src="src\assets\logo\mail2.png" alt="mail" />
                    <StyledMailP>fokowilfried7@gmail.com</StyledMailP>
                </StyledImageDiv>
                <StyledImageDiv>
                    <StyledImage src="src\assets\logo\phone2.png" alt="phone" />
                    <StyledPhoneP>683 41 52 30</StyledPhoneP>
                </StyledImageDiv>
            </Box>
        </DefultText>
    )
}

export default Contact;