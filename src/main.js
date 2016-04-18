var React = require('react-native');

var {
  Navigator,
  StyleSheet
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Home = require('./components/home/home');


var ROUTES = {
  signin: Signin,
  signup: Signup,
  home: Home
};

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize("AEMl8HmJCrkmS1SCYSLF5DWJlpjeWLL87RYsGdj8", "wZq55NCjDJSWm8aFzTugNlW8yXOnLiJrwEbRFlvP");
  },
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin' }}
        renderScene={this.renderScene}
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  }
});

styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
