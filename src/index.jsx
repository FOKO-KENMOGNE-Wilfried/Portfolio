import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./pages/Home/App"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import { StyledAll } from './utils/styles/style'
import About from "./pages/About"
import Skills from "./pages/Skills"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import GlobalStyle from './utils/styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <StyledAll>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path='*' element={<Error/>}/> */}
        </Routes>
      </StyledAll>
    </Router>
  </React.StrictMode>
)
