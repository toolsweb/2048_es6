var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: './refactoring/index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };