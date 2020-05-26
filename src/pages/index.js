import React from "react"
import { RedocStandalone } from 'redoc';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Documentation" />
    <RedocStandalone specUrl="/docs.yml" />
  </Layout>
)

export default IndexPage
