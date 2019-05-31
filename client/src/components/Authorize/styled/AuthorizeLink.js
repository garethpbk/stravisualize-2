import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../util/theme';

const AuthorizeLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${getColor('glacier')};
  font-size: 3rem;

  background-color: ${getColor('newell')};

  border: 1px solid ${getColor('twilight')};
  box-shadow: 3px 3px 0 ${getColor('twilight')};

  padding: 25px;
  margin: 100px 0;

  transition: all 0.25s ease-in-out;

  &:hover {
    box-shadow: 6px 6px 0 ${getColor('twilight')};

    transform: scale(1.01);
  }
`;

export default AuthorizeLink;
