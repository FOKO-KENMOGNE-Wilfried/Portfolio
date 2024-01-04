import styled from "styled-components";
import colors from "../../utils/styles/style";
import mail from "../../assets/logo/mail2.png";
import phone from "../../assets/logo/phone2.png";

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
const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    margin-top: 25px;
`
const StyledImageDiv = styled.div`
    text-align: center;
    border: 5px dashed ${colors.secondary};
    border-radius: 80px;   
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
                    <StyledImage src={mail} alt="mail" />
                    <StyledMailP>fokowilfried7@gmail.com</StyledMailP>
                </StyledImageDiv>
                <StyledImageDiv>
                    <StyledImage src={phone} alt="phone" />
                    <StyledPhoneP>+237 683 41 52 30</StyledPhoneP>
                </StyledImageDiv>
            </Box>
        </DefultText>
    )
}

export default Contact;