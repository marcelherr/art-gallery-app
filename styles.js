import { createGlobalStyle } from "styled-components";
import { Lora } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1 {
    font: var(--font-headline-2);
  }

  body {
    margin: 0;
    font-family: var(--font-body);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  :root {
    --font-family: ${lora.style.fontFamily}, serif;
    --width-wrapper: min(100% - 64px, 395px - 64px);

    --font-headline-1: normal 700 44px/48px var(--font-family);
    --font-headline-2: normal 700 32px/41px var(--font-family);
    --font-title: normal 700 16px/20px var(--font-family);
    --font-caption: normal 500 12px/15px var(--font-family);
    --font-caption--italic: italic 400 12px/15px var(--font-family);
    --font-body: normal 400 16px/20px var(--font-family);
  }
`;
