import styled from 'styled-components';

// import theme helpers
import { getColor } from '../../../../util/theme';

const StatsCardTab = styled.div`
  flex-basis: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => (props.active ? getColor('dawn') : getColor('asphalt'))};

  border: 1px solid ${getColor('dawn')};

  padding: 5px;

  &:hover {
    background-color: ${getColor('glacier')};
  }

  svg {
    fill: ${getColor('white')};

    height: 35px;
    width: 35px;
  }
`;

export default StatsCardTab;
