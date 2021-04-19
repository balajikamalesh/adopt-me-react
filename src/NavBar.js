/** @jsx jsx */ import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, jsx, keyframes } from "@emotion/react";

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  const [padding, setpadding] = useState(15);

  return (
    <header
      css={css`
        background-color: #333;
        padding: ${padding}px;
        margin-bottom: 15px;
        border-radius: 0 0 5px 5px;
      `}
    >
      <Link
        css={css`
          &:hover {
            text-decoration: underline;
          }
        `}
        to="/"
      >
        Adopt Me!!!
      </Link>
      <span
        css={css`
          display: inline-block;
          animation: 10s ${Spin} linear infinite;
          font-size: 60px;
        `}
        role="img"
        aria-label="logo"
      >
        🐩
      </span>
    </header>
  );
};

export default NavBar;
