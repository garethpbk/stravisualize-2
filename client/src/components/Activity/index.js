import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

// import components
import AnimatedLoading from '../AnimatedLoading';
import Map from './Map';

// import styled components
import {
  ActivityContentItem,
  ActivityContentType,
  ActivityContentWrapper,
  ActivityDate,
  ActivityHeader,
  ActivityLoadingWrapper,
  ActivityName,
} from './styled';

// import svg
import { ReactComponent as RunIcon } from '../../assets/icons/run-icon.svg';
import { ReactComponent as TreadmillIcon } from '../../assets/icons/treadmill-icon.svg';
import { ReactComponent as CycleIcon } from '../../assets/icons/cycle-icon.svg';

const GET_ACTIVITY_QUERY = loader('./queries/GET_ACTIVITY_QUERY.graphql');

function Activity(props) {
  const { data, error, loading } = useQuery(GET_ACTIVITY_QUERY, {
    variables: { authToken: props.authToken, id: props.id },
  });

  if (loading)
    return (
      <ActivityLoadingWrapper>
        <AnimatedLoading />
      </ActivityLoadingWrapper>
    );

  if (error) return `Error!: ${error}`;

  console.log(data);

  const {
    activity: { averageHeartrate, averageSpeed, calories, distance, movingTime, name, startDate, type },
  } = data;

  return (
    <div>
      <ActivityHeader>
        <ActivityName>{name}</ActivityName>
        <ActivityDate>{startDate}</ActivityDate>
      </ActivityHeader>
      <Map activity={data.activity} />
      <ActivityContentWrapper>
        <ActivityContentType>{type === 'Run' ? <RunIcon /> : <CycleIcon />}</ActivityContentType>
        <ActivityContentItem>
          <h4>Distance</h4>
          <h3>{distance} miles</h3>
        </ActivityContentItem>
        <ActivityContentItem>
          <h4>Moving Time</h4>
          <h3>{movingTime}</h3>
        </ActivityContentItem>
        <ActivityContentItem>
          <h4>Calories Burned</h4>
          <h3>{calories}</h3>
        </ActivityContentItem>
        <ActivityContentItem>
          <h4>Average Pace</h4>
          <h3>{averageSpeed} min/mile</h3>
        </ActivityContentItem>
        <ActivityContentItem>
          <h4>Average Heart Rate</h4>
          <h3>{averageHeartrate} bpm</h3>
        </ActivityContentItem>
      </ActivityContentWrapper>
    </div>
  );
}

export default Activity;
