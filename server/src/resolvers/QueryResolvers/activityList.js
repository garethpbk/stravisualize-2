const axios = require('axios');
const format = require('date-fns/format');

// import converter functions
const metersPerSecondToMilePace = require('../../util/metersPerSecondToMilePace');

const activityListQueryResolver = async (_, args) => {
  const { count } = args;

  const activityListResponse = await axios.get(`https://www.strava.com/api/v3/athlete/activities?per_page=${count}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAVA_API_KEY}`,
    },
  });

  const { data } = activityListResponse;

  const activityList = data.map(activity => {
    const { id, name, type, average_speed, start_date_local, distance } = activity;

    return {
      id,
      name,
      type,
      averageSpeed: metersPerSecondToMilePace(average_speed),
      startDate: format(start_date_local, 'MM/DD/YYYY'),
      distance: (distance * 0.000621371).toFixed(2),
    };
  });

  return activityList;
};

module.exports = activityListQueryResolver;
