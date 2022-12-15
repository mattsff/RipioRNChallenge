import { StyleSheet } from 'react-native';

import { Colors } from '../../../styles';

export const createStyles = () =>
  StyleSheet.create({
    loader: {
      backgroundColor: Colors.Overlay,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1000,
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
