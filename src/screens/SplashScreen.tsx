import {Image, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme';
import {height, horizontalScale, verticalScale, width} from '../theme/metrics';
import LinkedInLogo from '../assets/images/linkedinLogo.png';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.blue} />
      <View style={styles.bottom} />
      <View style={styles.top} />
      <Image source={LinkedInLogo} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    width: width,
    height: height * 0.65,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    transform: [{scaleX: 2}],
    zIndex: 2,
  },
  bottom: {
    position: 'absolute',
    width: width,
    height: height * 0.4,
    backgroundColor: COLORS.darkGray,
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  logo: {
    width: horizontalScale(233),
    height: verticalScale(61),
    zIndex:3
  },
});
