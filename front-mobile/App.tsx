import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { View } from 'react-native';
import {backgroundStyles } from './src/custom';
import NavBar from './src/components/NavBar';
import Routes from './src/routes';

const App: React.FC = () => {
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
      <View style={backgroundStyles.container}>
        <Routes />
      </View>
    </>
  );
}

export default App;
