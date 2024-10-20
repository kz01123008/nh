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
                  Define your Brand Values and Mission: A Crucial First Step to
                  Success
                </h3>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  When starting to build a brand, defining core values and
                  mission is an extremely important first step. Core values are
                  not only the foundation of the organization but also what you
                  commit to bringing to the community. They reflect the spirit
                  and goals the brand aims for, thereby shaping a clear and
                  consistent communication strategy.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  At the same time, understanding your target audience is key to
                  success. Who are the people you want to connect with? What are
                  they looking for, and how can you engage with them
                  effectively? When you align your message with the needs and
                  expectations of your audience, you not only create a strong
                  connection but also build trust and support from them.
                  Executing these two steps well will establish a solid
                  foundation for all your future communication efforts.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Take the case of Pink Bow, an organization I co-founded. It
                  was initially my idea to help younger children in remote areas
                  of Vietnam. It’s quite alluring, right? However, your brand
                  values and mission need to be as specific as possible. It’s
                  the uniqueness that lets your organization stand out to
                  donors, sponsors, and the public. That’s why I started to
                  think deeply about how to make my organization distinctive.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  After considering many options, including landscapes and local
                  people, I reached a conclusion: “Pink Bow will help teenagers
                  gain knowledge about adolescence, hygiene, and, further,
                  evading underage marriage and school dropouts.”
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  So, your values and mission should be: specific and deep!
                </p>
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
