var React = require('react/addons');
var Reflux = require('reflux');
var UserActions = require('../actions/UserActions');
var ServerActions = require('../actions/ServerActions');

var AccountStore = Reflux.createStore({

    listenables: [UserActions, ServerActions],

    init: function () {
        this.state = {
            name: 'First Last',
            email: 'someone@email.com'
        };
    },

    getInitialState: function () {
        return this.state;
    },

    onSaveAccountSettings: function (accountSettings) {
        this.state.name = accountSettings.name;
        this.state.email = accountSettings.email;
        this.state.saving = true;
        this.state.error = null;
        this.trigger(this.state);
    },

    onSaveAccountSettingsFailed: function (error) {
        this.state.saving = false;
        this.state.error = error;
        this.trigger(this.state);
    },

    onSaveAccountSettingsComplete: function () {
        this.state.saving = false;
        this.state.error = null;
        this.trigger(this.state);
    }

});

module.exports = AccountStore;