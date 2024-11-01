import React from "react";
import { Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";


export default({state,navigation}: BottomTabBarProps)=>{

    const go = (screenName:string)=>{
        navigation.navigate(screenName)
    }

    return (
        <View style={styles.tabArea}>
            <TouchableOpacity style={styles.tabItem} onPress={()=>go("Orders")}>
                <MaterialIcons 
                    name='storage'
                    size={30}
                    style={{opacity:state.index === 0?1:0.5,color:'#e95032'}}
                />
                <Text style={[styles.textItem, { opacity: state.index === 0 ? 1 : 0.5, color: '#e95032' }]}>
                    Pedidos
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={()=>go("Settings")}>
                <MaterialIcons 
                    name='settings'
                    size={30}
                    style={{opacity:state.index === 2?1:0.5,color:'#e95032'}}
                />
                <Text style={[styles.textItem, { opacity: state.index === 1 ? 1 : 0.5, color: '#e95032' }]}>
                    Settings
                </Text>
            </TouchableOpacity>

        </View>
    );
}