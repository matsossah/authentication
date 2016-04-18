var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput
} = React;

var Parse = require('parse/react-native');
var Button = require('../common/button');

module.exports = React.createClass({
  getInitialState() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username}
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
        />
        <Text style={styles.errorMessage} >{this.state.errorMessage}</Text>
        <Button text={'Sign In'} onPress={this.onPress} />
        <Button text={'I need an account'} onPress={this.onSignupPress} />
      </View>
    );
  },
  onSignupPress: function() {
    this.props.navigator.push({name: 'signup'});
  },
  onPress: function() {
    Parse.User.logIn(this.state.username, this.state.password, {
      success: (user) => { this.props.navigator.immediatelyResetRouteStack([{ name: 'home' }]); },
      error: this.errorMessage
    })
  },
  errorMessage: function() {
    this.setState({
      errorMessage: 'Invalid login, please try again'
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  },
  errorMessage: {
    fontSize: 14,
    color: 'red'
  }
});
