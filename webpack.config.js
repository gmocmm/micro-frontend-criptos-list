const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'auto'
  },
  devServer: {
    port: 8081, // Port in each micro frontend in which will running
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-transform-runtime'],
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'CRIPTOS',
      filename: 'remoteEntry_list.js',
      exposes: {
        './CriptosList': './src/components/CriptosList'
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react, eager: true }
        // react: { singleton: true, requiredVersion: deps.react }
        // 'react-router-dom': { singleton: true, requiredVersion: deps['react-router-dom'] },
        // 'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
      }
    })
  ],
  optimization: {
    splitChunks: false
  }
};
