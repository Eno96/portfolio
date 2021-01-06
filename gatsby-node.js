exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      externals: {
        jquery: 'jQuery', // important: 'Q' capitalized
      }
    })
  }
}