import {View, Text, Pressable, TextInput} from 'react-native';
import {useState } from 'react';

import styles from './styles'


export default function Atividade_5() { 

    const [isFocusN1, setIsFocusN1] = useState(false); //borda estilizada ao clicar
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false); 

    const [n1, setN1] = useState(0); 
    const [n2, setN2] = useState(0); 
    const [total, setTotal] = useState(0); 

    const [sinal, setSinal] = useState(); //const pra mudar o sinal

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2));
    }

    function subtrai() {
        setTotal(parseFloat(n1) - parseFloat(n2));
    }

    function multiplica() {
        setTotal(parseFloat(n1) * parseFloat(n2));
    }

    function divide() {
        setTotal(parseFloat(n1) / parseFloat(n2));
    }
    function zerar() {
        setTotal('');
        setN1(0);
        setN2(0);
        setSinal('');
    }

    // Mudar o sinal para + ADIÇÃO
    function handleTextA() {
        soma ();
        setSinal('+');
    }

    // Mudar o sinal para - SUBTRAÇÃO
    function handleTextS() {
        subtrai ();
        setSinal('-');
    }
  
    // Mudar o sinal para * MULTIPLICAÇÃO
    function handleTextM() {
        multiplica ();
        setSinal('*');
    }

    // Mudar o sinal para / DIVISÃO
    function handleTextD() {
        divide ();
        setSinal('/');
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Atividade 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada, 
                            isFocusN1 ? 
                                {
                                    borderColor: '#C51162',                                     
                                    outline: 'none', 
                                } 
                            : 
                                {}
                    ]
                }
                onFocus={() => setIsFocusN1(true)}
                onBlur={() => setIsFocusN1(false)} 
                onChangeText={(num1) => setN1(num1)}
                value={n1}
                // keyboardType='numeric'

            />

            <Text style={styles.txtSaida}>{sinal}</Text>
            

            <Text style={styles.textLabel}> 2º número </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada, 
                            isFocusN2 ? 
                                {
                                    borderColor: '#C51162',                                     
                                    outline: 'none', 
                                } 
                            : 
                                {}
                    ]
                }
                onFocus={() => setIsFocusN2(true)}
                onBlur={() => setIsFocusN2(false)} 
                onChangeText={(num2) => setN2(num2)}
                value={n2}
            />

            <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada, 
                            isFocusTotal ? 
                                {
                                    borderColor: '#C51162',                                     
                                    outline: 'none', 
                                } 
                            : 
                                {}
                    ]
                }
                onFocus={() => setIsFocusTotal(true)}
                onBlur={() => setIsFocusTotal(false)} 
                readOnly={true}
                value={total ? parseFloat(total).toFixed(2) : '0.00'}
            />

            <View style={styles.alinhaButton}>

                 {/* Botão + */}
            <Pressable
                onPress={handleTextA}
                style={
                    ({pressed}) => pressed ? 
                        [styles.button, styles.buttonTouch] 
                    : 
                        styles.button
                }
            >
                <Text style={styles.textButton}> + </Text>
            </Pressable>

            {/* Botão - */}
            <Pressable
                onPress={handleTextS}
                style={
                    ({pressed}) => pressed ? 
                        [styles.button, styles.buttonTouch] 
                    : 
                        styles.button
                }
            >
                <Text style={styles.textButton}> - </Text>
            </Pressable>

            {/* Botão * */}
            <Pressable
                onPress={handleTextM}
                style={
                    ({pressed}) => pressed ? 
                        [styles.button, styles.buttonTouch] 
                    : 
                        styles.button
                }
            >
                <Text style={styles.textButton}> * </Text>
            </Pressable>

            {/* Botão / */}
            <Pressable
                onPress={handleTextD}
                style={
                    ({pressed}) => pressed ? 
                        [styles.button, styles.buttonTouch] 
                    : 
                        styles.button
                }
            >
                <Text style={styles.textButton}> / </Text>
            </Pressable>

            </View>

           
            {/* Botão Zerar */}
            <Pressable
                onPress={() => zerar()}
                style={
                    ({pressed}) => pressed ? 
                        [styles.buttonZerar, styles.buttonTouch] 
                    : 
                        styles.buttonZerar
                }
            >
                <Text style={styles.textButton}> Zerar </Text>
            </Pressable>

            

        </View>
    );
}