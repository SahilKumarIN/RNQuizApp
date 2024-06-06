import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import colors from '../../constants/color';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation}) => {
  const user = {name: 'Sahil Kumar'};
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{user.name}</Text>
      {navigation.canGoBack() && (
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => {
            navigation.goBack();
          }}>
          <IonIcons name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
      )}
      {/* <ScrollView> */}

      <Image
        source={{
          uri: 'https://media.licdn.com/dms/image/D5616AQHPNxGy78PFNw/profile-displaybackgroundimage-shrink_200_800/0/1697948901039?e=2147483647&v=beta&t=zWehqdzCgkQPG99_nV25PwZ2oCcfZqzkeHXaWw1UT6Y',
        }}
        width="100%"
        height="300"
      />

      {/* </ScrollView> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  heading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginTop: 8,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  goBack: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'gray',
    padding: 6,
    borderRadius: 20,
  },
});
