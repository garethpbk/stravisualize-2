import styled from 'styled-components/macro';

// import theme helpers
import { getFontWeight } from '../../../../util/theme';

const ActivityCardTop = styled.div`
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

export default ActivityCardTop;
