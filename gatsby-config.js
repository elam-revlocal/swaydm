/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Sway.DM`,
    titleTemplate: `Sway.DM`, 
    // | %s`,
    image: `default.png`,
    description: `Welcome to Sway.DM.`,
    author: `Erica Lam`,
    siteUrl: `https://swaydm.netlify.app`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      // resolve: `gatsby-plugin-google-fonts`,
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
          // `roboto slab\:300,400,400i,500,600,700,800,900`,
          // `roboto\::300,400,400i,500,600,700,800,900`,
          `nunito sans\::300,400,400i,500,600,700,800,900`,
          `work sans\::300,400,400i,500,600,700,800,900`,
          // you can also specify font weights and styles
        ],
        display: "swap",
        attributes: {
          rel: "preload",
          as: "font",
          // rel: "stylesheet preload prefetch",
          // as: "style",
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
}
