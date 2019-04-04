import styled from 'styled-components/macro';

import { getColor } from '../../../util/theme';

const ActivityContentItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 25px 25px 0 25px;

  h3,
  h4 {
    margin: 0;
    padding: 0;
  }

  h3 {
    color: ${getColor('twilight')};
    font-size: 2.5rem;
  }

  h4 {
    color: ${getColor('asphalt')};
    font-size: 2rem;
  }
`;

export default ActivityContentItem;
