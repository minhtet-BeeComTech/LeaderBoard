module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@controller': './src/controller',
          '@hook': './src/hook',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@store': './src/store',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
    ['@emotion'],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'], //removing consoles.log from app during release (production) versions
    },
  },
};
