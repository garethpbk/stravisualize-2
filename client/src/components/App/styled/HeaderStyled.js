import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../util/theme';

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
    color: ${getColor('newell')};
    font-family: Bangers, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 5rem;
    letter-spacing: 0.75rem;
    text-align: center;
    text-shadow: 5px 5px ${getColor('twilight')};

    margin: 0;
  }
`;
