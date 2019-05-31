import styled from 'styled-components/macro';

// import theme helpers
import { getFontWeight } from '../../../../util/theme';

const ActivityCardBottom = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 1.6rem;
    font-weight: ${getFontWeight('regular')};

    margin: 0;
    padding: 0;
  }
`;

export default ActivityCardBottom;
