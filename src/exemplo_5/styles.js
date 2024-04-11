import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ff80ab',
        paddinh: 8,
        width: '100%',
        borderRadius: 20,

    },
    titulo: {
        margin:6,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#c51162',

    },
    txtSaida: {
        margin: 6,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'center',
        color: '#e91e63',

    },
    txtEntrada: {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 22,
        //height: 50
        borderColor: '#e91e63',
        marginTop: 10,
        padding: 10,

    },
    button: {
        backgroundColor: '#e91e63',
        height: 60,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        width: 20,

    },
    buttonTouch: {
        backgroundColor: '#c51162',

    },
    textButton: {
        fontSize: 30,
        color: '#ff80ab',
        textAlign: 'center',

    },
    textLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#c51162',

    },

});

export default styles