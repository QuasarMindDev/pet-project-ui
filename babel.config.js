module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true
        }
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~assets': './src/assets',
            '~components': './src/components',
            '~data': './src/data',
            '~hooks': './src/hooks',
            '~navigation': './src/navigation',
            '~screens': './src/screens',
            '~state': './src/state',
            '~theme': './src/theme',
            '~types': './src/types'
          }
        }
      ]
    ]
  };
};
