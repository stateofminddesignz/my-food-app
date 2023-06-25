import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/styles";

const Search = ({setTerm}) => {
  const [input, setInput] = useState("");

  const handleEndEditing = () => {
    if(!input) return
    setTerm(input)
    setInput('')
  }

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput 
           style={styles.input} 
           placeholder=" Restaurant ,  Food"
           value={input}
           onChangeText={(text) => {setInput(text)}}
           onEndEditing={handleEndEditing}
           
           />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 25,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
  },
  // common style across app
  elevation,

  input: {
    fontSize: 20,
    marginLeft: 20,
  },
});

export default Search;
