var React = require('react');
var UserActions = require('../actions/UserActions');

var AccountForm = React.createClass({

    getInitialState: function() {
        return this.props.account;
    },

    onChange: function(event) {
        var obj = {};
        obj[event.target.id] = event.target.value;
        this.setState(obj);
    },

    saveAccountSettings: function() {
        UserActions.saveAccountSettings(this.state);
    },

    render: function () {
        return (
            <fieldset>
                <legend>Account Settings</legend>
                <ul>
                    <li>
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" value={this.state.name} onChange={this.onChange}/>
                    </li>
                    <li>
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="text" value={this.state.email} onChange={this.onChange}/>
                    </li>
                </ul>
                <button onClick={this.saveAccountSettings}>Save</button>
                {this.props.account.saving ? <span>Saving...</span> : null}
                {this.props.account.error ? <span className="error">{this.props.account.error}</span> : null}
            </fieldset>
        );
    }

});

module.exports = AccountForm;