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
  },
  heroCard: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  petEmoji: {
    fontSize: 52,
    marginBottom: 10,
  },
  title: {
    fontSize: FONT_SIZES.title,
    color: COLORS.text,
    fontWeight: '800',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textLight,
    marginBottom: 14,
  },
  favoriteBadge: {
    backgroundColor: '#FFF7ED',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  favoriteBadgeText: {
    color: COLORS.accent,
    fontSize: FONT_SIZES.small,
    fontWeight: '700',
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.large,
    color: COLORS.text,
    fontWeight: '700',
    marginBottom: 14,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  label: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textLight,
    fontWeight: '600',
  },
  value: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.text,
    fontWeight: '700',
  },
  primaryAction: {
    marginBottom: 10,
  },
  secondaryAction: {
    marginBottom: 4,
  },
});

export default styles;