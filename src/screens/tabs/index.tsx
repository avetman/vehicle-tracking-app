import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab';
import Settings from './Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import {getTabBarIcon} from '../../helpers';
import {LanguageContext} from "../../context/LanguageContext";
import {useContext} from "react";

const Tab = createBottomTabNavigator();
const MainBottomNav = () => {
    const { language } = useContext(LanguageContext);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const name = getTabBarIcon(route.name, focused);
          return <Icon name={name} color={color} size={size} />;
        },
        tabBarActiveTintColor: 'rgba(224,55,24,0.94)',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name={language === 'ru' ? 'Главный' : 'Home'}
        component={HomeTab}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MainBottomNav;
