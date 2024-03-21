import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
//import { } from 'expo-constants';

//import Mensagem from './src/ex2';
import Exemplo_3 from './src/exemplo_3';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: constants.StatusBarHeight,
    //backgroundColor: '#ff9c4a',
    backgroundColor: 'orange',
    padding: 18,
    alignItems: 'center',
   
  },
});