import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

// import hooks
import useVisibilityReducer from './hooks/useVisbilityReducer';

// import components
import ActivityCardFeed from './ActivityCardFeed';

// import styled components
import { DashboardFeedWrapper, DashboardFeedTitle } from '../styled';
import { ActivityFeedVisibilityBar, ActivityFeedVisibilityIcon } from './styled';

// import svg
import { ReactComponent as RunIcon } from '../../../assets/icons/run-icon.svg';
import { ReactComponent as TreadmillIcon } from '../../../assets/icons/treadmill-icon.svg';
import { ReactComponent as CycleIcon } from '../../../assets/icons/cycle-icon.svg';

// load query
const GET_ACTIVITY_LIST_QUERY = loader('./queries/GET_ACTIVITY_LIST_QUERY.graphql');

function ActivityFeed(props) {
  const [state, dispatch] = useVisibilityReducer();

  const { data, error, loading } = useQuery(GET_ACTIVITY_LIST_QUERY, {
    variables: { authToken: props.authToken, count: 50 },
  });

  if (error) {
    console.log(error);
  }

  return (
    <DashboardFeedWrapper>
      <DashboardFeedTitle color="twilight" textShadow="glacier">
        Activities
      </DashboardFeedTitle>
      <ActivityFeedVisibilityBar>
        <ActivityFeedVisibilityIcon
          visible={state.run.outside}
          onClick={() => dispatch({ type: 'toggle', activity: 'run', subActivity: 'outside' })}
        >
          <RunIcon />
        </ActivityFeedVisibilityIcon>
        <ActivityFeedVisibilityIcon
          visible={state.run.inside}
          onClick={() => dispatch({ type: 'toggle', activity: 'run', subActivity: 'inside' })}
        >
          <TreadmillIcon />
        </ActivityFeedVisibilityIcon>
        <ActivityFeedVisibilityIcon
          visible={state.ride.outside}
          onClick={() => dispatch({ type: 'toggle', activity: 'ride', subActivity: 'outside' })}
        >
          <CycleIcon />
        </ActivityFeedVisibilityIcon>
      </ActivityFeedVisibilityBar>
      {loading ? <h1>Loading...</h1> : <ActivityCardFeed state={state} activityList={data.activityList} />}
    </DashboardFeedWrapper>
  );
}

export default ActivityFeed;
