module.exports = {
  siteMetadata: {
    title: `Cezerin3 Documentation.`,
    description: `Cezerin is React and Node.js based eCommerce platform.`,
    author: `@himadu`,
    siteUrl: `https://cezerin3.web.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cezerin3 Docs`,
        short_name: `Cezerin3`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#363636`,
        display: `minimal-ui`,
        icon: `src/images/cezerin-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // theme docz
    `gatsby-theme-docz`,
    // sitemap
    `gatsby-plugin-sitemap`,
    // Robots.txt
    `gatsby-plugin-robots-txt`,
    // sass/scss
    `gatsby-plugin-sass`,
    // Page Load screen
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
  ],
}
