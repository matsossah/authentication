var React = require('react-native');
var {
  Text,
  StyleSheet,
  TouchableHighlight
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={'gray'}
        onPress={this.props.onPress}
      >
      <Text style={styles.buttonText}>
        {this.props.text}
      </Text>
      </TouchableHighlight>
    );
  }
});


var styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black'
  },
  buttonText : {
    flex: 1,
    fontSize: 20,
    alignSelf: 'center'
  }
});
