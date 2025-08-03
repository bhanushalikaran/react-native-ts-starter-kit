import React, { ReactNode, memo } from 'react';
import {
    Text as NativeText,
    TextProps as NativeTextProps,
    StyleProp,
    TextStyle
} from 'react-native';
import { fontFamily } from '../assets';


type FontVariant = 'regular' | 'medium' | 'semiBold' | 'bold';
type FontFamily = '_font' | '_font2';

interface TextProps extends NativeTextProps {
  children: ReactNode;
  variant?: FontVariant;
  family?: FontFamily;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const Text: React.FC<TextProps> = memo(
  ({
    children,
    style,
    variant = 'regular',
    family = '_font',
    color = '#000',
    ...props
  }) => {
    return (
      <NativeText
        style={[
          {
            fontFamily: fontFamily[family][variant],
            color,
          },
          style,
        ]}
        {...props}
      >
        {children}
      </NativeText>
    );
  },
);
