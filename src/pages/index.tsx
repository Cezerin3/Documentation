import { graphql, Link, PageProps } from "gatsby"
import React, { FC } from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import "../components/pages/home/index.css"
import SEO from "../components/seo"

interface DataProps {
  site: {
    buildTime: string
  }
}

const IndexPage: FC<PageProps<DataProps>> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Cezerin3 - ReactJS eCommerce platform. React Shopping Cart.</h1>
    <Link to="/docs">Go to our docs...</Link>
    <p>
      Cezerin Community Site http://cezerin3.web.app Telegram Chat Cezerin -
      https://t.me/cezerin .
    </p>
    <h5>
      Cezerin is open-source ecommerce platform. React Shopping Cart. Allows
      creating a Progressive Web Apps built with React and Node.js. API-first
      CMS.
    </h5>
    <header className="wall">
      <div className="container">
        <h1>Ecommerce Progressive Web Apps</h1>
        <h2>
          Cezerin is React and Node.js based eCommerce platform. React Shopping
          Cart. Single-page application. Open-Source.
        </h2>
        <br />

        <a className="button" href="https://github.com/Cezerin3">
          <span>GitHub</span>
        </a>

        <a className="button" href="https://plusha.cezerin.net">
          <span>Demo Store Plusha Theme</span>
        </a>

        <a className="button" href="https://cezerin.net">
          <span>Demo Store Default Theme</span>
        </a>

        <a className="button" href="https://cezerin.net/admin">
          <span>Demo Store Dashboard</span>
        </a>

        <a className="button" href="https://t.me/cezerin">
          <span>Telegram Chat - Cezerin</span>
        </a>

        <a className="button" href="http://cezerin3.web.app/docs/">
          <span>Docs</span>
        </a>

        <a className="button" href="http://cezerin3.web.app/docs/faq">
          <span>FAQ</span>
        </a>

        <a className="button" href="http://cezerin3.web.app/docs/howtos">
          <span>HowTos</span>
        </a>
      </div>
    </header>

    <section className="section">
      <div className="container">
        <div className="content">
          <div className="columns centered reverse">
            <div className="column">
              <h2 className="title">Latest Technologies</h2>
              <p>
                We use latest technologies to build web apps with efficient use
                of the network. Web app loads once on startup and fetches a
                smaller amount of data when you request a new page.
              </p>
              <h2 className="title">Progressive Web Apps</h2>
              <p>
                Building a high-quality Progressive Web App has incredible
                benefits, making it easy to delight your users, grow engagement
                and increase conversions.
              </p>
              <p>
                <a href="https://plusha.cezerin.net">Demo Store Plusha Theme</a>
              </p>
              <p>
                <a href="https://cezerin.net">Demo Store Default Theme</a>
              </p>
              <p>
                <a href="https://cezerin.net/admin">Demo Store Dashboard</a>
              </p>
            </div>
            <div className="column">
              <div className="screenshot">
                <img
                  src="https://raw.githubusercontent.com/Cezerin3/Documentation/main/src/images/cezerin-mobile-order-summary.webp"
                  alt="Cezerin Mobile Order Summary"
                  title="Cezerin Mobile Order Summary"
                />
              </div>
            </div>
          </div>

          <h2 className="title">Features</h2>
          <div className="columns">
            <div className="column">
              <ul>
                <li>Products (options, variants, attributes)</li>
                <li>Product categories</li>
                <li>Inventory and stock management</li>
                <li>Customers</li>
                <li>Customer groups</li>
                <li>Orders</li>
                <li>Order custom statuses</li>
                <li>Pages</li>
                <li>File manager</li>
                <li>Shipping and payment methods</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>Custom shipping fields</li>
                <li>Payment Gateways</li>
                <li>Checkout options</li>
                <li>Access Tokens</li>
                <li>Export theme to zip archive</li>
                <li>Install theme from zip archive</li>
                <li>Theme Settings</li>
                <li>Apps Store</li>
                <li>Server-side rendering (SEO friendly)</li>
                <li>Passwordless</li>
              </ul>
            </div>
          </div>

          <h2 className="title">Plusha Theme</h2>
          <div className="screenshot has-text-centered">
            <img
              src="https://raw.githubusercontent.com/Cezerin3/Documentation/main/src/images/cezerin-plusha-theme.webp"
              alt="Cezerin Plusha Theme"
              title="Cezerin Plusha Theme"
            />
          </div>

          <h2 className="title">Default Theme</h2>
          <div className="screenshot has-text-centered">
            <img
              src="https://raw.githubusercontent.com/Cezerin3/Documentation/main/src/images/cezerin-default-theme.webp"
              alt="Cezerin Default Theme"
              title="Cezerin Default Theme"
            />
          </div>

          <h2 className="title">Dashboard</h2>
          <div className="screenshot has-text-centered">
            <img
              src="https://raw.githubusercontent.com/Cezerin3/Documentation/main/src/images/cezerin-dashboard-products.webp"
              alt="Cezerin Dashboard"
              title="Cezerin Dashboard"
            />
          </div>

          <h2 className="title">Roadmap</h2>
          <p>
            The future roadmap of Cezerin includes a number of focus areas, some
            of which are detailed below (in no particular order)
          </p>
          <div className="columns">
            <div className="column">
              <ul>
                <li>Documentation</li>
                <li>Automated tests</li>
                <li>Central update</li>
                <li>Themes Store</li>
                <li>WebHooks</li>
                <li>Realtime API</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>Shipping Integrations</li>
                <li>Customer Account</li>
                <li>Push Notifications</li>
                <li>Braintree Payments</li>
                <li>Stripe Payments</li>
              </ul>
            </div>
          </div>

          <h2 className="title">Join Us</h2>

          <a className="button" href="https://github.com/Cezerin3">
            <span>GitHub</span>
          </a>

          <a className="button" href="https://plusha.cezerin.net">
            <span>Demo Store Plusha Theme</span>
          </a>

          <a className="button" href="https://cezerin.net">
            <span>Demo Store Default Theme</span>
          </a>

          <a className="button" href="https://cezerin.net/admin">
            <span>Demo Store Dashboard</span>
          </a>

          <a className="button" href="https://t.me/cezerin">
            <span>Telegram Chat - Cezerin</span>
          </a>

          <a className="button" href="http://cezerin3.web.app/docs/">
            <span>Docs</span>
          </a>

          <a className="button" href="http://cezerin3.web.app/docs/faq">
            <span>FAQ</span>
          </a>

          <a className="button" href="http://cezerin3.web.app/docs/howtos">
            <span>HowTos</span>
          </a>
        </div>
      </div>
    </section>

    <footer className="section">
      <div className="container">
        <div className="content">
          <div style={{ borderTop: "1px solid #eee" }}></div>
          <div style={{ padding: "40px 0 10px 0; color: #777" }}>
            &copy; This software is provided free of charge and without
            restriction under the
            <a href="https://github.com/Cezerin3/Store/blob/main/LICENSE">
              Unlicense
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
    <p>This site lastly was built on {data.site.buildTime}.</p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
