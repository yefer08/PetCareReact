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
  infoText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textLight,
    marginBottom: 10,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
  },
  cardTitle: {
    fontSize: FONT_SIZES.large,
    color: COLORS.text,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textLight,
  },
});

export default styles;
