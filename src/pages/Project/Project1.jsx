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
                  Develop a Consistent Color Palette and Select Fonts and
                  Typography
                </h3>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Creating a cohesive color palette is vital for establishing
                  your brand's visual identity. Colors evoke emotions and convey
                  messages, so it’s important to choose colors that align with
                  your organization's values and mission. Here’s how to develop
                  a consistent color palette:
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Identify Key Colors: Start by selecting a few key colors that
                  represent your brand. Consider the emotions you want to evoke.
                  For instance:
                  <br />
                  Blue often conveys trust and professionalism. For charity
                  organizations specifically, blue refers to “Hospital”,
                  “Health”, “Caring”. So, many of the hospital volunteering
                  projects used the Blue palette in their designs.
                </p>
                <img
                  src={require("../../assets/content1.PNG")}
                  alt="Content 1"
                />
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Our team Sending Hugs used Light blue shades and pink. As a
                  volunteering group committing voluntary work at the National
                  Children’s Hospital, the use of blue refers to eagerness,
                  health and trust.
                  <br />
                  Green symbolizes growth and harmony.
                </p>
                <img
                  src={require("../../assets/content2.PNG")}
                  alt="Content 2"
                />
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Red can represent passion and energy.
                </p>
                <img
                  src={require("../../assets/content3.PNG")}
                  alt="Content 4"
                />
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Consider Color Combinations: Choose complementary colors that
                  work well together. Utilize tools like color wheels or online
                  color palette generators to find harmonious combinations.
                </p>
                <img
                  src={require("../../assets/content4.PNG")}
                  alt="Content 4"
                />
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Even though the “Hot pick” of most charity organizations is
                  blue and green, you could also mix shades and hues together,
                  to create artistically - visually pleasant designs that convey
                  your message. Pink is youthful, girly, while Yellow is active,
                  and White is innocent and pure. All colors have their own
                  obscured meanings and it’s fun to uncover those meanings to
                  find the most suitable ones for your projects.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Limit Your Palette: Aim for 3-5 primary colors to maintain
                  consistency across all branding materials.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Test in Different Mediums: Ensure your color palette looks
                  good in various applications, such as print, digital, and
                  merchandise.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Select Fonts and Typography
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Fonts and typography play a significant role in how your brand
                  communicates its message. The right font can enhance
                  readability and establish a tone that aligns with your brand
                  identity. Here’s how to select appropriate fonts:
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Choose Primary and Secondary Fonts: Select a primary font for
                  headings and a secondary font for body text. Ensure that the
                  fonts complement each other. For example, you might choose a
                  bold sans-serif font for headings and a clean serif font for
                  body text.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Consider Readability: Make sure your chosen fonts are easy to
                  read across different platforms and sizes. Avoid overly
                  decorative fonts for body text, as they can be hard to read.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Reflect Brand Personality: Your font choices should reflect
                  your brand's personality. For instance, a playful organization
                  might opt for whimsical fonts, while a professional one may
                  choose more traditional styles.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  Establish Hierarchy: Use different font sizes, weights, and
                  styles to create a visual hierarchy in your content. This
                  helps guide the reader's attention and makes the information
                  easier to digest.
                </p>
                <p
                  style={{
                    fontSize: "1.6rem",
                    lineHeight: "1.8",
                    color: "#ddd",
                    marginBottom: "16px",
                  }}
                >
                  By developing a consistent color palette and selecting
                  complementary fonts and typography, you can create a strong
                  visual identity that resonates with your audience and enhances
                  brand recognition.
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
