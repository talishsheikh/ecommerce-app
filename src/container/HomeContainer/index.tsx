import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../styles';
import {Icons} from '../../utilis/Constants';
import {HeadingOne} from '../../styles/typography';

const HomeContainer = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 12,
            paddingVertical: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
             columnGap: 8
             }}>
            <View style={{
              flexDirection: 'row',
               }}>
              <HeadingOne
                title="FASHION SQUARE"
                fontSize={14}
                fontWeight="500"
                fontColor={colors.black}
                fontFamily={fonts.PACIFICO_400}
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              flexDirection:'row',
              marginHorizontal:18,
              columnGap:16
            }}>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                style={{width: 23, height: 25,}}
                source={Icons.SEARCHOUTLINE}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                style={{width: 25, height: 25}}
                source={Icons.SHOPPING_CART}
                
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeContainer;
