import styled, { keyframes } from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../util/theme';

// import styled components
import { Grid } from '../../styled/Grid';

const wave = keyframes`
  0%, 100% {
    transform: translate3d(0px, -10px, 0px);
  }

  50% {
    transform: translate3d(0px, 10px, 0px);
  }
`;

export const HeaderWrapper = styled.header`
  background-color: ${getColor('white')};
  box-shadow: 2px 2px 2px ${getColor('twilight')};

  height: 100px;
`;

export const HeaderContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  h1 {
    span {
      color: ${getColor('newell')};
      font-family: Bangers, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 5rem;
      letter-spacing: 0.75rem;
      text-align: center;
      text-shadow: 5px 5px ${getColor('twilight')};

      margin: 0;
    }
  }

  a {
    &:hover {
      h1 {
        span {
          /* animation: ${wave} 0.5s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite; */
          animation-name: ${wave};
          animation-duration: 0.25s;
          animation-timing-function: cubic-bezier(0.36, 0.45, 0.63, 0.53);
          animation-iteration-count: infinite;
        }
      }
    }
  }
`;

export const AnimatedLetter = styled.span`
  color: ${getColor('newell')};
  font-family: Bangers, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 5rem;
  letter-spacing: 0.75rem;
  text-align: center;
  text-shadow: 5px 5px ${getColor('twilight')};

  margin: 0;

  display: inline-block;

  animation-delay: ${props => `-${props.delay * 0.05}s`};
`;
