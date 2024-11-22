const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: 'http://localhost:3003/', // Базовый URL для бандлов
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3003, // Порт для запуска микрофронтенда Profile
  },
    plugins: [
        new ModuleFederationPlugin({
          name: 'profile',
          filename: 'remoteEntry.js',
          exposes: {
            './EditProfilePopup': './components/EditProfilePopup',
          },
          shared: ['react', 'react-dom'],
        }),
    ]
    };   
