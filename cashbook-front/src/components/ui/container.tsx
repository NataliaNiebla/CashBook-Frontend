import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  style?: object;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'screen';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
  background?: 'transparent' | 'white' | 'gray' | 'dark' | 'primary';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  border?: boolean;
  fullHeight?: boolean;
  scrollable?: boolean;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  maxWidth = 'full',
  padding = 'md',
  margin = 'none',
  centered = false,
  background = 'transparent',
  shadow = 'none',
  rounded = 'none',
  border = false,
  fullHeight = false,
  scrollable = false,
}) => {
  // Padding values
  const paddingValues = {
    none: 0,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  };

  // Margin values
  const marginValues = {
    none: 0,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  };

  // Background colors
  const backgroundColors = {
    transparent: 'transparent',
    white: '#ffffff',
    gray: '#f9fafb',
    dark: '#111827',
    primary: '#e0f2fe',
  };

  // Border radius values
  const borderRadiusValues = {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 999,
  };

  // Shadow styles
  const shadowStyles = {
    none: {},
    sm: { elevation: 1, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2 },
    md: { elevation: 3, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
    lg: { elevation: 8, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 8 },
    xl: { elevation: 12, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16 },
  };

  // Create the container style
  const containerStyle = [
    {
      width: '100%',
      padding: paddingValues[padding],
      margin: marginValues[margin],
      backgroundColor: backgroundColors[background],
      borderRadius: borderRadiusValues[rounded],
      ...(fullHeight && { minHeight: screenHeight }),
      ...(border && { borderWidth: 1, borderColor: '#e5e7eb' }),
      ...(centered && { alignSelf: 'center' }),
    },
    shadowStyles[shadow],
    style,
  ];

  const ContainerComponent = scrollable ? ScrollView : View;

  return (
    <ContainerComponent style={containerStyle}>
      {children}
    </ContainerComponent>
  );
};

export default Container;