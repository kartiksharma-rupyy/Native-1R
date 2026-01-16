import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { login, logout } from '@/store/slices/authSlice';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}
      </Text>

      <Button
        title={isLoggedIn ? 'Logout' : 'Login'}
        onPress={() =>
          dispatch(isLoggedIn ? logout() : login())
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
});
