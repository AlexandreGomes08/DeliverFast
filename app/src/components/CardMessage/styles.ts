import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 

    card: {
        marginBottom: 10,
        padding: 10,
        width: 320,
        borderRadius: 10,
        backgroundColor: '#2b2e3e'
    },
    cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 3,
    },
    cardStatus: {
        flexDirection: 'row',
    },
    textStatus: {
        paddingHorizontal: 5,
        marginTop: -1,
        borderRadius: 10,
        color: '#FDFCFE',
        fontSize: 13,
        fontWeight: 'bold'
    },
    id: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    cardBox: {
        flexDirection: 'row',
    },
    cardDados: {
        color: '#A9A9A9',
        fontSize: 15,
        marginLeft: 3,
        marginTop: 2.5,
        marginBottom: 10
    }
});