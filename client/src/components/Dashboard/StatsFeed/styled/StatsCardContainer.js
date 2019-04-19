import styled from 'styled-components/macro';

// import theme helpers
import { getColor, getFontWeight } from '../../../../util/theme';

const StatsCardContainer = styled.div`
  div {
    margin: 15px 0;
  }

  h1 {
    color: ${getColor('twilight')};
    font-size: 2.5rem;
    text-align: center;

    margin: 0;
    padding: 0;
  }

  h3 {
    color: ${getColor('asphalt')};
    font-weight: ${getFontWeight('regular')};
    font-size: 1.6rem;

    margin: 2px 0;
    padding: 0;
  }

  h4 {
    color: ${getColor('twilight')};
    font-weight: ${getFontWeight('medium')};
    font-size: 1.8rem;

    margin: 0;
    padding: 0;
  }
`;

export default StatsCardContainer;
