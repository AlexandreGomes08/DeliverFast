import { Button, Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#1d222d',
        alignItems: 'center',   
    },
    boxTop: {
        height: Dimensions.get('window').height/9,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',  
        marginTop: 20, 
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FDFCFE',
    },
    boxMid: {
        height: Dimensions.get('window').height/3,
        width:'80%',
        borderRadius: 20,
        backgroundColor: '#2b2e3e',
        padding: 15,
    },
    cardBox: {
        flexDirection: 'row',
    },
    cardDados: {
        color: '#A9A9A9',
        fontSize: 19,
        marginLeft: 3,
        marginTop: 1.5,
        marginBottom: 10
    },
    customButton: {
        backgroundColor: '#e95032',
        height: 46,
        width: 200,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#FFFFFF', 
        fontSize: 16,
        fontWeight: 'bold',
    },
    boxButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    cardStatus: {
        flexDirection: 'row',
        paddingHorizontal: 3,
    },
    textStatus: {
        paddingHorizontal: 5,
        marginTop: -1,
        borderRadius: 10,
        color: '#FDFCFE',
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        width: 200,
        height: 46,
        borderRadius: 10,
        marginVertical: 10,

    },
    completedText: {
        color: '#FFFFFF', 
        fontSize: 16,
        fontWeight: 'bold',
    }
})