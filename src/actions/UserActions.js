var Reflux = require('reflux');
var ServerActions = require('./ServerActions');
var fakejax = require('../utils/fakejax');

var UserActions = {

    saveAccountSettings : Reflux.createAction({
        preEmit: function(accountSettings) {
            fakejax('POST /api/accountSettings',function(err){
                if(err) {
                    ServerActions.saveAccountSettingsFailed("Could not save account settings!");
                } else {
                    ServerActions.saveAccountSettingsComplete(accountSettings);
                }
            });
        }
    })

};

module.exports = UserActions;