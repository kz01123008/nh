import React from "react";
import "./Footer.css";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Footer = () => {
  // Fecha
  let fecha = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>
            <FormattedMessage
              id="footer-info"
              defaultMessage="Page created by Nahuel61920"
            />
          </p>
          <p>&copy; {fecha}. All Rights Reserved.</p>
        </div>
        <div className="redes-sociales">
          <a
            href="ngochan6a5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-envelope"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100090349329728&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
