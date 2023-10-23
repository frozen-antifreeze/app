import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { style } from "./styles";
import InputField from "../components/InputField";
import color from "./color";
import Button from "../components/Button";

const Register = () => {
    const register = () => {
        navigation.navigate("Home")
    }
  const navigation = useNavigation<any>();
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={style.container}>
      <TextInput style={{ height: 40, width: "100%" }} />
      <Image
        source={require("../assets/icon.png")}
        style={{ margin: 48, width: 165.299, height: 125 }}
      />

      <InputField
        title=""
        placeholder="name"
        // keyboardType="email-address"
      />

      <InputField
        title=""
        placeholder="phone number"
        keyboardType="number-pad"
      />

      <InputField title="" placeholder="password" secureTextEntry />

      <InputField title="" placeholder="reenter password" secureTextEntry />

      <Button title="Signin" onPress={register} />

      <View style={[style.rowContainer, { position: "absolute", bottom: 66 }]}>
        <Text>already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={{ color: color.primary, fontSize: 14 }}>sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
