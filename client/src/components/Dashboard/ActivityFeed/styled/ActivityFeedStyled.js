import styled from 'styled-components/macro';

import { getColor } from '../../../../util/theme';

export const VisibilityBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const VisibilityIcon = styled.div`
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
