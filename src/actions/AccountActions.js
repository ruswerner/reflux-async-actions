var Reflux = require('reflux');
var fakejax = require('../utils/fakejax');
var BaseAction = require('./BaseAction');

class SaveAccountSettingsAction extends BaseAction {

    dispatch(accountSettings) {
        fakejax('POST /api/accountSettings',function(err){
            if(err) {
                AccountActions.saveAccountSettingsFail("Could not save account settings!");
            } else {
                AccountActions.saveAccountSettingsSuccess(accountSettings);
            }
        });
    }

}

var AccountActions = {

    saveAccountSettings: Reflux.createAction(new SaveAccountSettingsAction),
    saveAccountSettingsFail: Reflux.createAction(new BaseAction),
    saveAccountSettingsSuccess: Reflux.createAction(new BaseAction)

};

module.exports = AccountActions;