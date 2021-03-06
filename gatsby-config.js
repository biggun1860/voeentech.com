require("dotenv").config({
  path: `.env`,
})

const apiURL =
  process.env.API_URL ||
  `http://gatsby-demo-4gpgu8ji5fd0007e-1258471122.ap-guangzhou.service.tcloudbase.com/api/v1.0`
const apiToken =
  process.env.API_TOKEN ||
  `EW_ENduN16X1DBoyCs8tR-FdVbOOF-uS-crzU7YozrcBXnJ-mqFzf5TkYmOtyLTAZ8wqEjKUPtpZLOO21_w9sjyScIpa9280fJqQTmOV9cazY9uqMms_FUWKYvlUawP7`

module.exports = {
  flags: {
    DEV_SSR: false,
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
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `voeentech`,
        short_name: `voeentech`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-cloudbase-cms`,
      options: {
        apiURL,
        apiToken,
        queryLimit: 1000,
        collectionTypes: [`product`, `news`],
        singleTypes: [`global`, `home`, `contact`],
        // fetchOptions: {
        //   proxy: { host: `127.0.0.1`, port: 8899 },
        // },
      },
    },
    {
      resolve: "gatsby-plugin-content-hash",
      options: { build_root_path: `${__dirname}/public` },
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        // your google analytics tracking id
        trackingId: `G-40FNGLH6JS`,
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    // You can have multiple instances of this plugin to create indexes with
    // different names or engines. For example, multi-lingual sites could create
    // an index for each language.
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "pages",
        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",
        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {
          profile: "speed",
          // Partial search moving forward
          tokenize: "forward",
        },
        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          query {
            allCloudBaseProduct {
              edges {
                node {
                  specifications
                  id
                  title
                  slug
                  description
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: "slug",
        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ["title", "description"],
        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ["slug", "title", "description", "image", "id"],
        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allCloudBaseProduct.edges.map(({ node }) => {
            return {
              title: node.title,
              description: node.description,
              slug: node.slug,
              image: node.image,
              id: node.id,
            }
          }),
      },
    },
  ],
}
