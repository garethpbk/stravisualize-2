import React, { useEffect } from 'react';
import { parse } from 'query-string';

// import components
import AnimatedTitle from '../AnimatedTitle';

// import styled components
import { AuthorizeLink, AuthorizeWrapper } from './styled';

function Authorize(props) {
  const url = new URL('https://www.strava.com/oauth/authorize');
  const params = {
    client_id: '24034',
    redirect_uri: 'http://localhost:3000',
    response_type: 'code',
    approval_prompt: 'force',
    scope: 'activity:read_all',
  };

  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  useEffect(() => {
    const queryParams = parse(props.location.search);
    const { code } = queryParams;

    if (code) props.setAuthCode(code);
  }, []);

  return (
    <AuthorizeWrapper>
      <AnimatedTitle />
      <AuthorizeLink href={url}>
        {/* <span aria-label="bike" role="img">
          🚲
        </span> */}
        Authorize with Strava
      </AuthorizeLink>
    </AuthorizeWrapper>
  );
}

export default Authorize;
