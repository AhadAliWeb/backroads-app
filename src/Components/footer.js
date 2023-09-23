import { socialLinks, listItems } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {listItems.map((link) => {
          return <PageLinks key={link.id} {...link} childClass="footer-link" />;
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <SocialLinks key={link.id} {...link} childClass="footer-icon" />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default footer;
