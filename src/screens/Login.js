import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button, InputField } from '../components';
import { orangeLogo } from '../theme/Images';
import { FontStyles } from '../theme/styles/Fonts';
import { LayoutStyles } from '../theme/styles/Layout';
import ThemeConstants, { Colors, FontSize } from '../theme/ThemeConstants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [step, setStep] = useState(1);

  const onSubmit = () => {
    if (step === 1) {
      setStep(2);
    } else {
      alert('Login');
    }
  };

  return (
    <View style={[LayoutStyles.colCenter, { marginTop: 80 }]}>
      <Image source={orangeLogo} />
      <Text style={[{ margin: 50 }, FontStyles.titleSmall]}>
        Contractor Sign In
      </Text>
      {step === 1 ? (
        <InputField
          labelText="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="yourname@email.com"
        />
      ) : (
        <>
          <View style={styles.emailTextView}>
            <Text style={styles.emailText}>{email}</Text>
          </View>
          <InputField
            labelText="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />
        </>
      )}

      <View style={{ margin: 10 }} />
      <Button
        onPress={onSubmit}
        title="Continue"
        disabled={buttonDisabled}
        loading={loading}
      />
      {step === 1 ? (
        <Text style={{ marginTop: 30 }}>
          Need an account?{' '}
          <Text style={{ color: Colors.primary }}>Sign Up</Text>
        </Text>
      ) : (
        <Text style={{ color: Colors.primary, marginTop: 30 }}>
          Forgot Password
        </Text>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  emailTextView: {
    width: '60%',
    height: 40,
    borderRadius: 50,
    backgroundColor: ThemeConstants.Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    marginBottom: 20,
  },
  emailText: {
    textAlign: 'center',
    color: ThemeConstants.Colors.text,
  },
});
