
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
//import { } from 'expo-constants';

//import Mensagem from './src/ex2';
//import Exemplo_3 from './src/exemplo_3';

import Atv_3 from './src/atv_3'

export default function App() {
  return (
    <View style={styles.container}>
      <Atv_3/>
      <StatusBar style='auto'></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
    padding: 18,
   //alignItems: 'center',
   
  },
});