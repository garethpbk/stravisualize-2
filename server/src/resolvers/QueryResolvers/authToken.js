const axios = require('axios');

const authTokenQueryResolver = async (_, args) => {
  const { authCode } = args;

  const baseUrl = 'https://www.strava.com/oauth/token';
  const params = {
    client_id: '24034',
    client_secret: process.env.STRAVA_CLIENT_SECRET,
    code: authCode,
    grant_type: 'authorization_code',
  };

  const url = `${baseUrl}?client_id=${params.client_id}&client_secret=${params.client_secret}&code=${
    params.code
  }&grant_type=${params.grant_type}`;

  const authRequest = await axios.post(url);

  const { data } = authRequest;

  const { access_token, refresh_token, athlete } = data;

  return {
    accessToken: access_token,
    refreshToken: refresh_token,
    athlete: {
      id: athlete.id,
      firstName: athlete.firstname,
      lastName: athlete.lastname,
      sex: athlete.sex,
      city: athlete.city,
      country: athlete.country,
      state: athlete.state,
      profile: athlete.profile,
      profileMedium: athlete.profile_medium,
    },
  };
};

module.exports = authTokenQueryResolver;
