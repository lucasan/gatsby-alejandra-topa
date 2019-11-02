const slash = require(`slash`)

module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions

  const result = await graphql(`
      {
        allWordpressPage(filter: {template: {eq: "template-home.php"}}) {
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

  const { allWordpressPage } = result.data

  const postTemplate = require.resolve(`../templates/home.js`)

  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}