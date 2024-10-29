import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
    tabArea: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-around',
        marginBottom: 15
        
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textItem: {
        color: '#e95032'
    }
})