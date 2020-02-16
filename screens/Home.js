import * as React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import Swiper from "react-native-deck-swiper";

import Card from "../components/Card";
import Pics from "../constants/Pics";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        cards={Pics}
        renderCard={Card}
        infinite
        backgroundColor="white"
        cardHorizontalMargin={0}
        stackSize={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  }
});
