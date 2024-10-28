import React from "react";
import { Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";


export default({state,navigation})=>{

    const go = (screenName:string)=>{
        navigation.navigate(screenName)
    }

    return (
        <View style={styles.tabArea}>
            <TouchableOpacity style={styles.tabItem} onPress={()=>go("Orders")}>
                <MaterialIcons 
                    name='storage'
                    size={25}
                    color={'gray'}
                />
                <Text>Pedidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={()=>go("Deliveries")}>
                <MaterialIcons 
                    name='moped'
                    size={25}
                    color={'gray'}
                />
                <Text>Entregas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={()=>go("Settings")}>
                <MaterialIcons 
                    name='settings'
                    size={25}
                    color={'gray'}
                />
                <Text>Settings</Text>
            </TouchableOpacity>

        </View>
    );
}