import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import AppContainer from './src/navigation/AppNavigation';
import {LanguageProvider} from './src/context/LanguageContext';

function App(): JSX.Element {
  return (
    <LanguageProvider>
      <SafeAreaView style={styles.container}>
        <AppContainer />
      </SafeAreaView>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
