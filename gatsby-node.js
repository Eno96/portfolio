exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {

  const config = getConfig()
  config.node = {
      fs: 'empty'
  }
  const { setWebpackConfig } = actions;
  setWebpackConfig({
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    }
  })
}

