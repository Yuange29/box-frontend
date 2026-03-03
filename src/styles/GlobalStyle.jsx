import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{

    // dark mode
    --bg-primary:  #1e1d1d;
    --bg-secondary: #111111;
    --bg-section: #1e1d1d;
    --bg-card: #1a1a1a;
    --bg-hover: #222222;

    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --text-muted: #666666;

    --border-primary: rgba(255, 255, 255, 0.1);
    --border-hover: rgba(255, 255, 255, 0.3);

    --nav-bg: #0a0a0a;
    --nav-border: rgba(255, 255, 255, 0.08);
    --nav-text: #ffffff;
    --nav-text-hover: #b0b0b0;

    --btn-primary: #ffffff;
    --btn-primary-text: #0a0a0a;
    --btn-secondary: transparent;
    --btn-secondary-border: rgba(255, 255, 255, 0.3);

    --success: #4caf50;
    --error: #ef5350;
    --warning: #ff9800;
    --info: #42a5f5;
  }
`;
