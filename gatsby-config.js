module.exports = {
  siteMetadata: {
    title: `Fimento | API Docs`,
    description: `Some fanci description to update`,
    author: `Fimento`,
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
        name: `Fimento`,
        short_name: `Fimento`,
        start_url: `/`,
        background_color: `#f2f0ed`,
        theme_color: `#DBC9C6`,
        display: `standalone`,
        icon: `src/images/logo-filled.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
