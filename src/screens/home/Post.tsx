import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../theme/metrics';
import {COLORS, FONTAMILY} from '../../theme';
import Avatar from '../../components/Avatar';
import CustomIcon from '../../components/CustomIcon';

interface PostProps {
  post: Post;
}

const Post: React.FC<PostProps> = ({post}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header} />
      <View style={styles.body}>
        {/* Post Header */}
        <View style={styles.profile}>
          <Image
            source={{uri: post.user.imageUrl}}
            alt="Avatr Image"
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <View style={styles.profileName}>
              <Text style={styles.name}>{post.user.name}</Text>
              <View style={styles.dot} />
              <Text style={styles.connection}>{post.user.connetion}</Text>
            </View>
            <Text style={styles.bio}>{post.user.bio}</Text>
            <View style={styles.time}>
              <Text style={styles.timeText}>{post.time}</Text>
              <View style={styles.dot} />
              <CustomIcon name="globe" size={16} />
            </View>
          </View>
        </View>
        {/* Post Body */}
        <View />
      </View>
      <View style={styles.footer} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  card: {
    marginTop: verticalScale(11),
    width: width,
    backgroundColor: COLORS.white,
    paddingHorizontal: horizontalScale(15),
  },
  header: {},
  body: {},
  footer: {},
  profile: {
    paddingTop: verticalScale(17),
    paddingBottom: verticalScale(10),
    flexDirection: 'row',
    gap: horizontalScale(20),
  },
  profileInfo: {
    gap: verticalScale(5),
  },
  profileName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: horizontalScale(4),
  },
  name: {
    fontFamily: FONTAMILY.RobotoMedium,
    fontSize: moderateScale(18),
    color: COLORS.black,
  },
  connection: {
    fontFamily: FONTAMILY.RobotoMedium,
    fontSize: moderateScale(17),
    color: COLORS.mediumGray,
  },
  dot: {
    height: verticalScale(3),
    width: horizontalScale(3),
    borderRadius: 100,
    backgroundColor: COLORS.mediumGray,
  },
  avatar: {
    borderRadius: 50,
    width: horizontalScale(64),
    height: verticalScale(64),
  },
  bio: {
    fontFamily: FONTAMILY.RobotoRegular,
    fontSize: moderateScale(17),
    color: COLORS.mediumGray,
  },
  time: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems:'center',
    gap: horizontalScale(5)
  },
  timeText: {
    fontFamily: FONTAMILY.RobotoRegular,
    fontSize: moderateScale(17),
    color: COLORS.mediumGray,
  }
});
