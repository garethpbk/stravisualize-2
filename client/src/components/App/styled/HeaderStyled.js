import styled from 'styled-components/macro';

// import theme helpers
import { getColor, getFontWeight } from '../../../util/theme';

// import styled components
import { Grid } from '../../styled/Grid';

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
    color: ${getColor('twilight')};
    font-size: 4rem;
    font-weight: ${getFontWeight('thin')};

    margin: 0;
  }
`;
