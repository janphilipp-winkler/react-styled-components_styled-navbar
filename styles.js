import { createGlobalStyle } from "styled-components";
import { Bodoni_Moda } from "next/font/google";

const LibreBaskerville = Bodoni_Moda({
  subsets: ["latin"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: hotpink;
    --secondary-color: darkgrey;
  }

  body {
    margin: 0;
    font-family: ${LibreBaskerville.style.fontFamily};
  }
`;
