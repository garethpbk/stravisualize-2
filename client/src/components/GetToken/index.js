import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

const GET_AUTH_TOKEN_QUERY = loader('./queries/GET_AUTH_TOKEN_QUERY.graphql');

function GetToken(props) {
  const { data, error, loading } = useQuery(GET_AUTH_TOKEN_QUERY, {
    variables: { authCode: props.authCode },
  });

  if (error) {
    console.log(error);
  }

  if (loading) {
    return (
      <div>
        <h1>Getting access token...</h1>
      </div>
    );
  }

  const {
    authToken: { accessToken },
  } = data;

  props.setAuthToken(accessToken);

  return <div>Got Token!</div>;
}

export default GetToken;
