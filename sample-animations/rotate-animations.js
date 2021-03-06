import { css } from 'lit-element';

/* In animations */
export const RotateInNewspaper = css`
  .page-rotateInNewspaper {
    transform-origin: 50% 50%;
    animation: rotateInNewspaper 0.5s both ease-out;
  }
  @keyframes rotateInNewspaper {
    from {
      transform: translateZ(-3000px) rotateZ(-360deg);
      opacity: 0;
    }
  }
`;

/* Out animations */

export const RotateRightSideFirst = css`
  .page-rotateRightSideFirst {
    transform-origin: 0% 50%;
    animation: rotateRightSideFirst 0.8s both ease-in;
    z-index: -1;
  }
  @keyframes rotateRightSideFirst {
    0% {
    }
    40% {
      transform: rotateY(15deg);
      opacity: 0.8;
      animation-timing-function: ease-out;
    }
    100% {
      transform: scale(0.8) translateZ(-200px);
      opacity: 0;
    }
  }
`;

export const RotateLeftSideFirst = css`
  .page-rotateLeftSideFirst {
    transform-origin: 100% 50%;
    animation: rotateLeftSideFirst 0.8s both ease-in;
    z-index: -1;
  }
  @keyframes rotateLeftSideFirst {
    0% {
    }
    40% {
      transform: rotateY(-15deg);
      opacity: 0.8;
      animation-timing-function: ease-out;
    }
    100% {
      transform: scale(0.8) translateZ(-200px);
      opacity: 0;
    }
  }
`;

export const RotateTopSideFirst = css`
  .page-rotateTopSideFirst {
    transform-origin: 50% 100%;
    animation: rotateTopSideFirst 0.8s both ease-in;
    z-index: -1;
  }
  @keyframes rotateTopSideFirst {
    0% {
    }
    40% {
      transform: rotateX(15deg);
      opacity: 0.8;
      animation-timing-function: ease-out;
    }
    100% {
      transform: scale(0.8) translateZ(-200px);
      opacity: 0;
    }
  }
`;

export const RotateBottomSideFirst = css`
  .page-rotateBottomSideFirst {
    transform-origin: 50% 0%;
    animation: rotateBottomSideFirst 0.8s both ease-in;
    z-index: -1;
  }
  @keyframes rotateBottomSideFirst {
    0% {
    }
    40% {
      transform: rotateX(-15deg);
      opacity: 0.8;
      animation-timing-function: ease-out;
    }
    100% {
      transform: scale(0.8) translateZ(-200px);
      opacity: 0;
    }
  }
`;

export const RotateFall = css`
  .page-rotateFall {
    transform-origin: 0% 0%;
    animation: rotateFall 1s both ease-in;
    z-index: 999;
  }
  @keyframes rotateFall {
    0% {
      transform: rotateZ(0deg);
    }
    20% {
      transform: rotateZ(10deg);
      animation-timing-function: ease-out;
    }
    40% {
      transform: rotateZ(17deg);
    }
    60% {
      transform: rotateZ(16deg);
    }
    100% {
      transform: translateY(100%) rotateZ(17deg);
    }
  }
`;

export const RotateOutNewspaper = css`
  .page-rotateOutNewspaper {
    transform-origin: 50% 50%;
    animation: rotateOutNewspaper 0.5s both ease-in;
  }
  @keyframes rotateOutNewspaper {
    from {
    }
    to {
      transform: translateZ(-3000px) rotateZ(360deg);
      opacity: 0;
    }
  }
`;
