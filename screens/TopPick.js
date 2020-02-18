import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function TopPick() {
  return (
    <View>
      <Text h2 h2Style={StyleSheet.h2Style}>
        Top Pick Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h2Style: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000"
  }
});
