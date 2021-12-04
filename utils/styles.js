import {StyleSheet} from 'react-native';

const Colors = {
  lighter: '#f2f2f2',
  darker: '',
  white: '#fff',
  black: '#000',
  blue: '#015eb8',
};

export const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 24,
    color: Colors.blue,
  },

  bold: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 24,
    color: Colors.black,
  },

  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 12,
    color: Colors.black,
  },

  text: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
  },

  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },

  backgroundContainer: {
    backgroundColor: Colors.lighter,
    paddingHorizontal: 24,
  },

  screenContainer: {
    backgroundColor: Colors.lighter,
    height: '100%',
    width: '100%',
  },

  small: {
    fontSize: 12,
    marginBottom: 20,
  },

  searchViewContainer: {
    backgroundColor: Colors.lighter,
    position: 'absolute',
    marginTop: 100,
    width: '100%',
  },

  destinationCard: {
    marginTop: 12,
    backgroundColor: Colors.white,
    padding: 16,
  },
});
