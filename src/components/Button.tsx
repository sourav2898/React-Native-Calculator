import {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {Styles} from '../styles/GlobalStyles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  isBlue?: boolean;
  isGray?: boolean;
}

export default function Button({title, onPress, isBlue, isGray}: ButtonProps) {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === 'light'
          ? Styles.btnLight
          : Styles.btnDark
      }>
      <Text
        style={
          isBlue || isGray
            ? Styles.smallText
            : theme === 'dark'
            ? Styles.smallTextDark
            : Styles.smallTextLight
        }>
        {' '}
        {title}{' '}
      </Text>
    </TouchableOpacity>
  );
}
