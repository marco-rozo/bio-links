import styled from "styled-components";
import { device } from "../../styles/widthDevices";

export const ButtonStyle = styled.a`
  color: #ffffff;
  text-decoration: none;
  border: 2px solid ${props => props.theme.colors.secondary};
  /* background: ${props => props.theme.colors.secondary}; */
  /* From https://css.glass */
  background: ${props => props.theme.colors.secondary}CD;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 50px;
  @media ${device.laptop} { 
    width: 40% !important;
  }
  @media ${device.tablet} { 
    width: 60%;
  }
  width: 85%;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    margin-left: 5px;
    @media ${device.laptop} { 
      font-size: 1.6em !important; 
    }
    font-size: 1.4em;
  }
  &:hover {
      border: 1px solid #fff;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      transform: scale(1.05 );
      svg{
        transform: scale(1.2);
      }
  }
  svg{
    font-size: 1.1em;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;