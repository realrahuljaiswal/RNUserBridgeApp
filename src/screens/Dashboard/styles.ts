import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 12,
  },

  topRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },

  searchInput: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FAFAFA',
  },

  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#007AFF',
    color: '#FFF',
    borderRadius: 8,
    fontWeight: '600',
    alignSelf: 'center',
  },

  filterPanel: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
  },

  filterTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },

  spacer: {
    height: 10,
  },

  filterActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  applyBtn: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 15,
  },

  clearBtn: {
    color: '#FF3B30',
    fontWeight: '600',
    fontSize: 15,
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#666',
  },
});
