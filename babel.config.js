module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'assets',
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~',
          rootPathSuffix: 'assets',
        },
      ],
    },
  },
};
