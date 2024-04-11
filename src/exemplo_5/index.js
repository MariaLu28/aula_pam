import {View, Touchable, Text, TextInput} from 'react-native';
import {useState } from 'react';

import styles from './styles'

export default function Exemplo_5 () {

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState('');


    return (
        <View>
            <Text>Exemplo 5</Text>         
        </View>

    );
}