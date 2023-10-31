import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {Card} from 'react-native-shadow-cards';
import {Surface, SurfaceProps, useTheme} from 'react-native-paper';
import { themeType } from '../theme';

type CardProps = {
  style?: ViewStyle;
  children?: any;
};

const CMScard: FC<CardProps> = (props: CardProps) => {
  const theme:themeType = useTheme();
  return (
    <Surface
      style={[
        {
          // flex:1 ,
          flexDirection:"row" ,
          backgroundColor: theme.colors.cms_card_background,
          borderRadius: 35,
          alignSelf: 'center',
          margin: 15,
          maxWidth : 800,
          justifyContent: 'space-around',
          flexWrap : "wrap",
          alignItems : "center",
          padding: 15
        },
        props.style,
      ]}>
      {props.children}
    </Surface>
  );
};

export default CMScard;

const styles = StyleSheet.create({});
