import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Index from "./index_timer";
import ToDos from "./to-dos";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Timer"
            component={Index}
            options={{ headerShown: false }} />
          <Tab.Screen
            name="To Do's"
            component={ToDos}
            options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}
