const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './index', // Входной файл приложения
  mode: 'development', // Development-режим для отладки
  output: {
    publicPath: 'http://localhost:3000/', // Базовый URL для хоста
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000, // Порт для хоста
    hot: true,
  },
    plugins: [
        new ModuleFederationPlugin({
          name: 'main',
          remotes: {
            auth:'auth@http://localhost:3001/remoteEntry.js',
            gallery: 'gallery@http://localhost:3002/remoteEntry.js',
            profile: 'profile@http://localhost:3003/remoteEntry.js',
          },
          shared: ['react', 'react-dom'],
        }),
    ]
    };   