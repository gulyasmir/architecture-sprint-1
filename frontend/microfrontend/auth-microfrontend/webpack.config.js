const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    output: {
        publicPath: 'http://localhost:3001/', // Базовый URL для бандлов
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3001, // Порт для запуска микрофронтенда Auth
      },
    plugins: [
        new ModuleFederationPlugin({
          name: 'auth',
          filename: 'remoteEntry.js',
          exposes: {
              './Login': './components/Login',
              './Register': './components/Register',
          },
          shared: ['react', 'react-dom'],
        }),
    ]
    };   