import styled from 'styled-components/macro';

// import theme helpers
import { getColor, getFontWeight } from '../../../../util/theme';

export const ActivityCardWrapper = styled.div`
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

export const ActivityCardContainer = styled.div`
  display: flex;

  div {
    width: 100%;
  }

  svg {
    height: auto;
    width: 75px;

    margin: 0 50px 0 0;
  }
`;

export const ActivityCardTop = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 0 10px 0;

  h2 {
    font-size: 2rem;
    font-weight: ${getFontWeight('regular')};

    margin: 0;
    padding: 0;
  }
`;

export const ActivityCardBottom = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1.6rem;
    font-weight: ${getFontWeight('regular')};

    margin: 0;
    padding: 0;
  }
`;
