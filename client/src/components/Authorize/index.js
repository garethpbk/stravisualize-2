import React, { useEffect, useState } from 'react';
import { parse } from 'query-string';

// import components
import AnimatedTitle from '../AnimatedTitle';

// import styled components
import { AuthorizeCheckbox, AuthorizeLink, AuthorizeWrapper } from './styled';

function Authorize(props) {
  const [saveToLocalStorage, setSaveToLocalStorage] = useState(false);

  const url = new URL('https://www.strava.com/oauth/authorize');
  const params = {
    client_id: '24034',
    redirect_uri: 'http://localhost:3000',
    response_type: 'code',
    approval_prompt: 'force',
    scope: 'activity:read_all',
    state: `saveToLocalStorage${saveToLocalStorage}`,
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
      <AuthorizeCheckbox
        type="checkbox"
        id="save-to-local-storage"
        checked={saveToLocalStorage}
        onChange={() => setSaveToLocalStorage(!saveToLocalStorage)}
      />
      <label htmlFor="save-to-local-storage">Save Authorization?</label>
    </AuthorizeWrapper>
  );
}

export default Authorize;
