import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    margin: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  age: {
    marginTop: 4,
    color: '#555',
  },
});

export default styles;
