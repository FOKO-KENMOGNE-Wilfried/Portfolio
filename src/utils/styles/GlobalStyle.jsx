import { createGlobalStyle } from "styled-components";
import image from "../../assets/background/5.jpg"


const StyledGlobalStyle = createGlobalStyle`
    *{
        background-image: url(${image});
    }
`

function GlobalStyle(){
    return <StyledGlobalStyle />
}

export default GlobalStyle;