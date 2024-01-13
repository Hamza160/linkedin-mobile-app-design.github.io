import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AvatarImage from '../assets/images/pic.jpeg';

interface AvatarProps {
  styles: any;
}

const Avatar: React.FC<AvatarProps> = ({styles}) => {
  return (
    <View>
      <Image 
        source={AvatarImage} 
        alt="Avatr Image" 
        style={[styles, { borderRadius: 50 }]}
        />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
