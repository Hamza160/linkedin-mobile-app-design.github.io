import * as React from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import Header from '../../components/Header';
import PostList from './PostList';
import {width} from '../../theme/metrics';
import {COLORS} from '../../theme';
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Header />
      <View style={styles.container}>
        <PostList />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: COLORS.lightCream,
  },
});
