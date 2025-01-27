import React from "react";
import { View, Text, SafeAreaView } from "react-native";


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;