export const getTabBarIcon = (routeName: string, focused: boolean) => {
  const iconMap: {[key: string]: string} = {
    Home: focused ? 'home-sharp' : 'home-outline',
    Settings: focused ? 'settings' : 'settings-outline',
  };
  return iconMap[routeName] || 'home-sharp'; // Default icon
};
