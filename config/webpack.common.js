const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ENV_VARIABLES = require('./env_variables');

const webpackRecommendedSizeLimit = 249856;

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  context: path.join(__dirname, '../'),
  entry: {
    app: {
      import: path.resolve(__dirname, '../src', 'app.tsx'),
      filename: 'app/index.js',
    },
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    assetModuleFilename: 'app/assets/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, '../node_modules/'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: path.resolve(__dirname, '../node_modules/'),
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ttf|otf|eot|woff|woff2)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupKey) {
            const allChunksNames = chunks
              .map(item => item.name.split('/').pop())
              .join('~');
            return `app/vendors/${cacheGroupKey}-${allChunksNames}`;
          },
          chunks: 'all',
          minSize: 10000,
          maxSize: webpackRecommendedSizeLimit,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Surf',
      template: './src/index.ejs',
      filename: './[name]/index.html',
      chunks: [
        'app',
        'vendors/common-app',
      ],
      inject: 'body',
    }),
    new EnvironmentPlugin(ENV_VARIABLES),
  ],
};
