import {  StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import TestLayout from './TestFile'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  return (
    
    <View style={styles.container}
    >
      <Text style={styles.title}>Book Sense</Text>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    <TestLayout/>
    </View>
  );
}

const styles = StyleSheet.create({ 
    button: {
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 15,
    padding: 30
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(102, 178,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
