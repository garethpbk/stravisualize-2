import React, { useEffect } from 'react';
import { parse } from 'query-string';

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
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <a href={url} style={{ fontSize: '48px' }}>
        🚲 GO TO STRAVA AUTHORIZATION
      </a>
    </div>
  );
}

export default Authorize;
