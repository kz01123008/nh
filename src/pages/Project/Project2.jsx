import React, { useState } from "react";
import "./ProjectPage.css";
/* React router */
import { NavLink } from "react-router-dom";

/* Component */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */
const proyectsImg = require.context("../../img", true);

const Project2 = () => {
  const [estadoModal17, cambiarEstadoModal17] = useState(false);

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage id="projects" defaultMessage="Projects" />
          </h1>
          <div
            style={{
              display: "flex",
              width: "100%",
              minHeight: "100vh",
            }}
          >
            <nav className="navbar nav-proj" style={{ flex: "0 0 30%" }}>
              <NavLink to="/project" offset={-150} duration={500}>
                <FormattedMessage id="site-web" defaultMessage="websites" />
              </NavLink>
              <NavLink to="/project/app" offset={-150} duration={500}>
                Define your Brand Values and Mission
              </NavLink>
              <NavLink to="/project/game" offset={-150} duration={500}>
                <FormattedMessage id="games" defaultMessage="games" />
              </NavLink>
              <NavLink to="/project/1" offset={-150} duration={500}>
                <FormattedMessage id="1" defaultMessage="1" />
              </NavLink>
              <NavLink to="/project/2" offset={-150} duration={500}>
                <FormattedMessage id="2" defaultMessage="2" />
              </NavLink>
              <NavLink to="/project/3" offset={-150} duration={500}>
                <FormattedMessage id="3" defaultMessage="3" />
              </NavLink>
            </nav>
            <section
              className="projects__grid paginas-web"
              style={{
                backgroundColor: "#1a1a1a",
                padding: "40px",
                borderRadius: "10px",
              }}
            >
              <div className="projects__item">
                <div>
                  <h3
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: "24px",
                      marginBottom: "16px",
                    }}
                  >
                    Creating Effective Design Templates for Consistency
                  </h3>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: "1.8",
                      color: "#ddd",
                      marginBottom: "16px",
                    }}
                  >
                    Creating design templates helps maintain consistency in your
                    organization’s materials and communications. These templates
                    save you time and energy when producing content. Here are
                    some steps to create effective design templates:
                  </p>
                  <ul
                    style={{
                      fontSize: "1.6rem",
                      marginLeft: "1.5rem",
                      color: "#ddd",
                      lineHeight: "1.8",
                    }}
                  >
                    <li>
                      <strong>Document Templates:</strong> Create templates for
                      documents, including newsletters, reports, or flyers. This
                      ensures a unified and professional design style throughout
                      all materials. In community organizations or events, it’s
                      common to use posters, banners, and leaflets containing
                      essential information, especially for organizations
                      focused on education, like Pink Bow. Below is a sample
                      leaflet from our team:
                    </li>
                    <li>
                      <strong>Social Media Templates:</strong> Develop templates
                      for social media posts to ensure that all your content has
                      a consistent visual identity. Use the selected visual
                      elements and fonts to create engaging posts. Currently,
                      while managing the social media pages of various projects,
                      I emphasize the importance of uniformity in both imagery
                      and tone. Each post must be polished, with no small errors
                      in color coordination, beautifully executed graphics, and
                      especially no typos.
                    </li>
                    <li>
                      <strong>Presentation Templates:</strong> If you frequently
                      present or organize events, create templates for your
                      presentation slides. This not only saves time but also
                      ensures that all slides are consistent and easy to follow.
                    </li>
                    <li>
                      <strong>Usage Guidelines for Templates:</strong> Create
                      guidelines for using your design templates so that
                      everyone in the organization knows how to use them
                      correctly. This helps maintain consistency and quality
                      across all materials.
                    </li>
                  </ul>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: "1.8",
                      color: "#ddd",
                      marginBottom: "16px",
                    }}
                  >
                    By designing unique visual elements and creating consistent
                    design templates, you will establish a strong brand identity
                    that is easily recognizable and memorable to your audience.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <ScrollToTop />

      <Footer />
    </div>
  );
};

export default Project2;
