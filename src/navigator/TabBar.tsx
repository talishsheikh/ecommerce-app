import {Image, Text} from 'react-native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icons, ScreenName} from '../utilis/Constants';
import colors from '../styles/colors';

const TabBar = (props: any) => {
  const onHomeClick = () => {
    props.navigation.navigate(ScreenName.HOME_TAB);
  };

  const onSearchClick = () => {
    props.navigation.navigate(ScreenName.SEARCH);
  };
  const onFavoriteClick = () => {
    props.navigation.navigate(ScreenName.FAVORITE);
  };
  const onProfileClick = () => {
    props.navigation.navigate(ScreenName.PROFILE);
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onHomeClick} style={{}}>
        <View style={{}}>
          <Image
            style={styles.tabIconImg}
            source={
              props.state.index == 0 ? Icons.HOMEFILLED : Icons.HOMEOUTLINE
            }
          />
          <Text style={{}}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{}} onPress={onSearchClick}>
        <View style={{}}>
          <Image
            style={styles.tabIconImg}
            source={
              props.state.index == 1
                ? Icons.SEARCHFILLED
                : Icons.SEARCHOUTLINE
            }
          />

          <Text style={{}}>Search</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{}} onPress={onFavoriteClick}>
        <View style={{}}>
          <Image
            style={styles.tabIconImg}
            source={
              props.state.index == 2 ? Icons.FAVORITEFILLED : Icons.FAVORITEOUTLINE
            }
          />

          <Text style={{}}>Favorite</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{}} onPress={onProfileClick}>
        <View style={{}}>
          <Image
            style={styles.tabIconImg}
            source={
              props.state.index == 3
                ? Icons.PROFILEFILLED
                : Icons.PROFILEOUTLINE
            }
          />

          <Text style={{}}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 24,
    // backgroundColor: colors.white,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabIconImg: {
    resizeMode: 'contain',
    width: '100%',
    height: 25,
  },
});

export default TabBar;
