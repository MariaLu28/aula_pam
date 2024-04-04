import {View, Text, TextInput, Pressable } from 'react-native';
import {useState } from 'react';

import styles from './styles'

export default function Atividade_4 () {

   const [textoDigitado, setTextoDigitado] = useState('');
   const [mensagem, setMensagem] = useState('');
   //const [ sobrDig, setSobrDig] = useState;



    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.titulo}>Digite o nome e sobrenome</Text>

            <Text style={styles.txtSaida}>
               {mensagem}
            </Text>

            <TextInput 
            style={styles.input}
            onChangeText={(entrada) => setTextoDigitado(entrada)}
/>

            <Pressable
                style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
                onPress={() => {
                    setMensagem(textoDigitado);
                    //setTxt2('')
                  
                }}
        
                >
                    <Text style={styles.txtBotao}>Exibir texto</Text>
                </Pressable> 

            

             

        
             
           
        </View>

        
    )
}

