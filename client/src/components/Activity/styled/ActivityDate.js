import styled from 'styled-components/macro';

import { getColor } from '../../../util/theme';

const ActivityDate = styled.h3`
  color: ${getColor('twilight')};
  font-family: Bangers, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3rem;
  letter-spacing: 0.75rem;

  margin: 0;
  padding: 0;
`;

export default ActivityDate;
