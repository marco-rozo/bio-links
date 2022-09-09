import styled from "styled-components";

export const TopRightAlign = styled.div`
    height: 60px;
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 0px;
    padding: 0 30px;
    background: transparent;
    /* From https://css.glass */ 
    /* background: rgba(255, 255, 255, 0.2); */
    /* opacity: 0.3; */
    /* border-radius: 16px; 
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);*/
`;