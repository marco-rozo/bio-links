import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            detail: string;
            text: string;
            background: string;
        }
    }
}