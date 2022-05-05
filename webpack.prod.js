const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'production',
  output: {
    publicPath: 'auto'
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
        './CriptosDetails': './src/components/CriptosDetails'
      },
      remotes: {
        MF2: 'MF2@https://microjosegaston.s3.us-west-1.amazonaws.com/MF2/remoteEntry.js'
      },
      shared: {
        react: { singleton: true, requiredVersion: deps.react },
        'react-router-dom': { singleton: true, requiredVersion: deps['react-router-dom'] }
      }
    })
  ],
  optimization: {
    splitChunks: false
  }
};
