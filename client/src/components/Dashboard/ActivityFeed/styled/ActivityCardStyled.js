import styled from 'styled-components/macro';

// import theme helpers
import { getColor, getFontWeight } from '../../../../util/theme';

export const ActivityCardWrapper = styled.div`
  background-color: ${getColor('white')};

  border: 1px solid ${getColor('dusk')};
  box-shadow: 3px 3px 0 ${getColor('dusk')};

  margin: 10px 0;
  padding: 10px 15px;

  cursor: pointer;

  transition: all 0.25s ease-in-out;

  &:hover {
    box-shadow: 6px 6px 0 ${getColor('dusk')};
    transform: scale(1.01);
  }
`;

export const ActivityCardTop = styled.div`
  display: flex;

  h2 {
    font-size: 2rem;
    font-weight: ${getFontWeight('regular')};

    margin: 0;
    padding: 0;

    &.name {
      flex-basis: 65%;
    }

    &.date {
      flex-basis: 35%;
    }
  }
`;

export const ActivityCardBottom = styled.div``;
