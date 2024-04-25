import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';


//import { } from 'expo-constants';

//import Mensagem from './src/exemplo_2';
//import Exemplo_3 from './src/exemplo_3';
//import Atv_3 from './src/atv_3'
//import Exemplo_4 from './src/exemplo_4' 
//import Atividade_4 from './src/Atividades/atv_4';
//import Exemplo_5 from './src/exemplo_5';
//import Exemplo5 from './src/exemplo_5';
//import Atividade_5 from './src/Atividades/atv_5';

import Exemplo6 from './src/exemplo_6';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo6/>
      <StatusBar style='auto'></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#aaa',
    padding: 18,
   alignItems: 'center',
   
  },
});