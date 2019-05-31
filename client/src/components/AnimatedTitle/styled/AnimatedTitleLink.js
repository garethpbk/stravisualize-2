import styled from 'styled-components/macro';
import { Link } from '@reach/router';

// import animation
import { wave } from '../../styled';

const AnimatedTitleLink = styled(Link)`
  &:hover {
    h1 {
      span {
        animation-name: ${wave};
        animation-duration: 0.25s;
        animation-timing-function: cubic-bezier(0.36, 0.45, 0.63, 0.53);
        animation-iteration-count: infinite;
      }
    }
  }
`;

export default AnimatedTitleLink;
