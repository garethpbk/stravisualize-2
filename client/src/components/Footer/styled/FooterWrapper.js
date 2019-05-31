import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../util/theme';

const FooterWrapper = styled.footer`
  background-color: ${getColor('newell')};
  border-top: 2px solid ${getColor('twilight')};

  height: 65px;
`;

export default FooterWrapper;
