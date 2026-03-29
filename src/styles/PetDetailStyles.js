import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  title: {
    fontSize: FONT_SIZES.title,
    color: COLORS.text,
    fontWeight: '700',
    marginBottom: 10,
  },
  field: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.text,
    marginBottom: 8,
  },
  action: {
    marginBottom: 10,
  },
});

export default styles;
