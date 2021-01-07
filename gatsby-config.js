/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const { createProxyMiddleware } = require("http-proxy-middleware") //v1.x.x

module.exports = {
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [      
      {
          resolve: `gatsby-plugin-google-fonts`,
          options: {
              fonts: [
                  `poppins:300,400,500,600,700`       
              ], display: 'swap'       
          }
      },
      {
        resolve: `gatsby-plugin-sass`
      }
  ]
}

