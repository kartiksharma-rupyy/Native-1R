module.exports = {
  presets: [
    '@babel/preset-flow',
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
  ],
};
