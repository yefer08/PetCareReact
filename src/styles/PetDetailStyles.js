import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
  },
  favoriteText: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 8,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
