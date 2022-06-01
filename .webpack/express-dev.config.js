const { withWatchPoll } = require('./config-utils');

module.exports = (config) => {
  withWatchPoll(config);

  return config;
};
