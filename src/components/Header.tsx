import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../theme/metrics';
import {COLORS} from '../theme';
import CustomIcon from './CustomIcon';
import Avatar from './Avatar';
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <View style={styles.container}>
      <Avatar styles={styles.avatar} />
      <SearchInput />
      <CustomIcon name="message" size={30} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(8),
    height: verticalScale(57),
    backgroundColor: COLORS.white,
  },
  avatar: {
    width: horizontalScale(34),
    height: verticalScale(34),
  },
});
