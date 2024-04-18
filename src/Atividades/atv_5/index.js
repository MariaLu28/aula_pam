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

    const [alteraSinalA, setAlteraSinalA] = useState('+') //Altera Sinal pra +
    const [alteraSinalS, setAlteraSinalS] = useState('+') //Altera Sinal pra -
    const [alteraSinalM, setAlteraSinalM] = useState('+') //Altera Sinal pra *
    const [alteraSinalD, setAlteraSinalD] = useState('+') //Altera Sinal pra /
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
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 5 </Text>

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

            <Text style={styles.txtSaida}> + </Text>
            

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
                
                onPress={() => soma()}
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
                onPress={() => subtrai()}
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
                onPress={() => multiplica()}
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
                onPress={() => divide()}
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