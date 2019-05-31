import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../../util/theme';

const ActivityCardWrapper = styled.div`
  background-color: ${getColor('white')};

  border: 1px solid ${getColor('dusk')};
  box-shadow: 3px 3px 0 ${getColor('dusk')};

  margin: 10px 0;
  padding: 15px 25px;

  cursor: pointer;

  transition: all 0.25s ease-in-out;

  &:hover {
    box-shadow: 6px 6px 0 ${getColor('dusk')};

    transform: scale(1.01);
  }
`;

export default ActivityCardWrapper;
