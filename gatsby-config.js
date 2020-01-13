module.exports = {
  siteMetadata: {
    title: 'untitled',
    // siteUrl: 'https://www.Example.com',
    description: 'explain this website'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ]
}
