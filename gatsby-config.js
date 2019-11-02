module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'src.alejandratopa.com',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://src.alejandratopa.com',
          replacementUrl: 'https://alejandratopa.com',
        },
        concurrentRequests: 10,
        includedRoutes: [
          '**/pages',
          '**/posts',
          '**/categories',
          '**/tags',
          '**/media',
          '**/users',
          '**/wp-api-menus/v2/*'
        ],
        normalizer: function ({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Alejandra ToPa Psicóloga Cognitivo Conductual",
        short_name: "Alejandra ToPa",
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#ef4136",
        display: "standalone",
        icon: "src/assets/images/icon.png",
        crossOrigin: `use-credentials`,
      }
    },
    `@rhysforyou/gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: false,
        defaultQuality: 85,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: 'GTM-MGZF58Q',
      },
    }
  ]
}