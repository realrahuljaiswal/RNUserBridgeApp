import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  dropdown: {
    height: 44,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  valueText: {
    fontSize: 14,
    color: '#333',
  },

  arrow: {
    fontSize: 12,
    color: '#666',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    width: '80%',
    maxHeight: '60%',
    backgroundColor: '#FFF',
    borderRadius: 10,
  },

  option: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },

  optionText: {
    fontSize: 15,
    color: '#000',
  },
});
