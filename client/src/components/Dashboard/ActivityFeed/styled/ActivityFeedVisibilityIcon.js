import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../../util/theme';

const ActivityFeedVisibilityIcon = styled.div`
  background-color: ${props => (props.visible ? 'lightseagreen' : 'lightcoral')};

  border: 2px solid transparent;
  border-radius: 50%;

  padding: 15px;

  cursor: pointer;

  &:hover {
    border: 2px solid ${getColor('twilight')};

    transform: scale(1.01);
  }

  svg {
    fill: ${getColor('white')};

    height: 50px;
    width: 50px;

    line {
      stroke: ${getColor('white')} !important;
    }
  }
`;

export default ActivityFeedVisibilityIcon;
