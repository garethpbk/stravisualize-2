import styled from 'styled-components/macro';

// import grid component
import { Grid } from '../../styled/Grid';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100%;
`;

export const ContentContainer = styled(Grid)`
  display: flex;
  flex-direction: column;

  flex: 1;

  overflow: hidden;

  position: relative;
`;
