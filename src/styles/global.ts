import { createGlobalStyle } from 'styled-components';
import RobotoRegular from "../assets/fonts/RobotoCondensed-Regular.ttf";
import RobotoBold from "../assets/fonts/RobotoCondensed-Bold.ttf";
import RobotoLight from "../assets/fonts/RobotoCondensed-Light.ttf";


export default createGlobalStyle`

    @font-face {
    font-family: 'Roboto Condensed';
    src: url(${RobotoRegular}) format('truetype'),
        url(${RobotoLight}) format('truetype'),
        url(${RobotoBold}) format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Condensed';
        /* font-weight: 400;
        font-style: normal;
        font-display: auto; */
    }

    body {
        background: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
    }
`