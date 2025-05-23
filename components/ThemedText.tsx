import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'verySmall' | 'small' | 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'linkSmall';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'verySmall' ? styles.verySmall : undefined,
        type === 'small' ? styles.small : undefined,
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'linkSmall' ? styles.linkSmall : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  verySmall: {
    fontSize: 12,
    lineHeight: 12,
    color: '#2B2D42',
    letterSpacing: 1,
    fontWeight: '500'
  },
  small: {
    fontSize: 13,
    lineHeight: 16,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 24,
    fontSize: 12,
    textDecorationLine: 'underline'
  },
  linkSmall: {
    lineHeight: 16,
    fontSize: 13,
    color: '#2B2D42',
    textDecorationLine: 'underline'
  },
});
