module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
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
