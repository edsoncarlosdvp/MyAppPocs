import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20
  },
  container: {
    width: '45%',
    height: 150,
    backgroundColor: '#FFFAFA',
    paddingTop: 20,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#dcdcdc',
    borderRadius: 5
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'justify',
    marginBottom: 15
  }
})