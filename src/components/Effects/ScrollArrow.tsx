
import styled from "@emotion/styled";

const ArrowWrapper = styled.div`
  cursor: none;
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
  cursor: none;
  width: 24px;
  height: 24px;
  border-left: 4px solid #FFF;
  border-bottom: 4px solid #FFF;
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