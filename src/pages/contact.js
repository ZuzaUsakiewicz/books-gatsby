import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Navigation/Navbar"

export default function Contact() {
  return (
    <Layout>
      <Navbar />
      <h1>I'd love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Layout>
  )
}
