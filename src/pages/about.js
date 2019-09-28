import React from "react"
import { graphql, replace } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({data}) => (
    <Layout>
        <SEO title="About" />
        <h2>Introduction</h2>
        <p>
            My name is Michal Bobrowski and I work as software engineer at Knowledge Symphony GmBH and indepented consultant.
        </p>
        <h2>How am I?</h2>
        <h2>What do I do?</h2>
        <p>
            At my dialy work for Knowledge Symphony we build applications that makes life of factory workers easier 
            and improve overall organisation and training processes.
        </p>
        <h2></h2>
    </Layout>
)

export default AboutPage;