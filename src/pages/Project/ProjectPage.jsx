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

const Project = () => {
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
                  {/* <FormattedMessage
                    id="description"
                    defaultMessage="My name is Esteban Nahuel Carrizo and I am a full stack developer."
                  /> */}
                  <p
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: "1.8",
                      fontWeight: "600",
                      marginBottom: "16px",
                      color: "#f0f0f0",
                    }}
                  >
                    Hi everyone, this is Han speaking.
                  </p>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: "1.8",
                      color: "#ddd",
                      marginBottom: "16px",
                    }}
                  >
                    Many young people dream of starting their own charitable
                    organizations, but often don’t know where to begin. If
                    you’re passionate about helping those in need, I’m here to
                    guide you.
                  </p>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: "1.8",
                      color: "#ddd",
                      marginBottom: "16px",
                    }}
                  >
                    One of the most crucial steps is promoting your organization
                    effectively. Building a strong, charismatic, trustworthy,
                    and concise platform is key to attracting donors and gaining
                    support. Whether it’s through social media, a dedicated
                    website, or face-to-face outreach, creating the right
                    impression will set the foundation for success.
                  </p>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: "1.8",
                      color: "#ddd",
                      marginBottom: "16px",
                    }}
                  >
                    I’m here to help you refine the visual identity of your
                    personal projects, especially for those of you who are
                    interested in charity initiatives and event organization.
                  </p>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: "1.8",
                      color: "#ddd",
                      marginBottom: "16px",
                    }}
                  >
                    Building a strong visual identity not only helps your
                    project stand out but also establishes trust and attracts
                    support from the community. From logo design and color
                    schemes to how you convey your message on various media
                    platforms, every element plays a crucial role in bringing
                    your project closer to potential supporters and donors.
                  </p>
                  <h3
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: "24px",
                      marginBottom: "16px",
                    }}
                  >
                    Build up your own communication identity system:
                  </h3>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: "1.8",
                      color: "#ddd",
                      marginBottom: "16px",
                    }}
                  >
                    Building a communication identity system (CIS) is essential
                    for creating a cohesive and recognizable brand across
                    various platforms. Here's a step-by-step guide to help you
                    create an effective CIS:
                  </p>
                  <ol
                    style={{
                      fontSize: "1.6rem",
                      marginLeft: "1.5rem",
                      color: "#ddd",
                      lineHeight: "1.8",
                    }}
                  >
                    <li>Define Your Brand Values and Mission</li>
                    <li>Create a Unique Logo</li>
                    <li>Develop a Consistent Color Palette</li>
                    <li>Select Fonts and Typography</li>
                    <li>Design Visual Elements</li>
                    <li>Create Templates</li>
                    <li>Organize Events</li>
                  </ol>
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

export default Project;
