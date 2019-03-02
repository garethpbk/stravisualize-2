const axios = require('axios');

const activityListQueryResolver = async (_, args) => {
  const { count } = args;

  const activityListResponse = await axios.get(`https://www.strava.com/api/v3/athlete/activities?per_page=${count}`, {
    headers: {
      Authorization: `Bearer d91f7b4b7cd52eafc9f9a28b04479f16085c1a81`,
    },
  });

  const { data } = activityListResponse;

  const activityList = data.map(activity => {
    const { id, name, type, start_date, distance } = activity;

    return { id, name, type, startDate: start_date, distance: (distance * 0.000621371).toFixed(2) };
  });

  return activityList;
};

module.exports = activityListQueryResolver;
