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
  infoText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textLight,
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  petEmoji: {
    fontSize: 34,
    marginRight: 12,
  },
  cardHeaderText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: FONT_SIZES.large,
    color: COLORS.text,
    fontWeight: '800',
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textLight,
  },
  speciesBadge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
  },
  speciesBadgeText: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.small,
    fontWeight: '700',
  },
  cardInfo: {
    marginTop: 12,
    fontSize: FONT_SIZES.small,
    color: COLORS.secondary,
    fontWeight: '700',
  },
});

export default styles;