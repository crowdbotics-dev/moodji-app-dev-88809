import { loginRequest } from "../../modules/login/auth/index.js";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, StyleSheet, Alert } from "react-native";

const LoginScreen = ({
  navigation
}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <View style={styles.container}>
      <Image source={require("./Pink Blue Cute Illustration Cat Adoption Logo.png")} style={styles.logo} />
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" autoCapitalize="none" clearTextOnFocus={true} enablesReturnKeyAutomatically={true} rejectResponderTermination={true} scrollEnabled={true} />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>;

  const onSubmit = () => {
    dispatch(loginRequest({
      email,
      password
    }).then(data => {
      const result = unwrapResult(response);
      navigation.navigate("Untitled4", result);
    }).catch(() => Alert.alert("Something went wrong!")));
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdfbf9"
  },
  logo: {
    width: "100%",
    height: 218,
    marginBottom: 30
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10
  },
  button: {
    backgroundColor: "#ff66ab",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});
export default LoginScreen;