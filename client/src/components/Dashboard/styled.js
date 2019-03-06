import styled from 'styled-components/macro';

// import theme helpers
import { getColor, getFontWeight } from '../../util/theme';

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: 50px;
`;

// reusable in subcomponents

export const DashboardFeedWrapper = styled.div`
  padding: 25px;
`;

export const DashboardFeedTitle = styled.h1`
  color: ${props => (props.color ? getColor(props.color) : getColor('twilight'))};
  font-size: 4.8rem;
  font-weight: ${getFontWeight('bold')};
  text-shadow: 5px 5px ${props => (props.textShadow ? getColor(props.textShadow) : getColor('glacier'))};

  margin: 0;
  padding: 15px 0;
`;
