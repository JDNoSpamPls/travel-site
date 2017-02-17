 module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: "./app/temp/scripts",
    filename: "[name].js" // changed this to [name] in order to keep the filename dynamic
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}

// module.exports = {
//  entry: "./app/assets/scripts/App.js",
//  output: {
//    path: "./app/temp/scripts",
//    filename: "App.js"
//  }, // end output
//  module: {
//    loaders: [
//      {
//        loader: 'babel',
//        query: {
//          presets: ['es2015'], // note: ES7 aka 'es2016' is now available but 'es2015' is still the 'go to' for developers
//        },
//        // Tells Webpack to apply loader: 'babel' to only javascript files only and nothing else.
//        test: /\.js$/,
//        // Lets Webpack convert only certain javascript files, in this case, the anything in the '/node_modules' folder
//        exclude: /'node_modules'/
//      }
//    ] // end loaders
//  } // end module
// } // end module.exports