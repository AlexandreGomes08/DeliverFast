import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#1d222d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxTop: {
        height: Dimensions.get('window').height/7,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',   
        backgroundColor:'#e95032',
    },
    boxMid: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FDFCFE',
        marginTop: 45,
    },
    menu: {     
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        backgroundColor: '#e95032',
        paddingVertical: 10,
      },
      menuItem: {
        fontSize: 16,
        color: '#2b2e3e',
      },
      selectedMenuItem: {
        fontWeight: 'bold',
        color: '#FFF',
      },
});