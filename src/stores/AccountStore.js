var React = require('react/addons');
var Reflux = require('reflux');
var AccountActions = require('../actions/AccountActions');

var AccountStore = Reflux.createStore({

    listenables: [AccountActions],

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

    onSaveAccountSettingsFail: function (error) {
        this.state.saving = false;
        this.state.error = error;
        this.trigger(this.state);
    },

    onSaveAccountSettingsSuccess: function () {
        this.state.saving = false;
        this.state.error = null;
        this.trigger(this.state);
    }

});

module.exports = AccountStore;