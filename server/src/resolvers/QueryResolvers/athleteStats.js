const axios = require('axios');

// import converter functions
const secondsToHoursAndMinutes = require('../../util/secondsToHoursAndMinutes');

const athleteStatsQueryResolver = async (_, args) => {
  const { authToken, id, type, interval } = args;

  const varsToAssign = ['count', 'distance', 'moving_time', 'elapsed_time', 'elevation_gain'];
  const varToReturn = {};
  const dataTypeProp = `${interval}_${type}_totals`;
  const typeName = `${interval}${type.charAt(0).toUpperCase()}${type.substr(1, type.lenth)}Total`;

  const athleteStatsResponse = await axios.get(`https://www.strava.com/api/v3/athletes/${id}/stats`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  const assignVarToReturn = (() =>
    varsToAssign.map(prop => (varToReturn[prop] = athleteStatsResponse.data[dataTypeProp][prop])))();

  const { count, distance, moving_time, elapsed_time, elevation_gain } = varToReturn;

  return {
    [typeName]: {
      count,
      distance: (distance * 0.000621371).toFixed(2),
      elapsedTime: secondsToHoursAndMinutes(elapsed_time),
      elevationGain: (elevation_gain * 3.28084).toFixed(2),
      movingTime: secondsToHoursAndMinutes(moving_time),
    },
  };
};

module.exports = athleteStatsQueryResolver;
