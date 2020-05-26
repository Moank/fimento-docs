import React from "react"
import { RedocStandalone } from 'redoc';

import Layout from "../components/layout";
import SEO from "../components/seo";

import fimentoDocs from '../docs/fimento-api.yml';


const IndexPage = () => (
  <Layout>
    <SEO title="Documentation" />
    <RedocStandalone specUrl={fimentoDocs} />
  </Layout>
)

export default IndexPage
