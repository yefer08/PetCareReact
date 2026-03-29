import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
  },
  listContent: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  emoji: {
    fontSize: 30,
    marginRight: 12,
  },
  cardTextContainer: {
    flex: 1,
  },
  petName: {
    fontSize: 18,
    fontWeight: '600',
  },
  petInfo: {
    color: '#6B7280',
  },
});
