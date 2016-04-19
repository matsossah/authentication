var React = require('react-native');

var {
  Component,
  StyleSheet,
  Text,
  View
} = React;

var Picker = require('react-native-wheel-picker');
var PickerItem = Picker.Item;


module.exports = React.createClass({

  getInitialState: function() {
    return {
      selectedItem : 2,
      itemList: ['Stoplight', '333', 'Alphabet', 'Colors', 'Countdown', 'Book Speed']
    }
  },

  onPickerSelect: function(index) {
    this.setState({
      selectedItem: index,
    })
  },

  // onAddItem: function() {
  //   var name = '司马懿'
  //   if (this.state.itemList.indexOf(name) == -1) {
  //     this.state.itemList.push(name)
  //   }
  //   this.setState({
  //     selectedItem: this.state.itemList.indexOf(name),
  //   })
  // },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Choose your game!
        </Text>
        <Picker style={{width: 150, height: 180}}
          selectedValue={this.state.selectedItem}
          itemStyle={{color:"white", fontSize:26}}
          onValueChange={(index) => this.onPickerSelect(index)}>
            {this.state.itemList.map((value, i) => (
              <PickerItem label={value} value={i} key={"money"+value}/>
            ))}
        </Picker>
        <Text style={{margin: 20, color: '#ffffff'}}>
          Current Choice：{this.state.itemList[this.state.selectedItem]}
        </Text>
      </View>
        // <Text style={{margin: 20, color: '#ffffff'}}
        //     onPress={this.onAddItem}>
        //   怎么没有司马懿？
        // </Text>

    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1962dd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
