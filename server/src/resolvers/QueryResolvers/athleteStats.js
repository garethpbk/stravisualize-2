const axios = require('axios');

const athleteStatsQueryResolver = async (_, args) => {
  const { id, type } = args;
  const varsToAssign = ['count', 'distance', 'moving_time', 'elapsed_time', 'elevation_gain'];
  const varToReturn = {};
  const dataTypeProp = `all_${type}_totals`;
  const typeName = `all${type.charAt(0).toUpperCase()}${type.substr(1, type.lenth)}Total`;

  const athleteStatsResponse = await axios.get(`https://www.strava.com/api/v3/athletes/${id}/stats`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAVA_API_KEY}`,
    },
  });

  const assignVarToReturn = (() =>
    varsToAssign.map(prop => (varToReturn[prop] = athleteStatsResponse.data[dataTypeProp][prop])))();

  const { count, distance, moving_time, elapsed_time, elevation_gain } = varToReturn;

  return {
    [typeName]: {
      count: count,
      distance: (distance * 0.000621371).toFixed(2),
      movingTime: moving_time,
      elapsedTime: elapsed_time,
      elevationGain: (elevation_gain * 3.28084).toFixed(2),
    },
  };
};

module.exports = athleteStatsQueryResolver;
