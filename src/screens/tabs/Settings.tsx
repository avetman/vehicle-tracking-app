import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Platform,
  Picker,
  Switch,
  TouchableOpacity
} from 'react-native';
import {LanguageContext} from "../../context/LanguageContext";

import {useCallback, useState, useContext} from "react";
import Icon from "react-native-vector-icons/Ionicons";


const Settings = () => {
  const { language, switchLanguage } = useContext(LanguageContext);

  const handleLanguageToggle = () => {
    const newLanguage = language === 'ru' ? 'eng' : 'ru';
    switchLanguage(newLanguage);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Details Screen</Text>
        <View>
          <Text>Страна</Text>
          <View style={styles.switchButton}>
            <Switch
                value={language === 'eng'}
                onValueChange={handleLanguageToggle}
            />
            <TouchableOpacity onPress={handleLanguageToggle}>
              <Text>{language === 'ru' ? 'ru' : 'eng'}</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
    }),
  },

});
export default Settings;
