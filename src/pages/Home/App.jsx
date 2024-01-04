/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import colors from "../../utils/styles/style";
//import profile from "../../assets/profil/p1.jpg"
import { font } from "../../utils/styles/style";

const TitleEffect = keyframes`
    100%{
        opacity: 1;
        transform: none;
    }
`

const Title = styled.h1`
    color: white;
    width: 100%;
    height: 100%;
    padding-left: 100px;
    font-size: 50px;
    font-family: ${font.primary};
    margin-top: 5%;
    
    @media only screen and (max-width: 1177px){
        font-size: 40px;
    }
    @media only screen and (max-width: 661px){
        padding-left: 45px;
    }
    @media only screen and (max-width: 604px){
        font-size: 20px;
        margin-top: -40px;
    }   
`
const ButtonStyled = styled(Link)`
    opacity: 0;
    transform: translateY(30px);
    animation: ${TitleEffect} 0.8s 0.9s ease-out forwards;
    color: ${colors.third};
    background-color: ${colors.primary};
    text-decoration: none;
    margin-left: 100px;
    width: 110px;
    padding: 15px;
    border-radius: 6px;
    text-align: center;
    font-weight: bolder;
    font-family: ${font.primary};
    font-size: 15px;
    margin-left: 180px;
    transition: 
            background-color 1s,
            padding 1s;
    &:hover{
        background-color: white;
        color: ${colors.secondary};
        padding: 10px;
           
    }
       
`
const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 160px;
    
    @media only screen and (max-width: 1177px){
        margin-top: 200px; 
    }
    @media only screen and (max-width: 820px){
        margin-top: 340px; 
        margin-left: 25%;
        width: 90%;  
    }
    @media only screen and (max-width: 604px){
        margin-top: 450px;
        margin-left: 10%;
    }
    @media only screen and (max-width: 457px){
        font-size: 20px;
    }
`
const P1 = styled.p`
    opacity: 0;
    transform: translateY(-30px);
    animation: ${TitleEffect} 0.8s 0.2s ease-out forwards;
    @media only screen and (max-width: 1177px){
        font-size: 30px;
    }
    @media only screen and (max-width: 457px){
        font-size: 25px;
    }
    @media only screen and (max-width: 377px){
        font-size: 20px;
    }
`
const P2 = styled.p`
    opacity: 0;
    transform: translateY(-30px);
    animation: ${TitleEffect} 0.8s 0.4s ease-out forwards;
    margin-top: -50px;
    @media only screen and (max-width: 1177px){
        font-size: 30px;
        margin-top: -30px;
    }
    @media only screen and (max-width: 457px){
        font-size: 25px;
        margin-top: -25px;
    }
    @media only screen and (max-width: 377px){
        font-size: 20px;
        margin-top: -20px;
    }
`
const P3 = styled.p`
    opacity: 0;
    transform: translateY(-30px);
    animation: ${TitleEffect} 0.8s 0.6s ease-out forwards;
    margin-top: -60px;
    font-size: 50px;
    font-weight: bolder;
    @media only screen and (max-width: 1177px){
        margin-top: -30px;
        font-size: 30px; 
    }
    @media only screen and (max-width: 604px){
        margin-top: -40px;
    }
    @media only screen and (max-width: 457px){
        font-size: 25px;
        margin-top: -30px;
    }
    @media only screen and (max-width: 377px){
        font-size: 20px;
        margin-top: -25px;
    }
`
const TextStyled = styled.p`
    color: grey;
    width: 100%;
    height: 100%;
    font-family: ${font.secondary};
    color: white;
    padding-left: 100px;
    margin-top: -80px;
    opacity: 0;
    transform: translateY(30px);
    animation: ${TitleEffect} 0.8s 0.8s ease-out forwards;
    @media only screen and (max-width: 1177px){
        margin-top: -60px;
    }
    @media only screen and (max-width: 661px){
        margin-left: -54px;
    }
    @media only screen and (max-width: 604px){
        font-size: 15px;
        margin-top: -40px;
    }
    
`
const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    
`
const ImageContainer = styled.div`
    opacity: 0;
    transform: translateX(80px);
    animation: ${TitleEffect} 0.8s 1s ease-out forwards;
    border: 10px solid black;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    text-align: center;
    position: absolute;
        left: 70%;
        top: 30%;
    @media only screen and (max-width: 1177px){
        width: 250px;
        height: 250px;
        position: absolute;
        top: 15%;
    }
    @media only screen and (max-width: 985px){
        position: absolute;
        left: 600px;
    }
    @media only screen and (max-width: 892px){
        position: absolute;
        left: 540px;
    }
    @media only screen and (max-width: 820px){
        position: absolute;
        top: 15%;
        left: 250px;
    }
    @media only screen and (max-width: 661px){
        position: absolute;
        top: 12%;
        left: 160px;
    }
    @media only screen and (max-width: 604px){
        width: 200px;
        height: 200px;
        position: absolute;
        top: 20%;
        left: 150px;

    }
`
const StyledImage = styled.img`
    margin-top: 0px;
    border-radius: 150px;
`

function App(){
    return(
        <div>
            <Box1>
                <Box2>
                    <Title>
                        <P1>Hi,</P1>
                        <P2>I'm FOKO Wilfried</P2>
                        <P3>A Young web developer </P3>
                    </Title>
                    <TextStyled>
                        Front End Developer / web Developer
                    </TextStyled>
                </Box2>
                <ButtonStyled to="/contact">CONTACT ME</ButtonStyled>
            </Box1>
            <ImageContainer><StyledImage src="" alt="photo-profil" width={"300px"} height={"604px"}/></ImageContainer>
        </div>

    ) 
}

export default App;