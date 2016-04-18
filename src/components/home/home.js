var React = require('react-native');
var {
  Text,
  View,
  StyleSheet
} = React;

var Parse = require('parse/react-native');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      user: null
    };
  },
  componentWillMount: function() {
    Parse.User.currentAsync()
      .then((user) => { this.setState({user: user}); })
  },
  render: function() {
    if (!this.state.user) {
      return <Text>Loading...</Text>
    }

    var username = this.state.user.get('username');

    return (
      <View style={styles.container}>
        <Text> Welcome Back {username} </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
