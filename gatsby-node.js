/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
      query {
        allMdx {
          nodes {
            frontmatter {
              path
            }
          }
        }
      }
    `);
  
    if (result.errors) {
      reporter.panic("failed to create posts ", result.errors);
    }
  
    const pages = result.data.allMdx.nodes;
  
    pages.forEach((page) => {
      actions.createPage({
        path: page.frontmatter.path,
        component: require.resolve("./src/components/blogpostLayout.js"),
        context: {
          pathSlug: page.frontmatter.path,
        },
      });
    });
  };