import styled from 'styled-components/macro';

export const ActivityCardWrapper = styled.div`
  border: 1px solid black;

  margin: 10px;
  padding: 10px;
`;

export const ActivityCardTop = styled.div`
  display: flex;

  h2 {
    font-size: 2rem;

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
