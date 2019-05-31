import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../util/theme';

const AnimatedLetter = styled.span`
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

export default AnimatedLetter;
