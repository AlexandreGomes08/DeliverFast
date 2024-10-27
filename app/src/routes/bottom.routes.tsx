import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pedidos from '../pages/pedidos';
import Settings from '../pages/settings';
import Entregas from '../pages/entregas';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Pedidos" 
            component={Pedidos}
        />
        <Tab.Screen 
            name="Entregas" 
            component={Entregas} 
        />
        <Tab.Screen 
            name="Settings" 
            component={Settings} 
        />
    </Tab.Navigator>
  );
}