import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: 'rgb(102, 178,255)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: 'pink',
      padding: 25,
    },
    chili: {
      backgroundColor: 'rgb(153, 77, 0)'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'blue',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    touchableOpacity: {
        color: 'pink'
    }
  })
  export default styles;