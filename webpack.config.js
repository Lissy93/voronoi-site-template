
const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    
  mode: 'production',

    entry: {
      'voroni-app': './src/main.js',
      analytics: './src/google-analytics.js',
  },

    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: "/dist/",
      filename: '[name].js'
    },

    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-es2016']
            }
          }
        },
        {
          test: /\.scss$/,
          use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }

      ]
    },
    devServer: {
      
    },

    externals: {
      d3: 'd3'
    },

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    
    plugins: [ 
      new MiniCssExtractPlugin({
        filename: 'voronoi-styles.css',
      }),
      new CopyWebpackPlugin([
        { from: 'node_modules/d3/dist/d3.min.js', to: 'lib' },
        { from: 'node_modules/bulma/css/bulma.min.css', to: 'lib' },
      ])
    ]
  };