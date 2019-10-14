import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import ProjectList from '../components/ProjectList/ProjectList'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProjectList />
    <Contact />
  </Layout>
)

export default IndexPage
