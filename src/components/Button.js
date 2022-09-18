import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConstants } from '../theme';

const Button = ({ title, onPress, color, small, loading, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress ? onPress : () => alert('Clicked')}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator
          animating={true}
          color={ThemeConstants.Colors.text}
        />
      ) : (
        <Text style={styles.label}> {title} </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string,
  titleColor: PropTypes.string,
  small: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  title: 'Click Me',
  color: ThemeConstants.Colors.primary,
  small: false,
  loading: false,
  disabled: false,
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 45,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  label: {
    fontWeight: '700',
    color: ThemeConstants.Colors.white,
  },
});
