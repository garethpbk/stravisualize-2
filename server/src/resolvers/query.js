const axios = require('axios');

const activity = require('./QueryResolvers/activity');
const activityList = require('./QueryResolvers/activityList');

const QueryResolvers = {
  activity,
  activityList,
};

module.exports = {
  ...QueryResolvers,
};
