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
        GRAFHCRIPTOS: 'GRAFHCRIPTOS@https://gmo-micro-frontends.s3.us-east-1.amazonaws.com/criptos-graph/remoteEntry_graph.js'
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
