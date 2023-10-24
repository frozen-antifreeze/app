import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { style } from "../screens/styles";
import { SearchNormal1, Setting5 } from "iconsax-react-native";
import color from "../screens/color";

const SearchBar = () => {
  return (
    <View
      style={[
        style.rowContainer,
        {
          backgroundColor: color.gray,
          justifyContent: "space-around",
          paddingVertical: 0,
        },
      ]}
    >
      <SearchNormal1 size="20" color="#888" />
      <TextInput
        placeholder="Search (not implemented yet :'( )"
        style={{
          width: 287,
          height: 40,
          paddingHorizontal: 8,
          // borderWidth: 1,
        }}
      />
      <TouchableOpacity>
        <Setting5 size="20" color="#888" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
