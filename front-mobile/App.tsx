import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { View } from 'react-native';
import { styles } from './App';
import NavBar from './src/navbar';
import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <NavBar />
      <View style={styles.container}>
        <Routes />
      </View>
    </>
  );
}
