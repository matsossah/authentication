var React = require('react-native');

var {
  Navigator,
  Component,
  StyleSheet
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Home = require('./components/home/home');
var Wheel = require('./components/startGame/wheel');


var ROUTES = {
  signin: Signin,
  signup: Signup,
  home: Home,
  wheel: Wheel
};

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize("AEMl8HmJCrkmS1SCYSLF5DWJlpjeWLL87RYsGdj8", "wZq55NCjDJSWm8aFzTugNlW8yXOnLiJrwEbRFlvP");
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'wheel' }}
        renderScene={this.renderScene}
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  },
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />
  }
});

styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
