import styled from 'styled-components/macro';

// import grid component
import { Grid } from '../../styled';

const AppContentContainer = styled(Grid)`
  display: flex;
  flex-direction: column;

  flex: 1;

  overflow: hidden;

  position: relative;
`;

export default AppContentContainer;
