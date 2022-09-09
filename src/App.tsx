import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import MySwitch from "./components/MySwitch";
import Global from "./styles/global";
import Header from "./components/Header";
import Button from "./components/Button";
import { links } from "./data/links";


function App() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    console.log(theme.title);
    setTheme(theme.title === "dark" ? light : dark);
  };

  const print = () => {
    console.log("clicou no botão");
  };

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <MySwitch toggleTheme={toggleTheme} />
      <Header></Header>
      {
        links?.map(
          (link, index) => {
            return (
              <Button key={index} idx={index} onClick={print} title={link.title} link={link.url} icon={link.icon}></Button>
            )
          }
        )
      }
    </ThemeProvider>

  )
}

export default App
