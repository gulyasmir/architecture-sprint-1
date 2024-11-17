const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: 'http://localhost:3002/', // Базовый URL для бандлов
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3002, // Порт для запуска микрофронтенда Gallery
  },
    plugins: [
        new ModuleFederationPlugin({
          name: 'gallery',
          filename: 'remoteEntry.js',
          exposes: {
            './Card': './components/Card',
          },
          shared: ['react', 'react-dom'],
        }),
    ]
    };   