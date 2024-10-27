import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d222d',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',   
    },
    boxMid: {
        height: Dimensions.get('window').height/4,
        width:'100%',  
        paddingHorizontal: 45, 
    },
    boxBottom: {
        height: Dimensions.get('window').height/3,
        width:'100%', 
        justifyContent: 'center',
        alignItems: 'center',   
    },
    logo: { 
        height: 200,
        width: 200, 
    },
    title: {
        color: '#e95032',
        fontSize: 25,
        fontWeight: 'bold',
    },
    boxInput: {
        height: 56,
        width: '100%',
        backgroundColor: '#2b2e3e',
        borderRadius: 25,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12
    },
    input: {
        height: '100%',
        width: '90%',
        marginLeft: 10
    },
    button: {
        width: '100%',
        height: 56,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e95032',
        borderRadius: 25,
    },
    textButton: {
        fontWeight: 'bold',
        color: '#2b2e3e',
    },
    alert: {
        marginTop: 10,
        width:'100%', 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    textAlert: {
        color: '#e95032',
        fontSize: 12,
    },
    
});


