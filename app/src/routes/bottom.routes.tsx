import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../pages/settings';
import Deliveries from '../pages/deliveries';
import CustomTabBar from '../components/CustomTabBar';
import Orders from '../pages/orders';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
        tabBar={pros=><CustomTabBar {...pros}/>}
    >
        <Tab.Screen 
            name="Orders" 
            component={Orders}
        />
        <Tab.Screen 
            name="Deliveries" 
            component={Deliveries} 
        />
        <Tab.Screen 
            name="Settings" 
            component={Settings} 
        />
    </Tab.Navigator>
  );
}