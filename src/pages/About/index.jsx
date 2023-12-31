import styled from "styled-components";
//import image from "../../assets/logo/visual3.png";
import { font } from "../../utils/styles/style";
import TypeIt from "typeit-react";

const DefaultText = styled.div`
    color: white;
    width: 700px;
    height: 400px;
    margin-left: 400px;
    padding-top: 80px;
    font-family: ${font.primary};
    font-size: 25px;
    
`
const TitleStyled = styled.h1`
    font-family: ${font.primary};
    text-align: center;
`
const Box = styled.div`
    display: flex;
    flex-direction: row;
    gap: 200px;
    
`

function About(){
    return(
        <Box>
            <DefaultText>
                <TitleStyled>ABOUT ME</TitleStyled>
                <TypeIt options={{
                    speed: 20,
                }}>
                    I'm FOKO Wilfried a young Camerounian, 
                    front-end  developer and 
                    computer engeneering student.
                    I'm passionate about IT in general but 
                    in particular about development, my goal 
                    is to become great in the field and a source 
                    of inspiration for others.
                </TypeIt>
            </DefaultText>

            {/* <StyledImg  alt="visuel" /> */}
        </Box>
    )
}

export default About;