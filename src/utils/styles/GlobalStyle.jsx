import { createGlobalStyle } from "styled-components";
import image from "../../assets/background/2.png"


const StyledGlobalStyle = createGlobalStyle`
    body{
        background-image: url(${image});
        background-size: cover;
    }
`

function GlobalStyle(){
    return <StyledGlobalStyle />
}

export default GlobalStyle;