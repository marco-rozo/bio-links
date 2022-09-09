import React, { useContext } from "react";
import Typewriter from 'typewriter-effect';
import { HeaderStyle, DivRounded, } from "./styles";

const Header: React.FC = () => {

  return (
    <HeaderStyle>
      <DivRounded>
        {/* <img src='src/assets/images/avatar3_auto_x2.jpg'></img> */}
      </DivRounded>

      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello, welcome!")
              .pauseFor(800)
              .deleteAll()
              .typeString("Marco Antonio")
              .start();
          }}
        />
      </h1>
      <p>Mobile and Web Developer.</p>
    </HeaderStyle>
  );
}
export default Header
