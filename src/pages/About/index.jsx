import styled from "styled-components";
import image from "../../assets/logo/visual3.png";

const DefultText = styled.div`
    color: white;
    width: 40%;
    height: 400px;
    margin-left: 250px;
    margin-top: 150px;
    font-family: Arial;
    font-size: 20px;
    
`
const TitleStyled = styled.h1`
    text-decoration: underline;
    text-align: center;
`
const Box = styled.div`
    display: flex;
    flex-direction: row;
    gap: 200px;
    
`
const StyledImg = styled.img`
    width: 400px;
    height: 400px;
    margin-top: 150px;
    
`

function About(){
    return(
        <Box>
            <DefultText>
                <TitleStyled>ABOUT ME</TitleStyled>
            I am Wilfried FOKO KENMOGNE, a young 
            Cameroonian student in computer engeneering 
            engineering and passionate about 
            development.<br />
            One of my main objectives is to become 
            a great figure in the world of 
            development and to in turn inspire 
            young people in the same way in which 
            I was inspired by some seniors in the 
            field.
            </DefultText>

            <StyledImg src={image} alt="visuel" />
        </Box>
    )
}

export default About;