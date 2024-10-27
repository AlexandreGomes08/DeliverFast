import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import Preload from './src/pages/login';

export default function App(){
  return(
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Preload />
    </>
  );
}