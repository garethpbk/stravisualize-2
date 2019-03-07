import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../util/theme';

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: 10px;
`;

// reusable in subcomponents

export const DashboardFeedWrapper = styled.div`
  padding: 25px;
`;

export const DashboardFeedTitle = styled.h1`
  color: ${props => (props.color ? getColor(props.color) : getColor('twilight'))};
  font-family: Bangers, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 4rem;
  letter-spacing: 0.75rem;
  text-align: center;
  text-shadow: 5px 5px ${props => (props.textShadow ? getColor(props.textShadow) : getColor('glacier'))};

  margin: 0;
  padding: 15px 0;
`;
