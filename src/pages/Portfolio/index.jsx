import styled from "styled-components";

const DefultText = styled.div`
    color: white;
    width: 100%;
    margin-top: 150px;
    font-family: cursive;
    font-size: 20px;
    border: 1px solid red;
`
const TitleStyled = styled.h1`
    text-decoration: underline;
    text-align: center;
    border: 1px solid red;
`

function Portfolio(){
    return(

        <DefultText>
            <TitleStyled>MY PROJECTS</TitleStyled>
        </DefultText>
    ) 
}

export default Portfolio;