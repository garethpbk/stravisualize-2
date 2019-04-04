import styled from 'styled-components/macro';

import { getColor } from '../../../util/theme';

const ActivityContentType = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 4;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 75%;
    width: 50%;

    fill: ${getColor('twilight')};
  }
`;

export default ActivityContentType;
