import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  button: {
    fontWeight: "bold",
    color: colors.offWhite,
  },

  container_login: {
    backgroundColor: "blue",
  },
  button_login: {
    fontSize: 18,
  },
  container_register: {
    //backgroundColor: colors.lightBlue,
  },
  button_register: {
    fontSize: 15,
  },
});

export const CustomButton = ({
  onPressButton,
  type,
  text,
  icon,
  bgColor,
  fgColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      {icon}
      <Text
        style={[
          styles.button,
          styles[`button_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
