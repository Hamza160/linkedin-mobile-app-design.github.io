import {StyleSheet, Text, View, FlatList} from 'react-native';
import * as React from 'react';
import posts from '../../data/posts';
import Post from './Post';

const PostList = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({});
