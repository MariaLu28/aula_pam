import {View, Text, TextInput, Pressable } from 'react-native';
import {useState } from 'react';

import styles from './styles';

export default function Exemplo_4 () {

    const [txtDigitado, setTxtDigitado] = useState('Texto digitado');
    const [txt2, setTxt2] = useState('');
    const [txtTela, setTxtTela] = useState('');

    function atualizaTextoHandle(txt) {
        setTxtDigitado(txt);
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.titulo}>Exemplo 4</Text>     

            <Text style={styles.texto}>{txtDigitado}</Text>

            <TextInput 
            style={styles.input}
            onChangeText={(valor) => atualizaTextoHandle(valor)}
            />


            <View style = {styles.linha}/>

            <Text style = {styles.texto}>{txtTela}</Text>

            <TextInput
            style= {styles.input}
            onChangeText={(vlr) => setTxt2(vlr)}
            value={txt2}
            />

        <Pressable
                style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
                onPress={() => {
                    setTxtTela(txt2);
                    setTxt2('')
                    //ou onPress={() => handleExibeTexto()}
                
                }}
        
                >
                    <Text style={styles.txtBotao}>Exibir texto</Text>
                </Pressable>
               </View>

    )
}