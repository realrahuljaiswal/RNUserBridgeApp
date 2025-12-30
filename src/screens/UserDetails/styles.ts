import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },

  subText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#111',
  },

  cardItem: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
  },
});
