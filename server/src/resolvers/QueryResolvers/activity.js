const axios = require('axios');

const activityQueryResolver = async (_, args) => {
  const { id } = args;

  const activityResponse = await axios.get(`https://www.strava.com/api/v3/activities/${id}`, {
    headers: {
      Authorization: `Bearer d91f7b4b7cd52eafc9f9a28b04479f16085c1a81`,
    },
  });

  const { data } = activityResponse;

  const {
    name,
    type,
    distance,
    moving_time,
    elapsed_time,
    total_elevation_gain,
    start_date_local,
    average_speed,
    max_speed,
    has_heartrate,
    average_heartrate,
    max_heartrate,
    calories,
    map,
    gear,
  } = data;

  return {
    name,
    type,
    distance: (distance * 0.000621371).toFixed(2),
    movingTime: moving_time,
    elapsedTime: elapsed_time,
    totalElevationGain: (total_elevation_gain * 3.28084).toFixed(2),
    startDate: start_date_local,
    averageSpeed: average_speed,
    maxSpeed: max_speed,
    hasHeartrate: has_heartrate,
    averageHeartrate: average_heartrate,
    maxHeartrate: max_heartrate,
    calories,
    map: {
      id: map.id,
      polyline: map.polyline,
      summaryPolyline: map.summary_polyline,
    },
    gear: {
      id: gear.id,
      name: gear.name,
      distance: gear.distance,
    },
  };
};

module.exports = activityQueryResolver;
