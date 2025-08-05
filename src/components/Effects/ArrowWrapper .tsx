import styled from "styled-components";
import { useEffect, useState } from "react";

const ArrowWrapper = styled.div`
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: bounce 2s infinite;
  z-index: 1000;

  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-10px);
    }
  }
`;

const Arrow = styled.div`
  width: 24px;
  height: 24px;
  border-left: 4px solid #555;
  border-bottom: 4px solid #555;
  transform: rotate(-45deg);
`;

export default function ScrollArrow() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <ArrowWrapper onClick={handleScroll}>
      <Arrow />
    </ArrowWrapper>
  );
}