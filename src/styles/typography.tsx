import React from 'react';
import {Text, View} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export const HeadingOne = ({title, fontSize, fontWeight, fontColor,fontFamily,headingStyle}: any) => {
  return (
    <Text
      style={{
        color: fontColor,
        fontSize:moderateScale(fontSize),
        fontFamily:fontFamily,
        fontWeight: fontWeight,
        ...headingStyle
      }}>
      {title}
    </Text>
  );
};
