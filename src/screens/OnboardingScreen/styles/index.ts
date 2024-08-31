import {colors} from '@currency/utils';
import {StatusBar, StyleSheet} from 'react-native';

export const OnboardingStyles = StyleSheet.create({
  constainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    textAlign: 'justify',
    marginVertical: 20,
    fontSize: 13,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 'auto',
  },
  contentView: {
    marginTop: 'auto',
    height: 330,
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
  },
  button: {
    marginLeft: 'auto',
    height: 56,
    width: 56,
    backgroundColor: colors.primary,
    marginVertical: 20,
    borderRadius: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
