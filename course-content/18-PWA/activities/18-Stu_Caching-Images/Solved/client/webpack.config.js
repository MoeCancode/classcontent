const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Require the GenerateSW class of the WorkBoxPlugin 
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Webpack Plugin',
    }),
    new MiniCssExtractPlugin(),
    new WorkboxPlugin.GenerateSW({
      // The GenerateSW class precaches all images by default. However, that is often not the behavior that we want, especially when we have many images.
      // Runtime caching allows us to only cache images as we use them. When we use runtime caching, the request is only populated after a request is made for an asset, like an image.
      // To use runtime caching, we need to add parameters to our GenerateSW class in our webpack.config.js.
      // First we need to set the property to exclude our images from precaching.
      // Do not precache images
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],

      // 🔑 Then, we enable runtimeCaching to match URLs that are images and use the CacheFirst strategy, so that the cache is checked for the URL before making a call on the network. The CacheFirst strategy is a perfect choice for optimizing repetitive requests, since it only reaches out to the network for "fresh" assets.
      // We also need to add a custom cache name and can select the maximum number of images we want to hold in the cache at one time. This allows us to control the size of our cache.
      // Define runtime caching rules.
      runtimeCaching: [{
        // Match any request that ends with .png, .jpg, .jpeg or .svg.
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

        // Apply a cache-first strategy.
        handler: 'CacheFirst',

        options: {
          // Use a custom cache name.
          cacheName: 'images',

          // Only cache 2 images.
          expiration: {
            maxEntries: 2,
          },
        },
      }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
