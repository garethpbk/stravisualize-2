const axios = require('axios');

const activity = require('./QueryResolvers/activity');
const activityList = require('./QueryResolvers/activityList');
const athleteStats = require('./QueryResolvers/athleteStats');
const authToken = require('./QueryResolvers/authToken');

const QueryResolvers = {
  activity,
  activityList,
  athleteStats,
  authToken,
};

module.exports = {
  ...QueryResolvers,
};
