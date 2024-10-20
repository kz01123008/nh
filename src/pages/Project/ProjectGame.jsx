import React, { useState } from "react";
import "./ProjectPage.css";

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from "react-router-dom";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */
const proyectsImgApp = require.context("../../img", true);

function ProjectApp() {
  const [estadoModal18, cambiarEstadoModal18] = useState(false);
  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading">
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
              className="projects__grid apps"
              style={{
                backgroundColor: "#1a1a1a",
                padding: "40px",
                borderRadius: "10px",
                marginBottom: "24px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#fff",
                    marginBottom: "16px",
                  }}
                >
                  When we think of apple, the first image that likely comes to
                  mind is the iconic bitten apple logo, right?
                </h3>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  A logo is a crucial element in the development and promotion
                  of an organization. it symbolizes the values, mission, and
                  spirit of the brand.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  When designing a logo, it's important to prioritize
                  simplicity, uniqueness, and versatility. typically, a logo
                  should feature a character—a mascot— that tells a story and
                  helps the audience understand the organization.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  for example, when working on the pink bow project, we used
                  keywords that encapsulated our mission: charity, girls, gender
                  issues, and gender awareness education. we decided to create a
                  brand story centered around the pink rabbit—a charming
                  character adorned with a pink bow around its neck. this gave
                  us two mascots: the pink rabbit and the bow. together, these
                  characters navigate the challenges of adolescence, with the
                  pink bow symbolizing our team’s desire to support children in
                  remote areas.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  by establishing a strong logo and mascot, we can effectively
                  communicate our mission and create a memorable brand identity.
                </p>
                <img
                  src={require("../../assets/content.png")}
                  alt="Brand Visual"
                  style={{
                    width: "50%",
                    borderRadius: "10px",
                    marginBottom: "16px",
                  }}
                />
              </div>
            </section>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default ProjectApp;
