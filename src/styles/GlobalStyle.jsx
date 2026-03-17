import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* ── Light theme (default) ── */
    --bg-primary: #f5f5f5;
    --bg-secondary: #ffffff;
    --bg-section: #efefef;
    --bg-card: #ffffff;
    --bg-hover: #e8e8e8;

    --text-setting: #fff;
    --text-primary: #0a0a0a;
    --text-secondary: #444444;
    --text-muted: #888888;

    --border-primary: rgba(0, 0, 0, 0.1);
    --border-hover: rgba(0, 0, 0, 0.3);

    --nav-bg: #ffffff;
    --nav-border: rgba(0, 0, 0, 0.08);
    --nav-text: #0a0a0a;
    --nav-text-hover: #444444;

    --btn-setting: #151414;
    --btn-primary: #0a0a0a;
    --btn-primary-text: #ffffff;
    --btn-secondary: transparent;
    --btn-secondary-border: rgba(0, 0, 0, 0.3);

    --success: #4caf50;
    --error: #ef5350;
    --warning: #ff9800;
    --info: #42a5f5;
  }

  /* ── Dark theme ── */
  [data-theme="dark"] {
    --bg-primary: #1e1d1d;
    --bg-secondary: #111111;
    --bg-section: #1e1d1d;
    --bg-card: #1a1a1a;
    --bg-hover: #222222;

    --text-setting: #121212;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --text-muted: #666666;

    --border-primary: rgba(255, 255, 255, 0.1);
    --border-hover: rgba(255, 255, 255, 0.3);

    --nav-bg: #0a0a0a;
    --nav-border: rgba(255, 255, 255, 0.08);
    --nav-text: #ffffff;
    --nav-text-hover: #b0b0b0;

    --btn-setting: #ebe8e8;
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
