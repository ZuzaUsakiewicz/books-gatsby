import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Navigation/Navbar"

const NotFoundPage = () => (
  <Layout>
    <div>
      <Navbar />
      <h1> 404: Not Found </h1>
      <p> You just hit a route that doesn & #39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
