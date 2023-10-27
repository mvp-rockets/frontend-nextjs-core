module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../atoms/**/*.stories.mdx",
    "../atoms/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../public"],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
      test: /\.css$/,
      sideEffects: true,
      use: [
          require.resolve("style-loader"),
          {
              loader: require.resolve("css-loader"),
              options: {
                  
                  importLoaders: 1,
              },
          },{
    loader: require.resolve("postcss-loader"),
    options: {
    implementation: require.resolve("postcss"),
    },
    },
      ],
    },],
      }
    })
  ],

  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },


  docs: {
    autodocs: true
  }
}