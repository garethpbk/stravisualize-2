import styled from 'styled-components/macro';

import { getColor } from '../../../util/theme';

const ActivityName = styled.h2`
  color: ${getColor('twilight')};
  font-family: Bangers, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 4rem;
  letter-spacing: 0.75rem;
  text-shadow: 5px 5px ${getColor('glacier')};

  margin: 0;
  padding: 0;
`;

export default ActivityName;
