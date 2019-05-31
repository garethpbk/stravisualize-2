import { keyframes } from 'styled-components/macro';

const wave = keyframes`
  0%, 100% {
    transform: translate3d(0px, -10px, 0px);
  }

  50% {
    transform: translate3d(0px, 10px, 0px);
  }
`;

export default wave;
