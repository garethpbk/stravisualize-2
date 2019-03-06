const axios = require('axios');
const format = require('date-fns/format');

const metersPerSecondToMilePace = speed => {
  const minPerMile = 26.8224 / speed;

  //const wholeMinutes = minPerMile.toString()[0];
  const minutes = parseInt(minPerMile);

  const seconds = (
    minPerMile.toString().substr(minPerMile.toString().indexOf('.'), minPerMile.toString().length) * 60
  ).toFixed(0);

  return `${minutes}:${seconds}`;
};

const activityListQueryResolver = async (_, args) => {
  const { count } = args;

  const activityListResponse = await axios.get(`https://www.strava.com/api/v3/athlete/activities?per_page=${count}`, {
    headers: {
      Authorization: `Bearer d91f7b4b7cd52eafc9f9a28b04479f16085c1a81`,
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
