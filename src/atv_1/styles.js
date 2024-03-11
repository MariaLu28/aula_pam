import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        //backgroundColor: '#f8c390', //FUNDO
        backgroundColor: '#dcdce9', //FUNDO
        padding: 8,  
        //borderWidth: 4,
        //borderColor: '',    
        //width: 300, 
        //marginBottom: 8,   
        alignItems: 'center',
    },  
    paragraph: {
        margin: 24,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black', //cor da fonte

    },

    imagem: {
        width: '80%',
        //resizeMode: 'stretch',
        resizeMode: 'center',
    }
});

export default styles;