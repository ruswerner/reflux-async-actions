var Reflux = require('reflux');
var fakejax = require('../utils/fakejax');

var AccountActions = {

    saveAccountSettings : Reflux.createAction({
        preEmit: function(accountSettings) {
            fakejax('POST /api/accountSettings',function(err){
                if(err) {
                    AccountActions.saveAccountSettingsFail("Could not save account settings!");
                } else {
                    AccountActions.saveAccountSettingsSuccess(accountSettings);
                }
            });
        }
    }),

    saveAccountSettingsFail: Reflux.createAction(),
    saveAccountSettingsSuccess: Reflux.createAction()

};

module.exports = AccountActions;