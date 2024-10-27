import './gesture-handler';
import { StatusBar } from 'react-native';

import Routes from './src/routes/index.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Routes />
    </NavigationContainer>
  );
}