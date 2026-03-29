import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: FONT_SIZES.title,
    color: COLORS.text,
    fontWeight: '800',
    marginBottom: 8,
  },
  description: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textLight,
    marginBottom: 18,
  },
  formCard: {
    backgroundColor: COLORS.white,
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  label: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.text,
    fontWeight: '700',
    marginBottom: 8,
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: FONT_SIZES.medium,
    color: COLORS.text,
    marginBottom: 12,
    backgroundColor: COLORS.inputBackground,
  },
  clearBtn: {
    marginTop: 8,
  },
});

export default styles;