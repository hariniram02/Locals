import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 35,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 45,
    resizeMode: 'contain',
  },
  menu: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  }
});

export default styles;
