module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  rules: {
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
};
