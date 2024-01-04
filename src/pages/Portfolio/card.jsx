import { useState } from "react";
import styled from "styled-components";
import color from "../../utils/styles/style"

const StyledCard = styled.div`
    position: relative;
`
const StyledImage = styled.img`
    width: 400px;
    height: 250px;
    border-radius: 10px;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`
const StyledImageDesktop = styled.img`
    width: 30vw;
    height: 45vh;
    border-radius: 10px;
`
const StyledImageMobile = styled.img`
    width: 10vw;
    height: 45vh;
    border-radius: 10px;
`
const StyledCardText = styled.div`
    background-color: black;
    color: white;
    height: 50px;
    width: 97.5%;
    padding-left: 10px;
    border-radius: 0px 0px 10px 10px;
    position: absolute;
    bottom: 0;
`
const StyledStack = styled.p`
    display: inline-block;
    padding: 0px 5px 0px 5px;
    margin-left: 10px;
    border-radius: 10px;
    border: 1px solid white;
    &:hover{
        background-color: white;
        color: black;
        transition: background-color 0.5s ease-out;
        cursor: pointer;
    }
`
const CardBlack = styled.p`
    position: absolute;
    border-radius: 10px 10px 0px 0px;
    top: -16px;
    width: 100%;
    height: 81%;
    opacity: 0;
    background-color: black;
    transition: opacity 0.2s ease-out;
    &:hover{
        opacity: 0.3;
        cursor: pointer;
    }
`
const PageContainer = styled.div`
    position: relative;
`
const StyledSecondCard = styled.div`
    position: absolute;
    top: -120px;
    left: -250px;
    width: 60vw;
    height: 75vh;
    background-color: ${color.primary};
    border-radius: 30px;
    color: ${color.third};
`
const StyledSecondCardImg = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    justify-content: center;
    gap: 30px;
    border-radius: 20px;
    background-color: gray;
`
const StyledSecondCardText = styled.div`
    margin-left: 40px;
` 
const ClosedButton = styled.div`
    color: ${color.third};
    border: 1px solid gray;
    border-radius: 20px;
    padding: 10px 13px 10px 13px;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    margin-left:230%;
    margin-top: -60%;
    &:hover{
        background-color: black;
        opacity: 0.5;
    }
`

function Card(){

    const [isClicked, setIsClicked] = useState(false);

    return (
        <PageContainer>
            {
                isClicked ? (
                        <div>
                            <ClosedButton onClick={() => setIsClicked(false)}>
                                X
                            </ClosedButton>    
                            <StyledSecondCard onBlur={() => setIsClicked(false)}>
                                <StyledSecondCardImg>
                                    <StyledImageDesktop src="src\assets\projets\tailwindcss\desktop.png" alt="Tailwind"></StyledImageDesktop>
                                    <StyledImageMobile src="src\assets\projets\tailwindcss\mobile.png" alt="Tailwind"></StyledImageMobile>
                                </StyledSecondCardImg>
                                <StyledSecondCardText>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga possimus esse dolor quae eligendi numquam dolore perferendis libero eius ea minus architecto cumque, animi recusandae omnis consectetur ipsam nemo!
                                        <br/> Le lien vers le site
                                    </p>
                                </StyledSecondCardText>
                            </StyledSecondCard>
                        </div>
                ) : (
                    <StyledCard>
                        <CardBlack onClick={() => setIsClicked(true)}></CardBlack>
                        <StyledImage src="src\assets\projets\tailwindcss\desktop.png" alt="Tailwind"></StyledImage>
                        <StyledCardText>
                            Les Stack :  
                            <StyledStack>HTML</StyledStack>
                            <StyledStack>Tailwindcss</StyledStack>
                        </StyledCardText>
                    </StyledCard>
                )
            }
        </PageContainer>
    )
}

export default Card;