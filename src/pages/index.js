// Library
import React from 'react'

// Styling
import '../styles/index.scss'

// Components
import Head from '../components/head'
import Layout from '../components/Layout/layout'
import BlogSection from '../components/BlogSection/blog'

const Home = () => {
  return (
    <div>
      <Head title="Home"/>
      <Layout>
        <div className="about">
          <p className="about-intro">
            Hei, I'm Leanne Do, owner of <a href="https://www.facebook.com/naophaidicode" className="hover-text" target="_blank">
            Nao Phai Di Code</a> -
            a record of my <span className="hover-text">software development</span> journey
            aiming to encourage women who learn coding on their own.
            Passionate about <span className="hover-text">languages</span>,
            I'm intrigued by the way logic and syntax work together to
            construct a reality from virtually nothing.
          </p>
          <p className="about-sub">Made in Vietnam. Based in Finland.</p>
        </div>
        <BlogSection />
      </Layout>
    </div>
  )
}

export default Home
