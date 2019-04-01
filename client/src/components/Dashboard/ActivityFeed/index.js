import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

// import hooks
import useVisibilityReducer from './hooks/useVisbilityReducer';

// import components
import ActivityCardFeed from './ActivityCardFeed';

// import styled components
import { DashboardFeedWrapper, DashboardFeedTitle } from '../styled';
import { VisibilityBar, VisibilityIcon } from './styled/ActivityFeedStyled';

// import svg
import { ReactComponent as RunIcon } from '../../../assets/icons/run-icon.svg';
import { ReactComponent as TreadmillIcon } from '../../../assets/icons/treadmill-icon.svg';
import { ReactComponent as CycleIcon } from '../../../assets/icons/cycle-icon.svg';

// load query
const GET_ACTIVITY_LIST_QUERY = loader('./queries/GET_ACTIVITY_LIST_QUERY.graphql');

const ActivityFeed = () => {
  const [state, dispatch] = useVisibilityReducer();

  const { data, error, loading } = useQuery(GET_ACTIVITY_LIST_QUERY, { variables: { count: 50 } });

  if (error) {
    console.log(error);
  }

  return (
    <DashboardFeedWrapper>
      <DashboardFeedTitle color="twilight" textShadow="glacier">
        Activities
      </DashboardFeedTitle>
      <VisibilityBar>
        <VisibilityIcon
          visible={state.run.outside}
          onClick={() => dispatch({ type: 'toggle', activity: 'run', subActivity: 'outside' })}
        >
          <RunIcon />
        </VisibilityIcon>
        <VisibilityIcon
          visible={state.run.inside}
          onClick={() => dispatch({ type: 'toggle', activity: 'run', subActivity: 'inside' })}
        >
          <TreadmillIcon />
        </VisibilityIcon>
        <VisibilityIcon
          visible={state.ride.outside}
          onClick={() => dispatch({ type: 'toggle', activity: 'ride', subActivity: 'outside' })}
        >
          <CycleIcon />
        </VisibilityIcon>
      </VisibilityBar>
      {loading ? <h1>Loading...</h1> : <ActivityCardFeed state={state} activityList={data.activityList} />}
    </DashboardFeedWrapper>
  );
};

export default ActivityFeed;
