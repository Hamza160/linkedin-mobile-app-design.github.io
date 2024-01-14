import * as React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Header from '../../components/Header';
import PostList from './PostList';
import { width } from '../../theme/metrics';
import { COLORS } from '../../theme';
const HomeScreen = () => {
  
  return (
    <SafeAreaView>
     <ScrollView>
       <Header />
        <View style={styles.container}>
          <PostList />
          <PostList />
        </View>
     </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
      width: width,
      backgroundColor: COLORS.lightCream,
    }
});
