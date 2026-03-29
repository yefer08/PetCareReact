import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: FONT_SIZES.title,
    color: COLORS.text,
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textLight,
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
    alignItems: 'center',
  },
  tipEmoji: {
    fontSize: 42,
    marginBottom: 14,
  },
  tipText: {
    fontSize: FONT_SIZES.large,
    color: COLORS.text,
    lineHeight: 30,
    marginBottom: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  counter: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.primary,
    fontWeight: '700',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  actionButton: {
    marginTop: 8,
  },
});

export default styles;