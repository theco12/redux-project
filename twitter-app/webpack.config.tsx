import { Configuration } from "webpack";

const config: Configuration = {
  // ... other webpack configurations ...

  module: {
    rules: [
      // ... other rules ...

      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns CSS into CommonJS modules
          "sass-loader", // 1. Compiles Sass to CSS
        ],
      },
    ],
  },
};

declare var module: any;
// ... other webpack configurations ...

module: {
  rules: [
    // ... other rules ...

    {
      test: /\.scss$/,
      use: [
        "style-loader", // 3. Inject styles into DOM
        "css-loader", // 2. Turns CSS into CommonJS modules
        "sass-loader", // 1. Compiles Sass to CSS
      ],
    },
  ];
}
