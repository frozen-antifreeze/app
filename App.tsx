import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Info from "./screens/Info";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "./screens/Signin";
import Register from "./screens/Register";
import Details from "./screens/Details";
import { NativeBaseProvider } from "native-base";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeStack} />
      <Stack.Screen name="Auth" component={AuthStack} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

// const HomeTab = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen name="Search" component={Search} />
//       <Tab.Screen name="Info" component={Info} />
//     </Tab.Navigator>
//   );
// };

export default function App() {
  return (
    // <NativeBaseProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    // </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
