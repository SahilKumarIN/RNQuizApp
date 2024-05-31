import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    // navigate to page
    navigation.navigate('Login');
  }, 1500);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.dribbble.com/users/315465/screenshots/15748270/media/4cca4b90022715562c4459a8374e7b3c.png?resize=400x300&vertical=center',
        }}
        width={100}
        height={100}
        style={styles.logo}
      />
      <Text style={styles.text}>{'RN - Quiz App'}</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3e5f5',

    gap: 20,
  },
  text: {
    // color: '#8e24aa',
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 12,
  },
  logo: {
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#7b1fa2',
    shadowOffset: 6,
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
