import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
//import { } from 'expo-constants';

//import Mensagem from './src/ex2';
import Atividade1 from './src/atv_1';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: constants.StatusBarHeight,
    backgroundColor: '#ff9c4a',
    padding: 8,
    //alignItems: 'center',
   
  },
});