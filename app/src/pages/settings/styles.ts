import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1d222d',
    },
    boxUser: {
        marginTop: 40,
        alignItems: 'center',
        height: Dimensions.get('window').height/7,
    },
    textUser: {
        fontSize: 25,
        color: '#FDFCFE',
        fontWeight: 'bold',
    },
    textUserTitle: {
        fontSize: 13,
        color: '#6B6B6B',
    },
    divider: {
        height: 1, 
        width: '100%',
        backgroundColor: '#ccc', 
        alignSelf: 'center', 
        marginVertical: 20, 
    },
    boxMid: {
        height: Dimensions.get('window').height/2,
        width: '100%',
        paddingHorizontal: 10,
    },
    boxInfo: {
        flexDirection: 'row',
    },
    text: {
        color: '#6B6B6B',
        fontSize: 16,
        paddingHorizontal: 5,
    },
    button: {
        height: 50,
        width: 110,
        backgroundColor: '#e95032',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textButton: {
        fontSize: 13,
        color:'#1d222d',
    }
    
});
