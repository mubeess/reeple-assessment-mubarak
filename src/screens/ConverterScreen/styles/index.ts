import {colors} from '@currency/utils';
import {StatusBar, StyleSheet} from 'react-native';

export const ConverterStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 20,
    paddingTop: StatusBar.currentHeight,
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
  text: {
    textAlign: 'center',
    marginVertical: 10,
  },
  converterContainer: {
    width: '100%',
    height: 280,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 0.5,
  },
  seperatorContainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: '#E7E7EE',
    flex: 1,
  },
  converterIcon: {
    height: 44,
    width: 44,
    borderRadius: 44,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  disclaimerContainer: {
    gap: 25,
  },
  disclaimerText: {
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'justify',
    marginTop: 20,
  },
});

export const CountryAmountStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    width: '48%',
  },
  selectContainer: {
    width: '48%',
    backgroundColor: '#fff',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    color: '#3C3C3C',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
  },
  text: {
    marginRight: 10,
  },
});
