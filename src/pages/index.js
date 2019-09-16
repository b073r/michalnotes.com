import React from "react"
import { graphql, replace } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/posts/post-preview"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home Page"/>
    <h2>Latest Articles</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostPreview title={node.frontmatter.title} link={createSlug(node.frontmatter.title)}/>
    ))}
  </Layout>
)

export default IndexPage

export const createSlug = data => {
  return data.replace(' ', '-');
}

export const posts = graphql `
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
        }
      }
      totalCount
    }
  }
`