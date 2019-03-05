import styled from 'styled-components/macro';

import { getColor, getFontWeight } from '../../../../util/theme';

export const ActivityCardWrapper = styled.div`
  border: 1px solid ${getColor('lightBlue')};

  margin: 10px;
  padding: 10px;

  box-shadow: 3px 3px 0 ${getColor('medBlue')};
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
