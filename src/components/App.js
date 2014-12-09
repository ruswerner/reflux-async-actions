var React = require('react');
var Reflux = require('reflux');
var AccountStore = require('../stores/AccountStore');
var AccountForm = require('./AccountForm');

var App = React.createClass({

    mixins: [Reflux.connect(AccountStore)],

    render: function () {

        return <AccountForm account={this.state}/>;

    }

});

module.exports = App;
