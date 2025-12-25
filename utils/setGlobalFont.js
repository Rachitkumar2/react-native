/**
 * Global Font Setup for React Native
 * 
 * HOW TO USE:
 * 1. Copy this file to your project's utils folder
 * 2. In App.js, import and call after fonts are loaded:
 * 
 *    import { setGlobalFont } from './utils/setGlobalFont';
 *    
 *    // After fonts loaded:
 *    setGlobalFont('YourFontName');
 */

import { Text } from 'react-native';

export const setGlobalFont = (fontFamily) => {
  const oldTextRender = Text.render;
  Text.render = function(...args) {
    const origin = oldTextRender.call(this, ...args);
    return {
      ...origin,
      props: {
        ...origin.props,
        style: [{ fontFamily }, origin.props.style],
      },
    };
  };
};
