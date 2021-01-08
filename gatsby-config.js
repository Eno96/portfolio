/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log(process.env.SENDGRID_API_KEY)
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
      },
      {
        resolve: `gatsby-plugin-react-helmet`
      }
  ]
}

