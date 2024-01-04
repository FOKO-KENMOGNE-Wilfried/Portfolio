import { createGlobalStyle } from "styled-components";
import image from "../../assets/background/2.png"


const StyledGlobalStyle = createGlobalStyle`
    body{
        background-image: url(${image});
        background-repeat: repeat-y;
        animation: slide 10s linear infinite;
        //background-image: linear-gradient(90deg, #00bf8f, #001510);
        background-size: fill;
        //background-repeat: no-repeat;
    }
`

function GlobalStyle(){
    return <StyledGlobalStyle />
}

export default GlobalStyle;