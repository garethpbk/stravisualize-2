import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../util/theme';

const AuthorizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${getColor('stone')};

  height: 100vh;
`;

export default AuthorizeWrapper;
