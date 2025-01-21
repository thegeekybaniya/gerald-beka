import React from 'react';

export interface HeaderProps {
  onPress?: () => void;
  title: string;
}

export interface SimpleScreenProps {
  children?: React.ReactNode;
  title: string;
}
