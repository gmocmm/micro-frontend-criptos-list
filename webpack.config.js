const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081 // Port in each micro frontend in which will running
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
      name: 'MF1',
      filename: 'remoteEntry.js',
      // Use only  remote property when you are created a container to receive a microfrontend-child
      remotes: {
        // MF1:
        //   "MF1@http://domain/remoteEntry.js", //This is an example
      },
      // Use only when this component will be a child micro frontend
      exposes: {
        './MicroFrontendApp': './src/App.js' // This is an example
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        }
      }
    })
  ]
};
