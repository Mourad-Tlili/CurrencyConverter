import React from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  StyleSheet,
} from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
  },
  containerDisabled: {
    backgroundColor: colors.offWhite,
  },
  button: {
    backgroundColor: colors.white,
    padding: 15,
    borderRightColor: colors.border,
    borderRightWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: { fontSize: 18, color: colors.blue, fontWeight: "bold" },
  input: { flex: 1, padding: 10, color: colors.textLight },
});

export const ConversionInput = ({
  onButtonPress,
  icon,
  placeholder,
  hidden,
  value,
  setValue,
  ...props
}) => {
  const containerStyles = [styles.container];

  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        {icon}
      </TouchableOpacity>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={hidden}
        {...props}
      />
    </View>
  );
};
