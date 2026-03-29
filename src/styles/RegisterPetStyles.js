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
    padding: 16,
  },
  heading: {
    fontSize: FONT_SIZES.title,
    color: COLORS.text,
    fontWeight: '700',
    marginBottom: 12,
  },
  formCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: FONT_SIZES.medium,
    color: COLORS.text,
    marginBottom: 10,
    backgroundColor: COLORS.background,
  },
  clearBtn: {
    marginTop: 8,
  },
});

export default styles;
