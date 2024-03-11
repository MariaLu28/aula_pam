import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import logo from '../../assets/002-1-react-native.png';

export default function Atividade1() { 

    return(
        <View style={styles.container}>
           <Image source={logo} style={{width: '100%', height: '15%'}}   />
            <Text style={styles.paragraph}>
              Exemplo 2
            </Text>

            <Text style={{textAlign: 'center'}}>
                Olá Mario!
            </Text>

            <Text style={{textAlign: 'center'}}>
                Olá Maria!
            </Text>

            <Text style={{textAlign: 'center'}}>
                Olá Bruna!
            </Text>

            <Text style={{textAlign: 'center'}}>
            Olá Bruno!
            </Text>
        </View>
    );
}
