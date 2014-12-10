var React = require('react/addons');
var Reflux = require('reflux');
var AccountActions = require('../actions/AccountActions');
var Immutable = require('immutable');

var AccountStore = Reflux.createStore({

    listenables: [AccountActions],

    init: function () {
        this.state = Immutable.fromJS({
            name: 'First Last',
            email: 'someone@email.com'
        });
    },

    getInitialState: function () {
        return this.state.toJS();
    },

    onSaveAccountSettings: function ({name,email}) {
        this.state = this.state.merge({
            name,
            email,
            saving: true,
            error: null
        });
        this.trigger(this.state.toJS());
    },

    onSaveAccountSettingsFail: function (error) {
        this.state = this.state.merge({
            saving: false,
            error
        });
        this.trigger(this.state.toJS());
    },

    onSaveAccountSettingsSuccess: function () {
        this.state = this.state.merge({
            saving: false,
            error: null
        });
        this.trigger(this.state.toJS());
    }

});

module.exports = AccountStore;