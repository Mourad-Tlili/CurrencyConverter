import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { format } from "date-fns";

import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";

import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import { Entypo } from "@expo/vector-icons";
import { ConversionContext } from "../util/ConversionContext";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: colors.black,
  },
  content: {
    // paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
});

export default ({ navigation }) => {
  const [value, setValue] = useState(100);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const date = new Date();
  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.push("Options")}>
          <Entypo name="cog" size={32} color={colors.white} />
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/nomads.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}>?????? Valencia Nomads ????????</Text>
          <ConversionInput
            placeholder={"Email"}
            value={username}
            setValue={setUsername}
            icon=<Entypo name="user" size={23} color={colors.black} />
          />
          <ConversionInput
            value={password}
            setValue={setPassword}
            hidden={true}
            placeholder={"Password"}
            icon=<Entypo name="lock" size={23} color={colors.black} />
          />
          <CustomButton
            onPressButton={() => navigation.push("Welcome")}
            text="Login"
            type="login"
          />
          <Button
            text="Forgot password ?"
            onPress={() => alert("Forgot password ?")}
          />
          <CustomButton
            onPressButton={() => alert("SignIn with Facebook !")}
            text="SignIn with Facebook"
            bgColor="#E7EAF4"
            fgColor="#4765A9"
            type="register"
          />
          <CustomButton
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
            onPressButton={() => alert("SignIn with Google !")}
            text="SignIn with Google"
            type="register"
          />
          <CustomButton
            onPressButton={() => alert("SignIn with Apple !")}
            text="SignIn with Apple"
            type="register"
            bgColor="#e3e3e3"
            fgColor="#363636"
          />
          <Button
            text="Don't have an account? create one"
            onPress={() => alert("Forgot password ?")}
          />
          <KeyboardSpacer
            onToggle={(keyboardIsVisible) =>
              setScrollEnabled(keyboardIsVisible)
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
