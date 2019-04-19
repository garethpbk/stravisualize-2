const axios = require('axios');
const format = require('date-fns/format');

// import converter functions
const metersPerSecondToMilePace = require('../../util/metersPerSecondToMilePace');

const activityListQueryResolver = async (_, args) => {
  const { authToken, count, page } = args;

  const activityListResponse = await axios.get(`https://www.strava.com/api/v3/athlete/activities`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      per_page: count,
      page,
    },
  });

  const { data } = activityListResponse;

  const activityList = data.map(activity => {
    const { id, name, type, average_speed, start_date_local, distance, start_latitude } = activity;

    return {
      id,
      name,
      type,
      subType: start_latitude ? 'outside' : 'inside',
      averageSpeed: metersPerSecondToMilePace(average_speed),
      startDate: format(start_date_local, 'M/DD/YYYY'),
      distance: (distance * 0.000621371).toFixed(2),
    };
  });

  return activityList;
};

module.exports = activityListQueryResolver;
