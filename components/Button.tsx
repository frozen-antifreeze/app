import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React from "react";
import color from "../screens/color";
interface PropsData extends TouchableOpacityProps {
  length?: number;
  title: string;
}

const Button = (props: PropsData) => {
  return (
    <TouchableOpacity
      style={{
        width: props.length ? props.length : 343,
        height:'auto',
        paddingHorizontal: 12,
        paddingVertical: 8,
        margin: 32,
        borderRadius: 8,
        backgroundColor: color.primary,
      }}

      {...props}
    >
      <Text style={{ color: color.grayhalf, alignSelf:'center' }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
