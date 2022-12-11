import {StyleSheet} from 'react-native';
import {myColors} from './Colors';

export const Styles = StyleSheet.create({
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.btnDark,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.btnGray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  smallText: {
    fontSize: 32,
    color: myColors.white,
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.black,
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.light,
  },
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
  },
  viewButton: {
    position: 'absolute',
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
  screenSecondNumber: {
    fontSize: 40,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
});
