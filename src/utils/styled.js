import { createTheme } from "@mui/material";
import { css } from "styled-components";
const theme = {
  mediaQueries: {
    small: (...args) => css`
      @media (max-width: 768px) {
        ${css(...args)}
      }
    `,
    large: (...args) => css`
      @media (min-width: 768px) {
        ${css(...args)}
      }
    `,
  },
};

export default theme;
