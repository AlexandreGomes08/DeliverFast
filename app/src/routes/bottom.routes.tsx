// bottom.routes.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../pages/settings";
import CustomTabBar from "../components/CustomTabBar";
import Orders from "../pages/orders";
import OrderDetails from "../pages/orderDetails";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function OrdersStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
}

export default function BottomRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="OrdersTab" component={OrdersStack} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
