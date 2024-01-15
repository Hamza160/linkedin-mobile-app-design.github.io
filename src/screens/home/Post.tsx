import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  width,
} from '../../theme/metrics';
import {COLORS, FONTAMILY} from '../../theme';
import CustomIcon from '../../components/CustomIcon';
import LikeImage from '../../assets/images/likes.png';
import ClapImage from '../../assets/images/claps.png';
import BulbImage from '../../assets/images/blub.png';
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
        <View style={styles.body}>
          {post.text && (
            <Text style={styles.postText}>
              {post.text.substring(0, 150)}{' '}
              <Text style={styles.seeMore}>...see more</Text>
            </Text>
          )}
          {post.imageUrl && (
            <Image
              source={{uri: post.imageUrl}}
              alt={post.user.name}
              style={styles.postImage}
            />
          )}
          <View style={styles.likeStats}>
            <View style={styles.likeWrapper}>
              <View style={styles.likes}>
                <Image source={LikeImage} alt="Like" style={styles.likesIcon} />
                <Image source={BulbImage} alt="Like" style={styles.likesIcon} />
                <Image source={ClapImage} alt="Like" style={styles.likesIcon} />
              </View>
              <Text style={styles.likesCount}>{post.likes}</Text>
            </View>
            <Text style={styles.comments}>{post.comments} comments</Text>
          </View>
        </View>
        <View style={styles.spacer} />
        {/* Post Footer */}
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
  body: {
    paddingBottom: verticalScale(15),
  },
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: horizontalScale(5),
  },
  timeText: {
    fontFamily: FONTAMILY.RobotoRegular,
    fontSize: moderateScale(17),
    color: COLORS.mediumGray,
  },
  postText: {
    fontSize: moderateScale(17),
    color: COLORS.black,
    fontFamily: FONTAMILY.RobotoRegular,
  },
  seeMore: {
    color: '#585C60',
  },
  postImage: {
    width: '100%',
    height: verticalScale(292),
    objectFit: 'cover',
  },
  likeStats: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  likeWrapper: {
    flexDirection: 'row',
    gap: moderateScale(2),
  },
  likesCount: {
    fontSize: moderateScale(15),
    fontFamily: FONTAMILY.RobotoRegular,
    color: '#585C60',
    letterSpacing: 0.3,
  },
  likes: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  likesIcon: {
    width: horizontalScale(16),
    height: horizontalScale(16),
  },
  comments: {
    fontSize: moderateScale(15),
    fontFamily: FONTAMILY.RobotoRegular,
    color: '#585C60',
    letterSpacing: 0.3,
  },
  spacer: {
    padding: 2,
    backgroundColor: '#EBEBEB',
  },
});
