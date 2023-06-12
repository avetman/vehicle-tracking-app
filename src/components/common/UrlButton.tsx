import {useCallback} from "react";
import {Text, TouchableOpacity, Linking, StyleSheet, Alert} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
const UrlButton = ({url,message, text, icon}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(`${url}`);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
	  <TouchableOpacity style={styles.urlButton} onPress={handlePress}>
		  <Icon name='call' size={24} color={'black'}/>
		  <Text style={{color: '#000', fontSize: 18}}>Позвонить</Text>
	  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
	urlButton: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 10,
		borderWidth: 1,
		padding: 10,
		marginVertical: 5,

	},
})

export default UrlButton;
