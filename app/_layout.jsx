import { createStackNavigator } from "@react-navigation/stack";
import ListMotoScreen from "./ListMotoScreen";
import MapScreen from "./MapScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="ListMotoScreen" component={ListMotoScreen} />
    <Stack.Screen name="MapScreen" component={MapScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
