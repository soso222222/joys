import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /** defaultTheme */
  :root{

    --Black:${(props) => props.theme.colors.Black};
    --White:${(props) => props.theme.colors.White};
    
    --Y_300: ${(props) => props.theme.colors.Y_300};
    --P_300: ${(props) => props.theme.colors.P_300};
    --SB_300: ${(props) => props.theme.colors.SB_300};
    --Pu_300: ${(props) => props.theme.colors.Pu_300};

    --G_900:${(props) => props.theme.colors.G_900};
    --G_800:${(props) => props.theme.colors.G_800};
    --G_700:${(props) => props.theme.colors.G_700};
    --G_600:${(props) => props.theme.colors.G_600};
    --G_500:${(props) => props.theme.colors.G_500};
    --G_400:${(props) => props.theme.colors.G_400};
    --G_300:${(props) => props.theme.colors.G_300};
    --G_200:${(props) => props.theme.colors.G_200};
    --G_150:${(props) => props.theme.colors.G_150};
    --G_100:${(props) => props.theme.colors.G_100};
    --G_75:${(props) => props.theme.colors.G_75};
    --G_50:${(props) => props.theme.colors.G_50};
    --G_25:${(props) => props.theme.colors.G_25};
    --G_20:${(props) => props.theme.colors.G_20};

  }

`;

export default GlobalStyle;
