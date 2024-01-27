import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { GameProvider } from "./global/OurRoadsContext";
import { NavigationContainer } from "@react-navigation/native";
import Splash from './screens/Splash';
import Initial from "./screens/Iniitial";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "mutiara-display-shadow": require("./assets/fonts/Mutiara_Display_02_Shadow.ttf"),
    "outfit-regular": require("./assets/fonts/Outfit-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GameProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="Initial" component={Initial} options={{ headerShown: false }} />          
           <Stack.Screen name="Onboarding" component={OnboardingNavigator} options={{ headerShown: false }} />
          {/*<Stack.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
          <Stack.Screen name="OurRoads" component={OurRoads} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
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
