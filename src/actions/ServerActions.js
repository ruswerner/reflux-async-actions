var Reflux = require('reflux');

var ServerActions = Reflux.createActions([
    'saveAccountSettingsFailed',
    'saveAccountSettingsComplete'
]);

module.exports = ServerActions;