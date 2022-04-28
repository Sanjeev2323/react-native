import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, ScrollView} from "react-native";

const App = () => {

const [later,initial]=useState('');
const [totalGoals,enteringGoals]=useState([]);

  function takeinput(enteredInput){
   initial(enteredInput);
  };

  function displayInput(){
enteringGoals((allGoals)=>[...allGoals,later])
  };

  var uniqu;

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TextInput placeholder="type here" style={styles.inputcontainer}  onChangeText={takeinput}/>
        <Button color="red" title="enter" onPress={displayInput}/>
      </View>
      
      <View style={styles.container2}>
      <ScrollView>
        <Text>goals will display here</Text>
        {totalGoals.map((goal)=><Text  style={styles.outputcontainer}key={uniqu}>{goal}</Text>)}
        </ScrollView>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputcontainer: {
    borderColor: "black",
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 50,
    borderWidth: 1,
    alignContent: "center",
    color:"black"

  },
  outputcontainer:{
    borderColor: "black",
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 50,
    borderWidth: 1,
    alignContent: "center",
    color:"black",
    marginBottom:10,
  },
  container1: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 10,
    flexDirection: "row",
    paddingRight: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  container2: {
    flex: 2,
    margin: 10,
  },
});
export default App;
