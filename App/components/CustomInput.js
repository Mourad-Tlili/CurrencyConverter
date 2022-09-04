import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: colors.offWhite,
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,

    // color: colors.offWhite,
  },
});

export const CustomInput = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="placeholder"></TextInput>
    </View>
  );
};
