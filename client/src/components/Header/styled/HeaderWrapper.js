import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../util/theme';

const HeaderWrapper = styled.header`
  background-color: ${getColor('white')};
  box-shadow: 2px 2px 2px ${getColor('twilight')};

  height: 100px;
`;

export default HeaderWrapper;
