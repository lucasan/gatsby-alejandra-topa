const slash = require(`slash`)

module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions

  const result = await graphql(`
      {
        allWordpressPost(filter: {status: {eq: "publish"}}) {
          edges {
            node {
              id
              path
            }
          }
        }
      }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPost } = result.data

  const postTemplate = require.resolve(`../templates/post.js`)

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  // Create the Listing (paginated results)
  const postsPerPage = 9
  const numPages = Math.ceil(allWordpressPost.edges.length / postsPerPage)
  const pathBase = "/blog/"
  const listTemplate = require.resolve(`../templates/listing.js`)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? pathBase : `/blog/page/${i + 1}`,
      component: slash(listTemplate),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}