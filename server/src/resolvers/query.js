const axios = require('axios');

const activity = require('./QueryResolvers/activity');
const activityList = require('./QueryResolvers/activityList');
const athleteStats = require('./QueryResolvers/athleteStats');

const QueryResolvers = {
  activity,
  activityList,
  athleteStats,
};

module.exports = {
  ...QueryResolvers,
};
