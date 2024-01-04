import styled from "styled-components";
import Card from "./card";

const DefaultText = styled.div`
    color: white;
    width: 100%;
    padding-top: 80px;
    font-family: cursive;
    font-size: 20px;
    
`
const TitleStyled = styled.h1`
    text-decoration: underline;
    text-align: center;
    
`
const ContainerStyled = styled.div`
    margin: auto;
`

function Portfolio(){
    return(
        <ContainerStyled>
            <DefaultText>
                <TitleStyled>MY PROJECTS</TitleStyled>
            </DefaultText>
            <Card/>
        </ContainerStyled>
    ) 
}

export default Portfolio;