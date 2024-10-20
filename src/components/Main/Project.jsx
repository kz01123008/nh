import React from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context("../../img", true);

const Project = () => {
  return (
    <section className="proyectos" id="proyectos">
      <h2 className="heading">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>
      <div
        className="proyect-site"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="proyectos-slider mySwiper"
        >
          <SwiperSlide className="caja">
            <img src={proyectImg(`./help.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>
                Define your Brand Values and Mission: A Crucial First Step to
                Success
              </h3>
              <p>Han Speaking</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./help.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Create a Unique Logo</h3>
              <p>Han Speaking</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./help.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>
                Develop a Consistent Color Palette and Select Fonts and
                Typography
              </h3>
              <p>Han Speaking</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./help.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Organizing Events to Enhance Your Communication Identity</h3>
              <p>Han Speaking</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
      {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
      <div className="portafolio-btn">
        <Link to="/project">
          <ButtomGet />
        </Link>
      </div>
    </section>
  );
};
export default React.memo(Project);
