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

const Project3 = () => {
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
                    Organizing Events to Enhance Your Communication Identity
                  </h3>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: "1.8",
                      color: "#ddd",
                      marginBottom: "16px",
                    }}
                  >
                    Organizing events is a powerful way to build your
                    organization’s communication identity and connect with your
                    audience. Events can serve multiple purposes, including
                    fundraising, awareness-building, and community engagement.
                    Here’s how to effectively organize an event that reinforces
                    your brand’s values and mission:
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
                      <strong>Define the Purpose and Goals:</strong>
                    </li>
                    <li>
                      <strong>Identify Your Audience:</strong>
                    </li>
                    <li>
                      <strong>Plan the Logistics:</strong> Choose a suitable
                      date, location, and format (in-person, virtual, or hybrid)
                      for your event. Consider factors like accessibility,
                      capacity, and necessary equipment. For example, create a
                      Masterplan of what to do and set the deadlines for it. For
                      the Logistics department, create a financial estimated
                      budget board to keep track of the setup process of the
                      event.
                    </li>
                    <li>
                      <strong>Develop a Theme and Messaging:</strong>
                    </li>
                    <li>
                      <strong>Promote the Event:</strong> Utilize various
                      communication channels to promote your event. For Pink
                      Bow, we used FB Post, FB Instagram, posters, banners, and
                      school boards, as well as student groups to promote our
                      fundraising event.
                    </li>
                    <li>
                      <strong>Create Engaging Content:</strong> Plan activities
                      and content that will engage participants.
                    </li>
                    <li>
                      <strong>Gather Feedback and Evaluate:</strong> After the
                      event, collect feedback from participants to assess what
                      worked well and what could be improved. This information
                      is invaluable for future events and helps you continually
                      refine your approach. Open a feedback Google Form to
                      gather feedback for further evaluation.
                    </li>
                    <li>
                      <strong>Follow Up:</strong> After the event, follow up
                      with attendees to thank them for their participation.
                      Share highlights from the event and any next steps for
                      engaging with your organization. This helps maintain the
                      connection and fosters ongoing support. The media teams
                      should capture the most beautiful pictures for the recap
                      posts.
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
                    Specially for our trip to the SPF 4, this is our recap
                    picture that captivates our highlighted moments: SF4.
                  </p>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: "1.8",
                      color: "#ddd",
                      marginBottom: "16px",
                    }}
                  >
                    By effectively organizing events, you can create memorable
                    experiences that not only enhance your organization’s
                    communication identity but also build trust, support, and
                    engagement within the community. Events can become powerful
                    platforms to showcase your mission and inspire action,
                    further solidifying your brand in the minds of your
                    audience.
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

export default Project3;
