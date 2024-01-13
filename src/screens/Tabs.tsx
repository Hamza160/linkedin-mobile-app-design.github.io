import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './home/HomeScreen';
import PostScreen from './post/PostScreen';
import NotificationScreen from './notification/NotificationScreen';
import JobsScreen from './jobs/JobsScreen';
import {moderateScale, verticalScale} from '../theme/metrics';
import {COLORS, FONTAMILY} from '../theme';
import CustomIcon from '../components/CustomIcon';
import {StyleSheet} from 'react-native';
import NetworkScreen from './network/NetworkScreen';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRoute="Home"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name={'home'} color={COLORS.darkLight} size={29} />
          ),
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="Network"
        component={NetworkScreen}
        options={{
          tabBarLabel: 'Network',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name={'network'} color={COLORS.darkLight} size={23} />
          ),
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({color, size}) => (
            <CustomIcon
              name={'plus-square'}
              color={COLORS.darkLight}
              size={24}
            />
          ),
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name={'bell'} color={COLORS.darkLight} size={24} />
          ),
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{
          tabBarLabel: 'Jobs',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name={'job'} color={COLORS.darkLight} size={24} />
          ),
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: verticalScale(83),
    backgroundColor: COLORS.white,
    paddingTop: verticalScale(25),
    paddingBottom: verticalScale(14.5),
  },
  tabBarLabelStyle: {
    fontSize: moderateScale(12),
    color: COLORS.lightGray,
    fontFamily: FONTAMILY.RobotoLight,
  },
});

export default Tabs;
