import styled from 'styled-components/macro';

// import theme helpers
import { getColor, getFontWeight } from '../../../util/theme';

// import styled components
import { Grid } from '../../styled/Grid';

export const FooterWrapper = styled.footer`
  background-color: ${getColor('newell')};
  border-top: 2px solid ${getColor('twilight')};

  height: 65px;
`;

export const FooterContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;

  p {
    color: ${getColor('stone')};
    font-size: 1.6rem;
    font-weight: ${getFontWeight('regular')};
  }

  a {
    color: ${getColor('stone')};

    &:hover {
      color: ${getColor('glacier')};
    }
  }

  svg {
    height: auto;
    width: 125px;
  }
`;
