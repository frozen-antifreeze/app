import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";
import InputField from "../components/InputField";
import { style } from "./styles";
import { useNavigation } from "@react-navigation/native";
import color from "./color";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";

const Signin = () => {
  const signin = () => {
    navigation.navigate("Home");
  };
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
        placeholder="phone number"
        keyboardType="number-pad"
      />
      <InputField title="" placeholder="password" secureTextEntry={true} />

      <View
        style={[
          style.rowContainer,
          { width: 343, justifyContent: "space-between" },
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <Checkbox
            //   style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          />
          <Text style={{ marginLeft: 8 }}>remember login</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: color.primary }}>forgot password?</Text>
        </TouchableOpacity>
      </View>

      <Button title="Signin" onPress={signin} />

      <View style={[style.rowContainer, { position: "absolute", bottom: 66 }]}>
        <Text>no account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: color.primary }}>register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({});
