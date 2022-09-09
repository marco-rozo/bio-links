import styled, { keyframes } from "styled-components";
import avatar from "../../assets/images/avatar3_auto_x2.jpg"
import { device } from "../../styles/widthDevices";

export const DivRounded = styled.div`
    display: inline-block;
    @media ${device.laptop} { 
      width: 18vh !important;
      height: 18vh !important;
    }
    @media ${device.tablet} { 
      width: 16vh;
      height: 16vh;
    }
    width: 13vh;
    height: 13vh;
    background-image: url(${avatar});
    background-size: cover;
    border-radius: 50%;
    margin-bottom: 20px;
    -webkit-box-shadow: 1px 1px 10px 1px ${props => props.theme.colors.text}59;
    box-shadow: 1px 1px 10px 1px ${props => props.theme.colors.text}59;

    &:hover {
        border: 3px solid ${props => props.theme.colors.text};
    }
`;

export const HeaderStyle = styled.header`
    margin-top: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;

    h1{
        @media ${device.laptop} { 
          font-size: 3rem !important;
        }
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        width: 100%;
    }

    p{
        margin-top: 8px;
        font-size: 1rem;
        font-weight: 100;
    }
`;

const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`;

const TextCursor = styled.span`
  border-right: 2px solid rgba(0, 0, 0, .75);
  display: inline;

  /* A mágica acontece aqui */
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

const Container = styled.p`
  display: inline-block;
  margin: 0;
`;