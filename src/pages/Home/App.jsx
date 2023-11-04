/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/styles/style";

const Title = styled.h1`
    color: white;
    width: 100%;
    height: 100%;
    padding-left: 100px;
    font-size: 50px;
    font-family: cursive;
    margin-top: 20%;
    border: 1px solid red;
    @media only screen and (max-width: 1110px){
        font-size: 40px;
    }
    @media only screen and (max-width: 600px){
        font-size: 20px;
    }
`
const TextStyled = styled.p`
    color: grey;
    width: 100%;
    height: 100%;
    padding-left: 100px;
    margin-top: -10px;
    border: 1px solid red;
`
const ButtonStyled = styled(Link)`
    color: ${colors.secondary};
    text-decoration: none;
    border: 1px solid ${colors.secondary};
    margin-left: 100px;
    width: 110px;
    padding: 6px;
    border-radius: 6px;
    text-align: center;
    border: 1px solid red;   
`
const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 160px;
    border: 1px solid red;
    @media only screen and (max-width: 1110px){
        margin-top: 200px; 
    }
    @media only screen and (max-width: 820px){
        margin-top: 500px; 
        margin-left: 25%;
        width: 90%;  
    }
    @media only screen and (max-width: 600px){
        margin-top: 450px;
        margin-left: 10%;
    }
`
const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
`
const ImageContainer = styled.div`
    border: 10px solid ${colors.secondary};
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid red;
    position: absolute;
        left: 70%;
        top: 30%;
    @media only screen and (max-width: 1110px){
        width: 250px;
        height: 250px;
    }
    @media only screen and (max-width: 820px){
        position: absolute;
        top: 20%;
        left: 250px;
    }
    @media only screen and (max-width: 600px){
        width: 200px;
        height: 200px;
        position: absolute;
        top: 20%;
        left: 150px;

    }
`

function App(){
    return(
        <div>
            <Box1>
                <Box2>
                    <Title>
                        Hi, <br />
                        I'm FOKO Wilfried <br />
                        Young web developer 
                    </Title>
                    <TextStyled>
                        Front End Developer / web Developer
                    </TextStyled>
                </Box2>
                <ButtonStyled to="/contact">CONTACT ME</ButtonStyled>
            </Box1>
            <ImageContainer><img src="" alt="photo-profil" /></ImageContainer>
        </div>

    ) 
}

export default App;