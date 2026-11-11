import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import Index from "./index_timer";
import ToDos from "./to-dos";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#3a5a40",
            tabBarInactiveTintColor: "#588157",
          }}>
          <Tab.Screen
            name="Timer"
            component={Index}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? "timer" : "timer-outline"}
                  size={size}
                  color={color} />
              )
            }} />
          <Tab.Screen
            name="To Do's"
            component={ToDos}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? "checkbox" : "checkbox-outline"}
                  size={size}
                  color={color} />
              )
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </ PaperProvider>

  );
}
