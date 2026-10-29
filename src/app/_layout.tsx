import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Index from "./index_timer";
import ToDos from "./to-dos";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (

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

  );
}
