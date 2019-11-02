const path = require('path')

 const createPosts = require(`./src/nodes/create-posts`)
 const createPages = require(`./src/nodes/create-pages`)
 const createHome = require(`./src/nodes/create-home`)
 const createServices = require(`./src/nodes/create-services-landing`)

 exports.createPages = async ({ graphql, actions }) => {
   createPages({ graphql, actions })
   createPosts({ graphql, actions })
   createHome({ graphql, actions })
   createServices({ graphql, actions })
 }
