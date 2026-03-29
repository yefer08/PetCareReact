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
  heading: {
    fontSize: FONT_SIZES.title,
    color: COLORS.text,
    fontWeight: '700',
    marginBottom: 12,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  tipText: {
    fontSize: FONT_SIZES.large,
    color: COLORS.text,
    lineHeight: 26,
    marginBottom: 16,
  },
  counter: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textLight,
    fontWeight: '600',
  },
});

export default styles;
